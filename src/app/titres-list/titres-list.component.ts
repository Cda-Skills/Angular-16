import { Component, ViewChild  } from '@angular/core';
import { TableService } from '../table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
	id: string;
	userId: string;
	title: string;
	body: string;
}

@Component({
  selector: 'app-titres-list',
  templateUrl: './titres-list.component.html',
  styleUrls: ['./titres-list.component.css']
})
export class TitresListComponent {
displayedColumn: string[] = ['id', 'userId', 'title', 'body'];
	dataSource!: MatTableDataSource<UserData>;
	@ViewChild(MatPaginator) paginator!: MatPaginator
	@ViewChild(MatSort) sort!: MatSort
	
	posts: any

	constructor(private service: TableService) {
		this.service.getData().subscribe(data => {
			console.log(data);
			this.posts = data;

			this.dataSource = new MatTableDataSource(this.posts);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
		}
		
		applyFilter(event: Event){
			const filterValue = (event.target as HTMLInputElement).value;
			this.dataSource.filter = filterValue.trim().toLowerCase()
			
			if (this.dataSource.paginator){
				this.dataSource.paginator.firstPage()
			}
		
		
	}
}
