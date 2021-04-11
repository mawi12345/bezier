// TODO: resolve import loop
type BezierCap = any;
type Bezier = any;

export interface Point {
  x: number;
  y: number;
  z?: number;
}
export interface Projection extends Point {
  t?: number;
  d?: number;
}
export interface Inflection {
  x: number[];
  y: number[];
  z?: number[];
  values: number[];
}
export interface Offset extends Point {
  c: Point;
  n: Point;
}

export type DerivativeFn = (x: number) => Point;

export interface Pair {
  left: Bezier;
  right: Bezier;
}

export interface Split extends Pair {
  // span: Point[];
  _t1?: number;
  _t2?: number;
}

export interface MinMax {
  min: number;
  mid?: number;
  max: number;
  size?: number;
}
export interface BBox {
  x: MinMax;
  y: MinMax;
  z?: MinMax;
}
export interface Line {
  p1: Point;
  p2: Point;
}

export interface Arc extends Point {
  e: number;
  r: number;
  s: number;
  interval?: {
    start: number;
    end: number;
  };
}

export interface Shape {
  startcap: BezierCap;
  forward: Bezier;
  back: Bezier;
  endcap: BezierCap;
  bbox: BBox;
  intersections: (shape: Shape) => string[][] | number[][];
}

export interface ABC {
  A: Point;
  B: Point;
  C: Point;
  S: Point;
  E: Point;
}
export interface Closest {
  mdist: number;
  mpos: number;
}
