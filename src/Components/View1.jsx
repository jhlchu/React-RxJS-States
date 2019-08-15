import React, { useState, useEffect } from "react";
import { textfield_pair, textfield$ } from "./States";
import { of, asObservable } from "rxjs";
import { map } from "rxjs/operators";

export default function View1() {
  const [TextField, SetTextField] = useState(false);
  useEffect(() => {
    textfield$.asObservable().subscribe(res => {
      console.log(1, res);
      SetTextField(res);
    });
  });

  const ChangeInput = val => {
    console.log(val);
    // textfield$.next({ textfield: evt.target.value });
    textfield$.next({ textvalue: val });
  };

  return (
    <div>
      <h1>1</h1>
      {console.log("TextField", TextField)}
      <input
        type="text"
        name="textvalue"
        id="textvalue"
        value={TextField.textvalue}
        onKeyUp={() => ChangeInput("a")}
      />
    </div>
  );
}
