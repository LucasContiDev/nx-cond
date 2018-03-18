import { Component } from '@angular/core';
import { AvisosService } from '../../../@core/data/avisos.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-cadastrar',
  styleUrls: ['./regimento-cadastrar.component.scss'],
  templateUrl: './regimento-cadastrar.component.html',
})
export class RegimentoCadastrarComponent {
  confirmado = false;

  constructor(private avisosService: AvisosService,
    private toasterService: ToasterService)     {
    }

    
  config: ToasterConfig;

  position = 'toast-center';
  animationType = 'fade';
  title = 'Aviso cadastrado com sucesso!';
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

  
  onSubmit(form: any): void {
    console.log('Valor do Form:', form)
    this.avisosService.setNovoAviso(form);
    this.confirmado = true;
  }
    
}

