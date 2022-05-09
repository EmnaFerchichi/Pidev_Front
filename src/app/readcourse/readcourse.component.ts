import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {jsPDF} from "jspdf";
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { I18nServiceService } from '../i18n-service/i18n-service.service';


@Component({
  selector: 'app-readcourse',
  templateUrl: './readcourse.component.html',
  styleUrls: ['./readcourse.component.sass']
})
export class ReadcourseComponent implements OnInit {
  title1 = 'ngx-i18n';

  title(title: any) {
    throw new Error('Method not implemented.');
  }


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
  lang:any;

  public payPalConfig?: IPayPalConfig;
  showSuccess: any;

  ngOnInit(): void {
    this.initConfig();


  }
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

  makePDF(){
    let pdf=new jsPDF();
    pdf.text("Hello OSTechHelp",10,10);
    pdf.save();
  }

  
}
