import { Component } from '@angular/core';
import { UserService } from '../../../@core/data/users.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./responder.component.scss'],
  templateUrl: './responder.component.html',
})
export class ResponderComponent {
  user_name;
  user_reclama;

  confirmado = false;

  constructor(private userService: UserService,
    private toasterService: ToasterService)     {
      this.user_name =  userService.getUserName();
      this.user_reclama =  userService.getUserReclama();
    }

    
  config: ToasterConfig;

  position = 'toast-center';
  animationType = 'fade';
  title = 'Mensagem enviada com sucesso!';
  content = '';
  timeout = 5000;
  toastsLimit = 5;
  type = 'success';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  makeToast() {
    this.showToast(this.type, this.title, this.content);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  
  onSubmit() {
    this.confirmado = true;
  }
    
}

