import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { BagelsComponent } from './bagels/bagels.component';
import { CoffeeComponent } from './coffee/coffee.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: 'bagels', component: BagelsComponent },
			{ path: 'coffee', component: CoffeeComponent },
			{ path: '**', redirectTo: 'bagels' }
		]
	}
];

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		RouterModule.forChild(routes),
		LayoutModule
	],
	declarations: [HomeComponent, BagelsComponent, CoffeeComponent]
})
export class HomeModule {}
