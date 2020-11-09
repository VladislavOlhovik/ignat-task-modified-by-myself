import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import { initStateThemeReducerType, changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ["dark", "red", "some"];

function HW12() {
  const theme = useSelector<AppStoreType, initStateThemeReducerType>(
    (state) => state.theme
  );
  const dispatch = useDispatch();
  const onChangeCallback = (value: string) => {
    dispatch(changeThemeC(value));
  };
  return (
    <div className={s[theme.theme]}>
      <hr />
      <span className={s[theme.theme + "-text"]}>homeworks 12</span>
      <SuperRadio
        name={"radio"}
        options={themes}
        value={theme.theme}
        onChangeOption={onChangeCallback}
      />
      <hr />
    </div>
  );
}

export default HW12;
