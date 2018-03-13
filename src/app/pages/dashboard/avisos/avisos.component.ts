import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AvisosService } from '../../../@core/data/avisos.service';

@Component({
  selector: 'ngx-avisos',
  styleUrls: ['./avisos.component.scss'],
  templateUrl: './avisos.component.html',
})
export class AvisosComponent implements OnInit, OnDestroy {

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
  goToReclamacoes(a) {
    this.router.navigate(["../reclamacoes/responder"], { relativeTo: this.r });
    this.avisoService.setAviso(a);
  }
  goToListagem() {
    this.router.navigate(["../reclamacoes/listagem"], { relativeTo: this.r });
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
