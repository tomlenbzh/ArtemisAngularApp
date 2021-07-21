import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { SeoService } from '@app/core/utils/services/seo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'artemis-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit, OnDestroy {

  routeSubscription$: Subscription;
  breadcrumb: string[];

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.routeSubscription$ = this.route.data.subscribe((data: Data) => {
      this.breadcrumb = Array.isArray(data?.breadcrumb) ? [...data?.breadrumb] : [data?.breadrumb];
      this.seoService.updateMetaData({ title: data?.title });
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription$.unsubscribe();
  }
}
