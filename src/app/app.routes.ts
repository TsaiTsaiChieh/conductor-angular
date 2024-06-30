import { Routes } from '@angular/router';
import { ExecutionsComponent } from './pages/executions/executions.component';
import { DefinitionsComponent } from './pages/definitions/definitions.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: ExecutionsComponent },
  { path: 'definitions', component: DefinitionsComponent },
  // Add a wildcard route for handling 404 errors (optional)
  { path: '**', redirectTo: '/' },
];
