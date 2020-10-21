import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR_PLUS: "/JuniorPlus",
  HW1: "/hw1",
  HW2: "/hw2",
  HW3: "/hw3",
  HW4: "/hw4",
  HW6: "/hw6",
  HW7: "/hw7",
  HW8: "/hw8",
  HW9: "/hw9",
};

function Routes() {
  return (
    <div>
      {/*Switch выбирает первый подходящий роут*/}
      <Switch>
        {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
        {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
        <Route path={PATH.JUNIOR_PLUS} exact render={() => <JuniorPlus />} />
        <Route path={PATH.PRE_JUNIOR} exact render={() => <PreJunior />} />
        <Route path={PATH.HW1} exact render={() => <HW1 />} />
        <Route path={PATH.HW2} exact render={() => <HW2 />} />
        <Route path={PATH.HW3} exact render={() => <HW3 />} />
        <Route path={PATH.HW4} exact render={() => <HW4 />} />
        <Route path={PATH.HW6} exact render={() => <HW6 />} />
        <Route path={PATH.HW7} exact render={() => <HW7 />} />
        <Route path={PATH.HW8} exact render={() => <HW8 />} />
        <Route path={PATH.HW9} exact render={() => <HW9 />} />
        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default Routes;
