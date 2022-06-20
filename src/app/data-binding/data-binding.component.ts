import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public title: string = 'Hello World';
  public numero: number = 10;
  public checkedDisable: boolean = true;
  public imgSrc: string = ``;
  public description: string = ``;
  public position: { x: number; y: number } = {
    x: 0,
    y: 0,
  };
  public blockVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkDescription(`A`);
  }

  public checkDescription = (source: string): void => {
    if (source === 'A') {
      this.imgSrc = `https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/06/the-seo-guide-to-angular.png`;
      this.description = `Angular Logo`;
    } else if (source === 'R') {
      this.imgSrc = `https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png`;
      this.description = `React Logo`;
    } else {
      this.imgSrc = `https://img1.gratispng.com/20181115/eat/kisspng-logo-brand-product-trademark-font-5bedb1686372f4.3178948015423041044074.jpg`;
      this.description = `Undefined Logo`;
    }
  };

  public clickVerify = (): void => {
    alert(`Eai my friend`);
  };

  public mouseMouveTeste = (eventValue: MouseEvent) => {
    this.position.x = eventValue.offsetX;
    this.position.y = eventValue.offsetY;
    // const el = document.createElement('div');
    // el.innerHTML = `
    // <div style="background-color: yellow; width: 20px;"></div>
    // `;
    // const box = document.getElementById('box');
    // box?.appendChild(el);
  };
}
