import { Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewsComponent } from './pages/news/news.component';
import { RegisterComponent } from './pages/register/register.component';
import { SkateparksComponent } from './pages/skateparks/skateparks.component';
import { HomeComponent } from './pages/home/home.component';
import { SkateparkComponent } from './pages/skatepark/skatepark.component';
import { DbFormComponent } from './db-form/db-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'skateparks',
    component: SkateparksComponent,
  },
  {
    path: 'skatepark/:park_id',
    component: SkateparkComponent,
  },
  {
    path: 'form',
    component: DbFormComponent,
  }
];
