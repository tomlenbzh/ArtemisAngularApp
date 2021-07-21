import { Component, Input } from '@angular/core';

@Component({
  selector: 'artemis-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() breadcrumb: string[];
}
