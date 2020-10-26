import React, { useEffect, useRef } from 'react';
import './AutoComplete.scss';
import { AutoCompleteConfig } from './AutoComplete.d';
// import { debounce } from './AutoCompleteUtil';
import debounce from 'lodash.debounce';

function AutoComplete(params: AutoCompleteConfig) {
  const inputEl = useRef(null);
  const { data = [], debounceTime = 300 } = params;

  /**
   * On component mounth
   */
  useEffect(() => {}, []);

  /**
   * On input change
   */
  const onInputChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('------------', value);
  }, debounceTime);

  return (
    <div className="AutoComplete">
      <input
        className="AutoComplete__input input"
        ref={inputEl}
        type="text"
        tabIndex={1}
        onChange={onInputChange}
      />
    </div>
  );
}

export default AutoComplete;
