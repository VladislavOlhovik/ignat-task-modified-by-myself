import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import HW5 from "./HW5";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR_PLUS: "/JuniorPlus",
  HW1: "/hw1",
  HW2: "/hw2",
  HW3: "/hw3",
  HW4: "/hw4",
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
        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default Routes;
