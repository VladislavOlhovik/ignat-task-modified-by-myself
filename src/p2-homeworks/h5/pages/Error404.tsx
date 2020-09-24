import React from "react";

function Error404() {
    const error = {
        color:'red',
        width:'100px',
        height:'100px',
        margin:'0 auto'
    }
    return (
        <div style={error}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
