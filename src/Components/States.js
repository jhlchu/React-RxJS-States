import { Subject, ReplaySubject, BehaviorSubject } from "rxjs";
import { of } from "rxjs";

const textfield_pair = {
  textvalue: "Cow"
};

const textfield$ = new BehaviorSubject(textfield_pair);

export { textfield_pair, textfield$ };
