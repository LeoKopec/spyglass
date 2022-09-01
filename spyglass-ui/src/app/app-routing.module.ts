import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayGoalsComponent } from './components/display-goals/display-goals.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [{
  path: 'homepage',
  component: HomepageComponent
}, {
  path: 'goals',
  component: DisplayGoalsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
