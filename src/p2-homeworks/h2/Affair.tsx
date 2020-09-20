import React from "react";

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: (id: number) => void, // need to fix any
    priority: string
    id: number
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    };// need to fix


    return (
        <div>
            {props.affair}- <b>{props.priority}</b>
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
