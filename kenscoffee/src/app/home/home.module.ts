import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { BagelsComponent } from './bagels/bagels.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { AddonsComponent } from './addons/addons.component';

@NgModule({
	imports: [IonicModule, CommonModule, LayoutModule],
	declarations: [
		HomeComponent,
		BagelsComponent,
		CoffeeComponent,
		AddonsComponent
	]
})
export class HomeModule {}
