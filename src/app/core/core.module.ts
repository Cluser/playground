import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadDataEffects } from '../shared/store/counter.effects';
import { counterReducer } from '../shared/store/counter.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({ counterState: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([LoadDataEffects]),
    HttpClientModule,
  ],
})
export class CoreModule {}
