import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CreationTeamComponent } from './creation-team/creation-team.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path:'CreationTeam', component:CreationTeamComponent},
  {path: '', component: MainComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponentComponent,
    CreationTeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
