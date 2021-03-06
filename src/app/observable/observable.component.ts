import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.observableTest();
    this.observableDateTime().subscribe((x) => console.log(x));
  }

  public observableTest(): void {
    let observable = new Observable((subscriber) => {
      for (var i: number = 1; i <= 10; i++) {
        subscriber.next(i);
      }
      subscriber.complete();
    });

    let subscription = observable.subscribe({
      next(x) {
        console.log('Value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });

    subscription.unsubscribe();
  }

  public observableDateTime(): Observable<string> {
    const observable = new Observable<string>((observer) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });

    return observable;
  }
}
