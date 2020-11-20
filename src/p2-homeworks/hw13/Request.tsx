import React, { useState } from "react";
import { requestAPI } from "./RequestAPI";

function Request() {
  const [value, setValue] = useState(false);
  const [result, setResult] = useState({
    value: "",
    error: false,
  });

  const put = () => {
    requestAPI
      .get(value)
      .then((res) => {
        console.log(res);
        setResult({
          ...result,
          value: res.data.info,
          error: true,
        });
      })
      .catch((error) => {
        console.log({ ...error });
        console.log(
          error.response ? error.response.data.errorText : error.message
        );
        setResult({
          ...result,
          value: error.response ? error.response.data.errorText : error.message,
          error: false,
        });
      });
  };
  return (
    <div>
      <button onClick={put}>send a request</button>
      <input
        checked={value}
        onChange={() => setValue(!value)}
        type="checkbox"
      />
      <div>
        result request:{" "}
        <div style={result.error ? { color: "blue" } : { color: "red" }}>
          {result.value}
        </div>
      </div>
    </div>
  );
}

export default Request;
