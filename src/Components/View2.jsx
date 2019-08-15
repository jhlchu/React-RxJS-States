import React, { useState, useEffect } from "react";
import { textfield_pair, textfield$ } from "./States";
import { of, asObservable } from "rxjs";

export default function View2() {
  const [TextField, SetTextField] = useState(false);
  useEffect(() => {
    textfield$.asObservable().subscribe(res => {
      console.log(2, res);
      SetTextField(res);
    });
  });

  const ChangeInput = evt => {
    textfield$.next({ v: evt.target.value });
  };

  return (
    <div>
      <h1>2</h1>
      {console.log("TextField", TextField)}
      <input
        type="text"
        name="textvalue"
        id="textvalue"
        value={TextField.v}
        onChange={ChangeInput}
      />
    </div>
  );
}
