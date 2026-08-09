import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Person } from './person/person';
import { PersonList } from './person-list/person-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Update } from './update/update';
import { Home } from './home/home';

@NgModule({
  declarations: [App, Person, PersonList, Update, Home],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: Home },
      { path: 'person', component: Person },
      { path: 'person-list', component: PersonList },
      { path: 'update/:pid', component: Update },
    ]),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
