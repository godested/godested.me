import { animationFrameScheduler, fromEvent, interval } from 'rxjs';
import SimplexNoise from 'simplex-noise';
import { Disposable, unwrap } from 'common/utils';

const simplex = new SimplexNoise();

const circlePropCount = 8;
const baseSpeed = 0.25;
const rangeSpeed = 0.35;
const baseTTL = 100;
const rangeTTL = 300;
const hueOffset = 200;
const hueRange = 310;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;

export class HeroCanvas extends Disposable {
  private readonly _circleCount =
    Math.round(Math.max(window.innerWidth, window.innerHeight) / 2) *
    devicePixelRatio;

  private readonly _circlePropsLength = this._circleCount * circlePropCount;

  private readonly _circleProps = new Float32Array(this._circlePropsLength);

  private readonly _baseRadius = (window.innerWidth / 20) * devicePixelRatio;

  private readonly _rangeRadius = (window.innerWidth / 40) * devicePixelRatio;

  private _baseHue = hueOffset;

  private _canvasBoundingClientRect: DOMRect;

  private readonly _context: CanvasRenderingContext2D;

  constructor(private readonly _canvas: HTMLCanvasElement) {
    super();

    this._context = unwrap(
      this._canvas.getContext('2d'),
      "Didn't found canvas context",
    );

    this._canvasBoundingClientRect = this._canvas.getBoundingClientRect();

    this.addDisposable(
      fromEvent(this._canvas, 'resize').subscribe(() => {
        this._canvasBoundingClientRect = this._canvas.getBoundingClientRect();
      }),
    );

    this.addDisposable(
      interval(0, animationFrameScheduler).subscribe(() => this.draw()),
    );

    for (
      let index = 0;
      index < this._circlePropsLength;
      index += circlePropCount
    ) {
      this._circleProps.set(this.createCircleProps(), index);
    }
  }

  private get canvasClientRect() {
    return this._canvasBoundingClientRect;
  }

  private initCircle(index: number): void {
    this._circleProps.set(this.createCircleProps(), index);
  }

  private isInBounds(x: number, y: number, radius: number): boolean {
    return (
      x < -radius ||
      x > this.canvasClientRect.width + radius ||
      y < -radius ||
      y > this.canvasClientRect.height + radius
    );
  }

  private createCircleProps(): readonly number[] {
    const x = getRandomArbitrary(this.canvasClientRect.width);
    const y = getRandomArbitrary(this.canvasClientRect.height);
    const n = simplex.noise3D(x * xOff, y * yOff, this._baseHue * zOff);
    const t = getRandomArbitrary(Math.PI * 2);
    const speed = getRandomArbitrary(rangeSpeed, baseSpeed);
    const vx = speed * Math.cos(t);
    const vy = speed * Math.sin(t);
    const life = 0;
    const ttl = getRandomArbitrary(rangeTTL, baseTTL);
    const radius = getRandomArbitrary(this._rangeRadius, this._baseRadius);
    const hue = this._baseHue + n * ((hueRange - this._baseHue) / 2);

    return [x, y, vx, vy, life, ttl, radius, hue];
  }

  private drawCircles() {
    this._baseHue += 0.8;

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
      const hue = this._circleProps[i8];
      let life = this._circleProps[i5];

      this._context.save();
      this._context.fillStyle = `hsla(${
        hueOffset + (hue % (hueRange - hueOffset))
      },60%,30%,${fadeInOut(life, ttl)})`;
      this._context.beginPath();
      this._context.arc(x, y, radius, 0, Math.PI * 2);
      this._context.fill();
      this._context.closePath();
      this._context.restore();

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
    this._context.clearRect(
      0,
      0,
      this.canvasClientRect.width,
      this.canvasClientRect.height,
    );

    this.drawCircles();
  }
}

const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

function getRandomArbitrary(max: number, min = 0) {
  return Math.random() * (max - min) + min;
}
