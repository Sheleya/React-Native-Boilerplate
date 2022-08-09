// eslint-disable-next-line import/no-extraneous-dependencies
import 'typed-redux-saga';
import { SelectEffect, Tail } from '@redux-saga/core/effects';
import { RootState } from '@state/reducers';

declare module 'typed-redux-saga' {
  export function select<
    Fn extends (state: RootState, ...args: unknown[]) => unknown,
  >(
    selector: Fn,
    ...args: Tail<Parameters<Fn>>
  ): SagaGenerator<ReturnType<Fn>, SelectEffect>;
}
