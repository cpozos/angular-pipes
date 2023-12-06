import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Local configuration for the app. Adds locals used across the app
import localDeutsch from '@angular/common/locales/de';
import localFrCa from '@angular/common/locales/fr-CA';
import localMexico from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localDeutsch);
registerLocaleData(localFrCa);
registerLocaleData(localMexico);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' } // Define the default local value
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
