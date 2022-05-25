import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnDestroy {
  constructor() {}
  public title: string = `Hello world`;
  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('Elemento destruído.');
  }
}
