import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReadcourseComponent } from './readcourse/readcourse.component';
import { MapsComponent } from './maps/maps.component';
import { MailingComponent } from './mailing/mailing.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangeBgDirective } from './change-bg.directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslationComponent } from './translation/translation.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    ReadcourseComponent,
    MapsComponent,
    MailingComponent,
    QuestionComponent,
    WelcomeComponent,
    ChangeBgDirective,
    TranslationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
    }),
    
     ],
  providers: [
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
