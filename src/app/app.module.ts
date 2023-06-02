import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
