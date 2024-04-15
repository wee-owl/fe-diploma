import React from "react";
import { Slider } from "antd";
import "./SliderPrice.css";


function SliderPrice() {
  const marks = {
    1920: "1920",
    7000: "7000",
  }

  const onChangeComplete = (value) => {
    console.log(`Стоимость от ${value[0]} до ${value[1]} рублей`);
  };


  return (
    <Slider
      range={{draggableTrack: false}}
      tooltip={{open: true}}
      defaultValue={[1920, 4500]}
      step={10}
      min={1920}
      max={7000}
      marks={marks}
      onChangeComplete={onChangeComplete}
    />
  );
}

export default SliderPrice;
