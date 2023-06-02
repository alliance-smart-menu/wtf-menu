import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipe
import { PositionFilterPipe } from "./pipes/position-filter.pipe";
import { SubCategoryFilterPipe } from "./pipes/sub-category-filter.pipe";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WorkLayoutComponent } from './work-layout/work-layout.component';
import { MenuPageComponent } from './work-layout/menu-page/menu-page.component';
import { AboutPageComponent } from './work-layout/about-page/about-page.component';
import { LangPageComponent } from './work-layout/lang-page/lang-page.component';
import { PositionPageComponent } from './position-page/position-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    PositionFilterPipe,
    SubCategoryFilterPipe,    
    AppComponent,
    WelcomePageComponent,
    WorkLayoutComponent,
    MenuPageComponent,
    AboutPageComponent,
    LangPageComponent,
    PositionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,

    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'ru' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
