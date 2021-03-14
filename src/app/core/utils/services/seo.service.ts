import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMetadata } from '@app/core/utils/interfaces/metadata';
import { DefaultMetadata } from '@app/core/utils/constants/metadata';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  baseTitle = 'Artemis';
  defaultMetaData = DefaultMetadata;

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  /**
   * Updates the current page's metadata for SEO puposes.
   *
   * @param metadata        PageMetadata    // The current page's specific metadata
   */
  updateMetaData(metadata: Partial<PageMetadata>): void {

    const pageMetadata: PageMetadata = {...this.defaultMetaData, ...metadata};
    const metatags: MetaDefinition[] = this.generateMetaDefinitions(pageMetadata);

    this.metaTagService.addTags([
      ...metatags,
      // { property: 'og:url', content: `${this.hostUrl}${this.router.url}`},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    ]);

    this.titleService.setTitle(metadata.title ? `${this.baseTitle} | ${metadata.title}` : `${this.baseTitle}`);
  }

  /**
   * Returns the current page's metatags definition.
   *
   * @param metadata        PageMetadata    // The current page's metadata, merged with the default ones
   * @returns               MetaDefinition  // The new metatags definition
   */
  private generateMetaDefinitions(metadata: PageMetadata): MetaDefinition[] {
    return [
      { name: 'title', content: metadata.title },
      { property: 'og:title', content: metadata.title },
      { name: 'description', content: metadata.description },
      { property: 'og:description', content: metadata.description },
      { name: 'author', content: metadata.author },
      { property: 'og:author', content: metadata.author },
      { name: 'keywords', content: metadata.keywords.join(', ') },
      { property: 'og:type', content: metadata.type }
    ];
  }
}
