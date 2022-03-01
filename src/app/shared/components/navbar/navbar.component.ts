import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private confirm: ConfirmationService) { }

  ngOnInit(): void {}

  confirmDownload(): void {
    this.confirm.confirm({
      message: 'Are you sure that you want to download my resume?',
      header: 'Download',
      closeOnEscape: true,
      accept: () => {
        document.location.href = './assets/resume.pdf'
      },
      reject: () => {
        console.log('Rejected');
      }
    });
  }

}
