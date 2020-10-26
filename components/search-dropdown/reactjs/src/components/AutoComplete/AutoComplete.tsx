import React from 'react';
import './AutoComplete.scss';
import { AutoCompleteConfig } from './AutoComplete.d';

function AutoComplete(params: AutoCompleteConfig) {
  const config: AutoCompleteConfig = {
    data: params.data,
  };

  return (
    <div className="AutoComplete">
      <p>AutoComplete component</p>
    </div>
  );
}

export default AutoComplete;
