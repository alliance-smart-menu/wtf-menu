import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { WorkLayoutComponent } from './work-layout/work-layout.component';
import { MenuPageComponent } from './work-layout/menu-page/menu-page.component';
import { AboutPageComponent } from './work-layout/about-page/about-page.component';
import { LangPageComponent } from './work-layout/lang-page/lang-page.component';

import { PositionPageComponent } from './position-page/position-page.component';

const routes: Routes = [
  {path: 'welcome',  component: WelcomePageComponent},

  { path: '', component: WorkLayoutComponent, 
  children: 
  [
    {path: '', redirectTo: '/welcome',  pathMatch: 'full' },
    {path: 'menu',  component: MenuPageComponent},
    {path: 'about',  component: AboutPageComponent},
    {path: 'lang',  component: LangPageComponent},
  ]
  },

  {path: 'position',  component: PositionPageComponent},

  { path: "**", redirectTo: "/welcome", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
