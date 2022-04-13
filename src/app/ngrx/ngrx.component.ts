import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeStep, decrement, getData, increment, reset } from '../shared/store/counter.actions';
import { getCounterStep, getCounterValue } from '../shared/store/counter.selectors';
import { AppState } from '../shared/store/counter.state';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss'],
})
export class NgrxComponent implements OnInit {
  public counterValue$: Observable<number>;
  public stepValue$: Observable<number>;
  public stepValue: number = 0;

  constructor(private store: Store<AppState>) {
    this.counterValue$ = this.store.select(getCounterValue);
    this.stepValue$ = this.store.select(getCounterStep);
    this.stepValue$.subscribe((step) => (this.stepValue = step));
  }

  ngOnInit() {}

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }

  public changeStep(stepValue: any) {
    this.store.dispatch(changeStep({ step: stepValue }));
  }

  public getData() {
    this.store.dispatch(getData());
  }
}
