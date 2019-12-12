/*import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  constructor(@Inject('AppConfig') public AppConfig) { }

  ngOnInit() {
  }

}*/


import { Component, Inject } from '@angular/core';

@Component({
  selector: 'prefs-component',
  //template: '<div><h1>testt</h1></div>',
  templateUrl: './test.component.html'
})
export class TestComponent {
  prefs;

  constructor(@Inject('AppConfig') public AppConfig) { }

  ngOnInit() {

  }

}

