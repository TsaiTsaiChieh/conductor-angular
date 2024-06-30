import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-workflow-search',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workflow-search.component.html',
  styleUrl: './workflow-search.component.scss',
})
export class WorkflowSearchComponent {
  workflowName = signal<string>('');
  workId = signal<string>('');
  status = signal<string>('');
  days = signal<number | undefined>(undefined);

  protected onInput(event: Event) {
    // this.value.set((event.target as HTMLInputElement).value);
  }

  searchWorkflow(): void {
    console.log(this.workflowName());
  }
}
