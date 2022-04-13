import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '../services/data.service';
import { changeStep, getData, increment } from './counter.actions';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class LoadDataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getData),
      tap((x) => console.log(x)),
      mergeMap(() =>
        this.dataService.getData().pipe(
          map((data) => ({
            type: changeStep.type,
            step: 1,
          })),
          tap((x) => console.log(x))
        )
      )
    )
  );
  constructor(private actions$: Actions, private dataService: DataService) {}
}
