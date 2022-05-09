import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}
  @ViewChild('name') nameKey!: ElementRef;
  ngOnInit(): void {}

  startQuiz() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
}
