import { Component } from 'react';
import { unwrap } from './unwrap';

type Node = Element | Component;

export class ExpectedRef<T extends Node> {
  private _node: T | null = null;

  private readonly errorTag: string;

  constructor(errorTag: string) {
    this.errorTag = errorTag;
  }

  get node(): T {
    return unwrap(this._node, `${this.errorTag} is not defined`);
  }

  readonly update = (ref: T | null): void => {
    this._node = ref;
  };
}
