import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home/bagels',
		pathMatch: 'full'
	},
	{
		path: 'home/:aux',
		component: HomeComponent
	},
	{
		path: 'checkout/:aux',
		component: CheckoutComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
