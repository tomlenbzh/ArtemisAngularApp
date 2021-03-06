import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/material.module';
import { LayoutContainerComponent } from '@app/core/containers/layout/layout.container.component';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { SidebarComponent } from '@app/core/components/sidebar/sidebar.component';
import { FooterComponent } from '@app/core/components/footer/footer.component';

describe('LayoutContainerComponent', () => {
  let component: LayoutContainerComponent;
  let fixture: ComponentFixture<LayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutContainerComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        SharedModule,
        MaterialModule
    ]
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
