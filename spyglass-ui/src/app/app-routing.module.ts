import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayGoalsComponent } from './components/display-goals/display-goals.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewGoalComponent } from './components/new-goal/new-goal.component';
import { ViewGoalComponent } from './components/view-goal/view-goal.component';

const routes: Routes = [{
  path: 'homepage',
  component: HomepageComponent
}, {
  path: 'goals',
  component: DisplayGoalsComponent
}, {
  path: 'newGoal',
  component: NewGoalComponent
}, {
  path: 'viewGoal',
  component: ViewGoalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
