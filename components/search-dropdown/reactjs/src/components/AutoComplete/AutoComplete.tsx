import React, { useEffect, useState, useRef } from 'react';
import './AutoComplete.scss';
import { AutoCompleteConfig } from './AutoComplete.d';
// import { debounce } from './AutoCompleteUtil';
import debounce from 'lodash.debounce';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

function AutoComplete(params: AutoCompleteConfig) {
  const inputEl = useRef(null);
  const [matchedList, setMatchedList] = useState([]);
  const { data = [], keys = [], debounceTime = 300 } = params;

  /**
   * On component mounth
   */
  useEffect(() => {}, []);

  /**
   * On input change
   */
  const onInputChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    console.log('------------ query', query);
    run(query);
  }, debounceTime);

  function run(query: string) {
    if (keys.length > 0) {
      for (const key of keys) {
        search(data[key]);
      }
    } else {
      for (const record of data) {
        search(record);
      }
    }
  }

  function search(record: string) {

  }

  console.log('------------ data', data);

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
