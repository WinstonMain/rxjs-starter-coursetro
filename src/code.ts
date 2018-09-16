import { Observable } from "rxjs/Observable";
const observable = Observable.create((observer:any) => {
  observer.next("hello rx")
})
// console.log(Rx);

observable.subscribe((x:any) => {
  console.log(x);
})

