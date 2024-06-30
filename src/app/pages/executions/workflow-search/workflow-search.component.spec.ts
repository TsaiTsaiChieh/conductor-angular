import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSearchComponent } from './workflow-search.component';

describe('WorkflowSearchComponent', () => {
  let component: WorkflowSearchComponent;
  let fixture: ComponentFixture<WorkflowSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkflowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
