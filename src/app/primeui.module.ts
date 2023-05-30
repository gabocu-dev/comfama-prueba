import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    SelectButtonModule,
    TableModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    ToastModule,
    PaginatorModule
  ],
  exports: [
    CarouselModule,
    SelectButtonModule,
    TableModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    ToastModule,
    PaginatorModule
  ]
})

export class PrimeuiModule { }
