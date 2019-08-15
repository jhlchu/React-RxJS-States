import { Subject, ReplaySubject, BehaviorSubject } from "rxjs";
import { of } from "rxjs";
import * as Rx from "rxjs";

const textfield_pair = { v: "Cow" };

// const textfield$ = new BehaviorSubject(textfield_pair);
const textfield$ = new Rx.BehaviorSubject(textfield_pair);
textfield$.next(textfield_pair);

export { textfield$ };
