import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPgPageRoutingModule } from './contact-pg-routing.module';

import { ContactPgPage } from './contact-pg.page';
import {SharedcomponentModule} from '../sharedcomponent/sharedcomponent.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPgPageRoutingModule,
    SharedcomponentModule
    ],
  declarations: [ContactPgPage]
})
export class ContactPgPageModule {}
