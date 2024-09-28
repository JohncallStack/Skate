import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import { SkateparksComponent } from './skateparks/skateparks.component';
import { HomeComponent } from './home/home.component';

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
];
