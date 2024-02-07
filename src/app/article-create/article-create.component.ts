import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

	article: Article = new Article();
	
	constructor(private articleService: ArticleService, private router: Router) { }
	
	ngOnInit(): void {}
	
	saveArticle() {
		this.articleService.createArticle(this.article).subscribe({
			next: (data) => {
				/*console.log(data);
				this.redirectToUserList();*/
			},
			error: (e) => {
				console.log(e);
			}
		});
	}
	
	/*	redirectToUserList() {
		this.router.navigate(['/users']);
	}*/

	onSubmit() {
		/*console.log(this.user);*/
		this.saveArticle();
	}
}
