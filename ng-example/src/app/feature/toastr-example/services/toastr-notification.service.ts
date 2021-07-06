import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title?: string | null, override?: Partial<IndividualConfig>){
    this.toastr.success(message, title || 'Success', override || {});
  }

  error(message: string, title?: string | null, override?: Partial<IndividualConfig>){
      this.toastr.error(message, title || 'Error', override || {});
  }

  info(message: string, title?: string | null, override?: Partial<IndividualConfig>){
      this.toastr.info(message, title || 'Info', override || {});
  }

  warning(message: string, title?: string | null, override?: Partial<IndividualConfig>){
      this.toastr.warning(message, title || 'Warning', override || {});
  }
}
