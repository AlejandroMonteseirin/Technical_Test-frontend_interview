import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store, StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      providers: [
        MessageService,Store,StateObservable,ActionsSubject,ReducerManager,ReducerManagerDispatcher],
        imports:[HttpClientTestingModule,StoreModule,StoreModule.forRoot({}) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
