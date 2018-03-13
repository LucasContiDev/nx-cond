import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { Router, ActivatedRoute } from '@angular/router';
import { AvisosService } from '../../../@core/data/avisos.service';

@Component({
  selector: 'ngx-listagem',
  styleUrls: ['./listagem.component.scss'],
  templateUrl: './listagem.component.html',
})
export class ListagemComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;
  aviso:any;

  constructor(private avisoService: AvisosService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private router: Router, private r:ActivatedRoute) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ///
  goToAvisos(a) {
    this.router.navigate(["../avisos/cadastrar"], { relativeTo: this.r });
    this.avisoService.setAviso(a);
  }

  ngOnInit() {

    this.avisoService.getAvisos()
      .subscribe((avisos: any) => {
        this.contacts = [
          {aviso: avisos.a},
          {aviso: avisos.b}
        ];
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
