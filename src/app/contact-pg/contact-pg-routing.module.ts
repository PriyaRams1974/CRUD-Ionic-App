import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPgPage } from './contact-pg.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPgPageRoutingModule {}
