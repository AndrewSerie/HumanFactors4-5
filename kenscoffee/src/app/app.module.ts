import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartService } from './services/cart.service';
import { MockDataService } from './services/mock-data.service';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ToastService } from './services/toast.service';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot({ mode: 'ios' }),
		AppRoutingModule,
		HomeModule,
		CheckoutModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		CartService,
		MockDataService,
		ToastService,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
