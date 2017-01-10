import { OnInit, OnDestroy } from '@angular/core';
import { Store, combineReducers } from '@ngrx/store';
import { Subscription } from 'rxjs';

export abstract class PageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private _store: Store<any>,
    private _reducers: any
  ) {

  }

  public abstract onInit(): void;
  public abstract onDestroy(): void;

  public ngOnInit(): void {
    this._store.replaceReducer(combineReducers(this._reducers));
    this.onInit();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = null;
    this.onDestroy();
  }

  protected _subscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  protected _subscriptions(subscriptions: Subscription[]): void {
    this.subscriptions.push(...subscriptions);
  }
}
