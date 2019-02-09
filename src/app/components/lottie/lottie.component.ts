import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as lottie from 'lottie-web';

export interface LottieParams {
  autoplay?: boolean;
  animationData?: any;
  container: any;
  loop?: boolean | number;
  name?: string;
  path: string;
  renderer?: 'svg' | 'canvas' | 'html';
}

export interface LottieAnimation {
  play(name?: string): void;
  pause(name?: string): void;
  stop(name?: string): void;
  destroy(): void;
}

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent implements OnInit {

  params: LottieParams;

  @Output() animationCreated = new EventEmitter<LottieAnimation>();

  @ViewChild('lottieContainer') lottieContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    this.params = {
      name: 'h',
      container: this.lottieContainer.nativeElement,
      renderer: 'canvas',
      path: 'assets/lottie/empty_box.json',
      loop: true,
      autoplay: false,
    };

    const animation = lottie.loadAnimation(this.params);
    console.log(animation);

    this.animationCreated.emit(animation);
  }

}
