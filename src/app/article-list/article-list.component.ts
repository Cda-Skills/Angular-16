import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../article.model';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

	articles: Article[] | undefined;

	constructor(private articleService: ArticleService, private router: Router) {

	}
	
	ngOnInit(): void {
		this.getArticles();
		}
	private getArticles(){
		this.articleService.getArticleList().subscribe(data => {
			this.articles = data;
		});
	}	
	
	private updateArticles(id: number){
		this.router.navigate(['update-article', id]);
	}
	
	deleteArticle(id:number){
		this.articleService.deleteArticle(id).subscribe(data => {
			this.getArticles();
		});
	}

}
