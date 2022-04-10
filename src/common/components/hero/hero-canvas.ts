import { animationFrameScheduler, fromEvent, interval, startWith } from 'rxjs';
import SimplexNoise from 'simplex-noise';
import { Disposable, unwrap } from 'common/utils';

const simplex = new SimplexNoise();

const circleCount = 150;
const circlePropCount = 8;
const circlePropsLength = circleCount * circlePropCount;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseTTL = 150;
const rangeTTL = 200;
const baseRadius = 30;
const rangeRadius = 60;
const rangeHue = 60;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;

export class HeroCanvas extends Disposable {
  private readonly _circleProps = new Float32Array(circlePropsLength);

  private _baseHue = 220;

  private readonly _context: CanvasRenderingContext2D;

  constructor(private readonly _canvas: HTMLCanvasElement) {
    super();

    this._context = unwrap(
      this._canvas.getContext('2d'),
      "Didn't found canvas context",
    );

    for (let index = 0; index < circlePropsLength; index += circlePropCount) {
      this._circleProps.set(this.createCircleProps(), index);
    }

    this.addDisposable(
      interval(0, animationFrameScheduler).subscribe(() => this.draw()),
    );
  }

  private initCircle(index: number): void {
    this._circleProps.set(this.createCircleProps(), index);
  }

  private isInBounds(x: number, y: number, radius: number) {
    return (
      x < -radius ||
      x > this._canvas.width + radius ||
      y < -radius ||
      y > this._canvas.height + radius
    );
  }

  private createCircleProps(): readonly number[] {
    const x = random(this._canvas.width);
    const y = random(this._canvas.height);
    const n = simplex.noise3D(x * xOff, y * yOff, this._baseHue * zOff);
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

  private drawCircles() {
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

      this._context.save();
      this._context.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
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
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.fillStyle = 'hsla(0,0%,5%,1)';
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this.drawCircles();
  }
}

const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

const random = (n: number) => n * Math.random();
