import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;
  user:any;

  constructor(private userService: UserService,
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
  goToReclamacoes(c) {
    this.router.navigate(["../reclamacoes/responder"], { relativeTo: this.r });
    this.userService.setUser(c);
  }
  goToListagem() {
    this.router.navigate(["../reclamacoes/listagem"], { relativeTo: this.r });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
          {user: users.lucas},
          {user: users.nick},
          {user: users.eva},
          {user: users.jack},
          {user: users.lee},
          {user: users.alan},
          {user: users.kate}
        ];
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
