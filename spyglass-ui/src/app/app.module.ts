import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayGoalsComponent } from './components/display-goals/display-goals.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {ProgressBarModule} from 'primeng/progressbar';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGoalComponent } from './components/new-goal/new-goal.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ViewGoalComponent } from './components/view-goal/view-goal.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    DisplayGoalsComponent,
    HomepageComponent,
    NavbarComponent,
    NewGoalComponent,
    ViewGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DataViewModule,
    ProgressBarModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ToastModule,
    SimpleNotificationsModule.forRoot(),
    InputTextareaModule,
    CalendarModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
