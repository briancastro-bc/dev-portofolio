import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ConfirmationService } from 'primeng/api';

import { environment } from '@env/environment';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		SharedModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
	providers: [ConfirmationService],
	bootstrap: [AppComponent],
})
export class AppModule {}
