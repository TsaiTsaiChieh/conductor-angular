import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { WorkflowSearchComponent } from './workflow-search/workflow-search.component';
@Component({
  selector: 'app-executions',
  standalone: true,
  imports: [MatTabsModule, WorkflowSearchComponent],
  templateUrl: './executions.component.html',
  styleUrl: './executions.component.scss',
})
export class ExecutionsComponent {}
