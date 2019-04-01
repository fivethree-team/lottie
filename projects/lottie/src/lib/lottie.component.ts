import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import * as lottie from 'lottie-web';
import { LottieParams, LottieAnimation } from './symbols';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'fiv-lottie',
  template: `
    <div #lottieContainer [ngStyle]="{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}">
    </div>
  `,
  styles: []
})
export class LottieComponent implements OnInit {

  @Input() params: LottieParams;
  @Input() width: number;
  @Input() height: number;

  @Output() animationCreated = new EventEmitter<LottieAnimation>();

  @ViewChild('lottieContainer') lottieContainer: ElementRef;

  public viewWidth: string;
  public viewHeight: string;

  private _params: LottieParams;

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) { return; }

    this._params = {
      autoplay: this.params.autoplay,
      animationData: this.params.animationData,
      container: this.params.container || this.lottieContainer.nativeElement,
      loop: this.params.loop,
      name: this.params.name,
      path: this.params.path || '',
      renderer: this.params.renderer || 'svg',
      rendererSettings: this.params.rendererSettings
    };

    const animation = lottie.loadAnimation(this._params);

    this.viewWidth = this.width + 'px' || '100%';
    this.viewHeight = this.height + 'px' || '100%';

    animation.addEventListener('DOMLoaded', () => {
      this.animationCreated.emit(animation);
    });
  }

}
