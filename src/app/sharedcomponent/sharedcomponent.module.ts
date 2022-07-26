import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from '../components/logincomponent/logincomponent.component'
import { DashboardComponent } from '../components/dashboard/dashboard.component'

@NgModule({
  declarations: [LogincomponentComponent,DashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[LogincomponentComponent,DashboardComponent]

})

export class SharedcomponentModule { }
