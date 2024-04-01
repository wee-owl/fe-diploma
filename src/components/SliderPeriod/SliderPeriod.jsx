import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
import './SliderPeriod.css';


function SliderPeriod({data}) {
  const marks = {
    0: '0:00',
    24: '24:00',
  }

  const formatter = (value) => `${value}:00`;

  const onChangeComplete = (value) => {
    console.log(`Время c ${value[0]} до ${value[1]}`);
  };


  return (
    <Slider
      range={{draggableTrack: false}}
      tooltip={{open: true, formatter}}
      defaultValue={[data.from, data.to]}
      step={1}
      min={0}
      max={24}
      marks={marks}
      onChangeComplete={onChangeComplete}
    />
  );
}

export default SliderPeriod;

SliderPeriod.propTypes = {
  data: PropTypes.object.isRequired,
};