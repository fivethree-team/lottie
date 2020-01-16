# Lottie Animation Component

[![npm version](https://badge.fury.io/js/%40fivethree%2Flottie.svg)](https://www.npmjs.com/@fivethree/lottie)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/fivethree-team/lottie/blob/master/LICENSE)

Lottie Animation Component for Angular 8 or higher.

| Angular | @fivehtree/core |
| ------- | --------------- |
| 8/9     | 0.3.x+          |
| 7       | 0.2.x           |

## 📦 Installation

```console
npm install @fivethree/lottie lottie-web --save

# or if you are using yarn
yarn add @fivethree/lottie lottie-web
```

## 🔨 Usage

Import the module into your root application module:

```typescript
import { NgModule } from '@angular/core';
import { LottieModule } from '@fivethree/lottie';

@NgModule({
  imports: [LottieModule]
})
export class AppModule {}
```

## 🦁 Animation

Add the lottie component to your template:

```html
<fiv-lottie
  [params]="lottieParams"
  [width]="250"
  [height]="250"
  (animationCreated)="onAnimationCreated($event)"
></fiv-lottie>
```

You need to setup the `lottieParams` in your component:

```typescript
import { Component } from '@angular/core';
import { LottieAnimation, LottieParams } from '@fivethree/lottie';

Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  lottieParams: LottieParams = {
    path: 'assets/lottie/empty_box.json',
    renderer: 'canvas',
    loop: true
  };

  onAnimationCreated(animation: LottieAnimation) {
    animation.play();
    animation.setSpeed(0.8);
  }
}
```

Save your lottie files in the assets folder and change the `path` param, this way they are copied when building your application.
