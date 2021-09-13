import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {RatingModule} from 'primeng/rating';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    SliderModule,
    ProgressBarModule,
    RatingModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    ButtonModule,
    SliderModule,
    ProgressBarModule,
    RatingModule
  ]
})
export class PrimeNgModule {
}
