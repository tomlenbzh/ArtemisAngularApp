import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { SeoService } from '@app/core/utils/services/seo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'artemis-references-container',
  templateUrl: './references-container.component.html',
  styleUrls: ['./references-container.component.scss']
})
export class ReferencesContainerComponent implements OnInit, OnDestroy {

  routeSubscription$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.routeSubscription$ = this.route.data.subscribe((data: Data) => this.seoService.updateMetaData({ title: data.title }));
  }

  ngOnDestroy(): void {
    this.routeSubscription$.unsubscribe();
  }
}
