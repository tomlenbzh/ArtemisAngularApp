import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutContainerComponent } from '@app/core/containers/layout/layout.container.component';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { SidebarComponent } from '@app/core/components/sidebar/sidebar.component';

describe('LayoutContainerComponent', () => {
  let component: LayoutContainerComponent;
  let fixture: ComponentFixture<LayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutContainerComponent,
        SidebarComponent,
        HeaderComponent
      ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
