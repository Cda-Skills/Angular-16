import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'users', component: UserListComponent },
	{ path: 'create-user', component: UserCreateComponent },
	{ path: 'update-user/:id', component: UserUpdateComponent },
	{ path: 'articles', component: ArticleListComponent},
	{ path: 'create-article', component: ArticleCreateComponent },
	{ path: 'update-article/:id', component: ArticleUpdateComponent },
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
