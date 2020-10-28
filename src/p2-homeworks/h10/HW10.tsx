import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC, StateType } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import style from './HW10.module.css'

function HW10() {
    const loading = useSelector<AppStoreType,StateType>(state=>state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>{
            dispatch(loadingAC())
        },5000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <div><div className={style.windows8}>
                    <div className={style.wBall} id={style.wBall_1}>
                        <div className={style.wInnerBall}></div>
                    </div>
                    <div className={style.wBall} id={style.wBall_2}>
                        <div className={style.wInnerBall}></div>
                    </div>
                    <div className={style.wBall} id={style.wBall_3}>
                        <div className={style.wInnerBall}></div>
                    </div>
                    <div className={style.wBall} id={style.wBall_4}>
                        <div className={style.wInnerBall}></div>
                    </div>
                    <div className={style.wBall} id={style.wBall_5}>
                        <div className={style.wInnerBall}></div>
                    </div>
                </div></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
