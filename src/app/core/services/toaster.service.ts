import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterServices {

  constructor(private toaster: ToastrService) { }
  showSuccess(msg='Success'): void {
    this.toaster.success(msg);
  }
  showError(msg: any): void {
    this.toaster.error(msg);
  }
}
