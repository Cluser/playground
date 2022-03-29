import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  private subjectSource: Subject<string> = new Subject();
  private subjectData: Observable<string> = this.subjectSource.asObservable();
  private behaviorSubjectSource: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value');
  private behaviorSubjectData: Observable<string> = this.behaviorSubjectSource.asObservable();

  constructor() { }

  ngOnInit(): void {
    this.initSubscriptions();

    console.log("Test behavior subject")
    this.behaviorSubjectTest();
    this.subjectTest();
  }

  private initSubscriptions() {
    this.behaviorSubjectSubscription()
    this.subjectSubscription()
  }
  

  private behaviorSubjectSubscription(): Subscription {
    return this.behaviorSubjectSource.subscribe({
      next(x) { console.log(x) }
    })
  }


  public behaviorSubjectTest(): void  {
    this.behaviorSubjectSource.next('Pass data 1')
  }

  private subjectSubscription(): Subscription {
    return this.subjectSource.subscribe({
      next(x) { console.log(x) }
    })
  }


  public subjectTest(): void  {
    this.subjectSource.next('Pass data 2')
  }

}
