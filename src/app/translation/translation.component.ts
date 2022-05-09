import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from '../i18n-service/i18n-service.service'; 

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.sass']
})
export class TranslationComponent  {

  title = 'ngx-i18n';

  constructor(
    translate: TranslateService,
    private i18nService: I18nServiceService
  ) {
    translate.setDefaultLang('en');
    translate.use('ar');
  }

  changeLocale(locale: string) {
    this.i18nService.changeLocale(locale);   
  }
}
