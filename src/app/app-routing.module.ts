import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAllComponent } from './pages/page-all/page-all.component';
import { PageActiveComponent } from './pages/page-active/page-active.component';
import { PageCompletedComponent } from './pages/page-completed/page-completed.component';

const routes: Routes = [
  { path: 'page-all', component: PageAllComponent },
  { path: 'page-active', component: PageActiveComponent },
  { path: 'page-completed', component: PageCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
