import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(90);
  const onChangeRange = (value: number) => {
    setValue1(value);
  };
  const onChangeSuperDoubleRange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    }
  };
  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div className={s.block1}>
        <div>
          <span>{value1}</span>
        </div>
        <SuperRange value={value1} onChangeRange={onChangeRange} />
      </div>
      DoubleRange
      <div className={s.block2}>
        <span>{value1}</span>
        <SuperDoubleRange
          disable={value1 >= value2}
          step={5}
          value={[value1, value2]}
          onChangeRange={onChangeSuperDoubleRange}
        />
        <span>{value2}</span>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
