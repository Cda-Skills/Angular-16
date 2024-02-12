import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';

import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { TitresListComponent } from './titres-list/titres-list.component';


@NgModule({
	declarations: [
		AppComponent,
		UserCreateComponent,
		UserListComponent,		
		UserUpdateComponent,
		ArticleCreateComponent,
		ArticleListComponent,
		ArticleUpdateComponent,
  		TitresListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		EditorModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
