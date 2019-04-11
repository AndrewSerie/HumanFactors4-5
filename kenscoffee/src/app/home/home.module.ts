import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		RouterModule.forChild(routes),
		LayoutModule
	],
	declarations: [HomeComponent]
})
export class HomeModule {}
