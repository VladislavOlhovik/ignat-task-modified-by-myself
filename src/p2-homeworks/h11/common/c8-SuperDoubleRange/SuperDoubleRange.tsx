import { makeStyles, Slider, withStyles } from "@material-ui/core";
import React from "react";

type SuperDoubleRangePropsType = {
  onChangeRange: (value: number | number[]) => void;
  value: [number, number];
  step: number;
  disable:boolean;
};
const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  step,
  disable,
}) => {
  const classes = useStyles();
  const handleChange = (event: any, newValue: number | number[]) => {
    onChangeRange(newValue);
  };

  return (
    <div className={classes.root}>
      <PrettoSlider
      disabled={disable}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={step}
      />
    </div>
  );
};

export default SuperDoubleRange;
