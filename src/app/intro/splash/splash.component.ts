import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  public onboardSlides = [];
  @ViewChild('mainSlides', {static: true}) slides: IonSlides;
  constructor() { }

  ngOnInit() {
    this.onboardSlides = [
      {
        title: "Slide 1",
        img: "slide_1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Slide 2",
        img: "slide_2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Slide 3",
        img: "slide_3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }

  public goBack(){
    this.slides.slidePrev();
  }

  public skipBtn(){
    console.log("go home");
    
  }
  public goNext(){
    this.slides.slideNext();
  }

}
