import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdsComponent } from './ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeatureMainComponent } from './feature-main/feature-main.component';
import { FeatureComponent } from './feature-main/feature/feature.component';
import { FeatureThumbComponent } from './feature-main/feature-thumb/feature-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdsComponent,
    HomeComponent,
    FeatureMainComponent,
    FeatureComponent,
    FeatureThumbComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
