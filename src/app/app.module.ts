import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
import { TimerComponent } from './timer/timer.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { GradeService } from './grade.service';
import { TimerService } from './timer.service';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TaskComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'disciplinas', component: DisciplinasComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TaskComponent,
    NavbarComponent,
    TimerComponent,
    DisciplinasComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, GradeService]
})
export class AppModule {}
