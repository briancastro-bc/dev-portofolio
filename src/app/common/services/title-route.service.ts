import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleRouteService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
  ) { }

  initRouteConfiguration(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while(route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      switchMap((route) => route.data),
      map((data) => data['title'])
    ).subscribe((dataTitle) => this.title.setTitle(dataTitle));
  }
}
