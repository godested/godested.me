import { animationFrameScheduler, fromEvent, interval, startWith } from 'rxjs';
import SimplexNoise from 'simplex-noise';
import { Disposable, unwrap } from 'common/utils';

const circleCount = 200;
const circlePropCount = 8;
const circlePropsLength = circleCount * circlePropCount;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseTTL = 150;
const rangeTTL = 200;
const baseRadius = 15;
const rangeRadius = 30;
const rangeHue = 200;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;

export class HeroCanvas extends Disposable {
  private readonly _circleProps = new Float32Array(circlePropsLength);

  private readonly _simplex = new SimplexNoise();

  private _baseHue = 220;

  private readonly _visibleContext: CanvasRenderingContext2D;

  private readonly _hiddenCanvas = document.createElement('canvas');

  private readonly _hiddenContext: CanvasRenderingContext2D = unwrap(
    this._hiddenCanvas.getContext('2d'),
    "Didn't found canvas context",
  );

  constructor(private readonly _visibleCanvas: HTMLCanvasElement) {
    super();

    this._visibleContext = unwrap(
      this._visibleCanvas.getContext('2d'),
      "Didn't found canvas context",
    );

    for (let index = 0; index < circlePropsLength; index += circlePropCount) {
      this._circleProps.set(this.createCircleProps(), index);
    }

    this.addDisposable(
      interval(0, animationFrameScheduler).subscribe(() => this.draw()),
    );
    this.addDisposable(
      fromEvent(this._visibleCanvas, 'resize')
        .pipe(startWith(undefined))
        .subscribe(() => this.resize()),
    );
  }

  private resize(): void {
    this._hiddenCanvas.width = this._visibleCanvas.width;
    this._hiddenCanvas.height = this._visibleCanvas.height;
  }

  private initCircle(index: number): void {
    this._circleProps.set(this.createCircleProps(), index);
  }

  private checkBounds(x: number, y: number, radius: number) {
    return (
      x < -radius ||
      x > this._hiddenCanvas.width + radius ||
      y < -radius ||
      y > this._hiddenCanvas.height + radius
    );
  }

  private createCircleProps(): readonly number[] {
    const x = random(this._hiddenCanvas.width);
    const y = random(this._hiddenCanvas.height);
    const n = this._simplex.noise3D(x * xOff, y * yOff, this._baseHue * zOff);
    const t = random(Math.PI * 2);
    const speed = baseSpeed + random(rangeSpeed);
    const vx = speed * Math.cos(t);
    const vy = speed * Math.sin(t);
    const life = 0;
    const ttl = baseTTL + random(rangeTTL);
    const radius = baseRadius + random(rangeRadius);
    const hue = this._baseHue + n * rangeHue;

    return [x, y, vx, vy, life, ttl, radius, hue];
  }

  private updateCircles() {
    this._baseHue += 1;

    for (let i = 0; i < circlePropsLength; i += circlePropCount) {
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
      const hue = this._circleProps[i8];
      let life = this._circleProps[i5];

      this.drawCircle(x, y, life, ttl, radius, hue);

      life += 1;

      this._circleProps[i] = x + vx;
      this._circleProps[i2] = y + vy;
      this._circleProps[i5] = life;

      if (this.checkBounds(x, y, radius) || life > ttl) {
        this.initCircle(i);
      }
    }
  }

  private drawCircle(
    x: number,
    y: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
  ) {
    this._hiddenContext.save();
    this._hiddenContext.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(
      life,
      ttl,
    )})`;
    this._hiddenContext.beginPath();
    this._hiddenContext.arc(x, y, radius, 0, Math.PI * 2);
    this._hiddenContext.fill();
    this._hiddenContext.closePath();
    this._hiddenContext.restore();
  }

  private render() {
    this._visibleContext.save();
    this._visibleContext.filter = 'blur(30px)';
    this._visibleContext.drawImage(this._hiddenCanvas, 0, 0);
    this._visibleContext.restore();
  }

  private draw(): void {
    this._hiddenContext.clearRect(
      0,
      0,
      this._visibleCanvas.width,
      this._visibleCanvas.height,
    );
    this._visibleContext.fillStyle = 'hsla(0,0%,5%,1)';
    this._visibleContext.fillRect(
      0,
      0,
      this._hiddenCanvas.width,
      this._hiddenCanvas.height,
    );

    this.updateCircles();
    this.render();
  }
}

const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

const random = (n: number) => n * Math.random();
