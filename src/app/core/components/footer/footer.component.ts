import { Component, OnInit } from '@angular/core';
import { AppLogo } from '@app/core/utils/constants/layout';

@Component({
  selector: 'artemis-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appLogo = AppLogo;

  constructor() { }

  ngOnInit(): void { }

}
