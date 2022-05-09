import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailingComponent } from './mailing/mailing.component';
import { MapsComponent } from './maps/maps.component';
import { QuestionComponent } from './question/question.component';
import { ReadComponent } from './read/read.component';
import { ReadcourseComponent } from './readcourse/readcourse.component';
import { TranslationComponent } from './translation/translation.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'read', component:ReadComponent},
  {path:'readcourse', component:ReadcourseComponent},
  {path:'map', component:MapsComponent},
  {path:'mailings', component:MailingComponent},
  {path:'question', component:QuestionComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'translation', component:TranslationComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
