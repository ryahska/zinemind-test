import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ToasterServices } from './services/toaster.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports: [

  ],
  providers: [
    ToastrService,
    ToasterServices,
  ]
})
export class CoreModule { }
