import {
  animationFrameScheduler,
  fromEvent,
  interval,
  map,
  observeOn,
  startWith,
} from 'rxjs';
import SimplexNoise from 'simplex-noise';
import { Disposable, unwrap } from 'utils';

const simplex = new SimplexNoise();

const scale = 0.1;
const circlePropCount = 8;
const baseSpeed = 0.1 * scale;
const rangeSpeed = 0.2 * scale;
const baseTTL = 200;
const rangeTTL = 500;
const hueOffset = 190;
const hueRange = 330;
const xOff = 0.5;
const yOff = 0.5;
const zOff = 0.5;
const saturation = 70;
const lightness = 40;

const maxHueOffset = hueRange - hueOffset / 2;
const hueCenter = hueOffset + maxHueOffset;

export class HeroCanvas extends Disposable {
  private readonly _circleCount: number =
    Math.round(Math.max(window.innerWidth, window.innerHeight) * 0.01) *
    devicePixelRatio;

  private readonly _circlePropsLength: number =
    this._circleCount * circlePropCount;

  private readonly _circleProps: Float32Array = new Float32Array(
    this._circlePropsLength,
  );

  private readonly _baseRadius: number =
    Math.round(
      Math.max(window.innerWidth, window.innerHeight) * 0.08 * devicePixelRatio,
    ) * scale;

  private readonly _rangeRadius: number =
    Math.round(
      Math.max(window.innerWidth, window.innerHeight) * 0.1 * devicePixelRatio,
    ) * scale;

  private _lifeTime = 0;

  private readonly _visibleContext: CanvasRenderingContext2D;

  private readonly _hiddenCanvas: HTMLCanvasElement;

  private readonly _hiddenContext: CanvasRenderingContext2D;

  constructor(private readonly _visibleCanvas: HTMLCanvasElement) {
    super();

    this._visibleContext = unwrap(
      this._visibleCanvas.getContext('2d'),
      "Didn't found canvas context",
    );

    this._hiddenCanvas = document.createElement('canvas');
    this._hiddenCanvas.style.filter = 'blur(90px)';

    this._hiddenContext = unwrap(
      this._hiddenCanvas.getContext('2d'),
      "Didn't found canvas context",
    );

    this.addDisposable(
      interval(0, animationFrameScheduler).subscribe(() => this.draw()),
    );

    this.addDisposable(
      fromEvent(window, 'resize', { passive: true })
        .pipe(
          startWith(undefined),
          observeOn(animationFrameScheduler),
          map(() => ({
            width: window.innerWidth * scale,
            height: window.innerHeight * scale,
          })),
        )
        .subscribe(({ width, height }) => {
          this._hiddenCanvas.width = width;
          this._hiddenCanvas.height = height;

          this._visibleCanvas.width = width;
          this._visibleCanvas.height = height;
        }),
    );

    for (
      let index = 0;
      index < this._circlePropsLength;
      index += circlePropCount
    ) {
      this._circleProps.set(this.createCircleProps(), index);
    }
  }

  private initCircle(index: number): void {
    this._circleProps.set(this.createCircleProps(), index);
  }

  private isInBounds(x: number, y: number, radius: number): boolean {
    return (
      x < -radius ||
      x > this._hiddenCanvas.width + radius ||
      y < -radius ||
      y > this._hiddenCanvas.height + radius
    );
  }

  private createCircleProps(): readonly number[] {
    const x = getRandomArbitrary(this._hiddenCanvas.width);
    const y = getRandomArbitrary(this._hiddenCanvas.height);
    const n = simplex.noise3D(x * xOff, y * yOff, this._lifeTime * zOff);
    const t = getRandomArbitrary(Math.PI * 2);
    const speed = getRandomArbitrary(rangeSpeed, baseSpeed);
    const vx = speed * Math.cos(t);
    const vy = speed * Math.sin(t);
    const life = 0;
    const ttl = getRandomArbitrary(rangeTTL, baseTTL);
    const radius = getRandomArbitrary(this._rangeRadius, this._baseRadius);

    const baseHue = hueCenter + maxHueOffset * n * Math.cos(this._lifeTime);

    return [x, y, vx, vy, life, ttl, radius, baseHue];
  }

  private updateCircles() {
    this._lifeTime += 0.01;

    for (let i = 0; i < this._circlePropsLength; i += circlePropCount) {
      const i2 = 1 + i;
      const i3 = 2 + i;
      const i4 = 3 + i;
      const i5 = 4 + i;
      const i6 = 5 + i;
      const i7 = 6 + i;
      const i8 = 7 + i;
      const x = this._circleProps[i];
      const y = this._circleProps[i2];
      const vx = this._circleProps[i3];
      const vy = this._circleProps[i4];
      const ttl = this._circleProps[i6];
      const radius = this._circleProps[i7];
      const baseHue = this._circleProps[i8];
      let life = this._circleProps[i5];
      const hue = hueOffset + (baseHue % (hueRange - hueOffset));

      this._hiddenContext.save();
      this._hiddenContext.beginPath();
      this._hiddenContext.arc(x, y, radius, 0, Math.PI * 2);
      this._hiddenContext.fillStyle = `hsla(${hue},${saturation}%,${lightness}%,${fadeInOut(
        life,
        ttl,
      )})`;
      this._hiddenContext.fill();
      this._hiddenContext.closePath();
      this._hiddenContext.restore();

      life += 1;

      this._circleProps[i] = x + vx;
      this._circleProps[i2] = y + vy;
      this._circleProps[i5] = life;

      if (this.isInBounds(x, y, radius) || life > ttl) {
        this.initCircle(i);
      }
    }
  }

  private draw(): void {
    this._visibleContext.clearRect(
      0,
      0,
      this._visibleCanvas.width,
      this._visibleCanvas.height,
    );

    this.updateCircles();
    this._visibleContext.filter = `blur(${90 * scale}px)`;
    this._visibleContext.drawImage(this._hiddenCanvas, 0, 0);
  }
}

const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

function getRandomArbitrary(max: number, min = 0) {
  return Math.random() * (max - min) + min;
}
