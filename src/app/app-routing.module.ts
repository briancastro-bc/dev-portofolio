import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		data: {
			title: 'Home',
		},
		loadChildren: () =>
			import('./modules/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'about',
		data: {
			title: 'About',
		},
		loadChildren: () =>
			import('./modules/about/about.module').then((m) => m.AboutModule),
	},
	{
		path: 'contact',
		data: {
			title: 'Contact',
		},
		loadChildren: () =>
			import('./modules/contact/contact.module').then((m) => m.ContactModule),
	},
	{
		path: '404',
		data: {
			title: 'Page Not Found',
		},
		loadChildren: () =>
			import('./modules/page-not-found/page-not-found.module').then(
				(m) => m.PageNotFoundModule
			),
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
