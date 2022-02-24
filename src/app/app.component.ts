import { Component, OnInit } from '@angular/core';

import { TitleRouteService } from '@app/common/services/title-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private titleRouteService: TitleRouteService
  ) {}

  ngOnInit(): void {
      this.titleRouteService.initRouteConfiguration();
  }
}
