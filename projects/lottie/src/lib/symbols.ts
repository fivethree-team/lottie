export interface LottieParams {
    autoplay?: boolean;
    animationData?: any;
    container?: any;
    loop?: boolean | number;
    name?: string;
    path: string;
    renderer?: 'svg' | 'canvas' | 'html';
    rendererSettings?: LottieRenderSettings;
}

export interface LottieRenderSettings {
    context: any;
    scaleMode: 'noScale' | string;
    clearCanvas: boolean;
    progressiveLoad: boolean;
    hideOnTransparent: boolean;
    className: string;
}

export interface LottieAnimation {
    /**
     * @param name to target a specific animation
     */
    play(name?: string): void;
    /**
    * @param name to target a specific animation
    */
    pause(name?: string): void;
    /**
     * @param name to target a specific animation
     */
    stop(name?: string): void;
    destroy(): void;
    /**
     * @param href usually pass as location.href. Its useful when you experience mask issue in safari where your url does not have # symbol.
     */
    setLocationHref(href: string);
    /**
     * @param speed 1 is normal speed, plays reverse if minus
     * @param name to target a specific animation
     */
    setSpeed(speed: number, name?: string);
    /**
     * @param value frame value
     * @param isFrame defines if first argument is a time based value or a frame based (default false)
     */
    goToAndStop(value: number, isFrame?: boolean);
    /**
     * @param value frame value
     * @param isFrame defines if first argument is a time based value or a frame based (default false)
     */
    goToAndPlay(value: number, isFrame?: boolean);
    /**
     * @param direction 1 is forward, -1 is reverse
     */
    setDirection(direction: 1 | -1);
    /**
     * @param inFrames If true, returns duration in frames, if false, in seconds
     */
    getDuration(inFrames?: boolean): number;
    /**
     * @param segments Can contain 2 numeric values that will be used as first and last frame of the animation.
     * Or can contain a sequence of arrays each with 2 numeric values.
     * @param forceFlag If set to false, it will wait until the current segment is complete. If true, it will update values immediately.
     */
    playSegments(segments: any[], forceFlag?: boolean);
}
