import React, { useState, useEffect } from "react";
import { textfield_pair, textfield$ } from "./States";
import { of, asObservable } from "rxjs";

export default function View3() {
  const [TextField, SetTextField] = useState(false);
  useEffect(() => {
    textfield$.asObservable().subscribe(res => {
      console.log(3, res);
      SetTextField(res);
    });
  });

  const ChangeInput = evt => {
    textfield$.next({ v: evt.target.value });
  };

  return (
    <div>
      <h1>3</h1>
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
