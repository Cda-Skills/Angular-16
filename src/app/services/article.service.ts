import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../article.model'

@Injectable({
	providedIn: 'root'
})

export class ArticleService {

	private basUrl = "http://localhost:8080/article"
	
	constructor(private httpClient: HttpClient) { }

	getArticleList(): Observable<Article[]> {
		return this.httpClient.get<Article[]>(`${this.basUrl}`);
	}

	createArticle(article: Article): Observable<Object> {
		return this.httpClient.post(`${this.basUrl}`, article);
	}

	getArticleById(id: number): Observable<Article> {
		return this.httpClient.get<Article>(`${this.basUrl}/${id}`);
	}

	updateArticle(id: number, article: Article): Observable<Object> {
		return this.httpClient.put(`${this.basUrl}/${id}`, article);
	}

	deleteArticle(id: number): Observable<Object> {
		return this.httpClient.delete(`${this.basUrl}/${id}`);
	}
	
}
