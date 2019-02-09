import { LottieAnimation } from './../components/lottie/lottie.component';
import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  onAnimationCreated(animation: LottieAnimation) {
    animation.play('h');

    timer(1000).subscribe(() => animation.pause('h'));
  }
}
