import { Component, OnInit } from '@angular/core';
import { LazerService } from '../../../@core/data/lazer.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ngx-agendamentos-selecao',
  styleUrls: ['./agendamentos-selecao.component.scss'],
  templateUrl: './agendamentos-selecao.component.html',
})
export class AgendamentosSelecaoComponent implements OnInit {
  lazer_tipos: any[];
  themeSubscription: any;
  aviso:any;

  constructor(private lazerService: LazerService,
              private router: Router, private r:ActivatedRoute) {
  }

  ///
  goToCalendario(a) {
    this.router.navigate(["../calendario"], { relativeTo: this.r });
    this.lazerService.setLazer(a);
  }

  ngOnInit() {

    this.lazerService.getTipoLazer()
      .subscribe((tipo_lazer: any) => {
        this.lazer_tipos = [
          {lazer: tipo_lazer.churrasqueira},
          {lazer: tipo_lazer.salao_1},
          {lazer: tipo_lazer.salao_2}
        ];
      });
  }

}
