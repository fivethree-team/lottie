import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { LottieAnimation, LottieParams } from '@fivethree/lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lottieParams: LottieParams = {
    path: 'assets/lottie/empty_box.json',
    renderer: 'canvas',
    // autoplay: true,
    loop: true
  };

  onAnimationCreated(animation: LottieAnimation) {
    animation.play();
    animation.setSpeed(0.8);

    timer(1000).subscribe(() => animation.pause());
  }
}
