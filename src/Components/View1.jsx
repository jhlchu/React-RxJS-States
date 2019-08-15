import React, { useState, useEffect } from "react";
import { textfield_pair, textfield$ } from "./States";
import { of } from "rxjs";

export default function View1() {
  const [TextField, SetTextField] = useState(false);
  useEffect(() => {
    textfield$.subscribe(res => SetTextField(res));
  });
  return <div>hi {console.log(TextField)}</div>;
}
