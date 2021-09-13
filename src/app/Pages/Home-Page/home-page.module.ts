import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import {WidgetModule} from "../../Widgets/widget.module";
import {AngularMaterialModule} from "../../Design-Modules/angular-material.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    WidgetModule,
    AngularMaterialModule
  ]
})
export class HomePageModule { }
