import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import './SelectLocation.css';


function SelectLocation({name, placeholder}) {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <Select 
      showSearch
      className={`fieldset__input ${name}`}
      placeholder={placeholder} 
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: 'москва',
          label: 'Москва',
        },
        {
          value: 'санкт-петербург',
          label: 'Санкт-Петербург',
        },
      ]}
      required
    />
  );
}

export default SelectLocation;

SelectLocation.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};