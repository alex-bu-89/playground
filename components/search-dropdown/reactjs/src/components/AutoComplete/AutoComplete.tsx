import React, { useEffect, useState, useRef } from 'react';
import './AutoComplete.scss';
import { AutoCompleteConfig } from './AutoComplete.d';
import debounce from 'lodash.debounce';

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
    run(query);
  }, debounceTime);

  /**
   * Starts searching process
   * @param query
   */
  function run(query: string) {
    if (!keys.length) throw new Error('keys prop must be set');

    for (const key of keys) {
      search(query, key);
    }
  }

  /**
   * Searches matching records by key
   * @param query
   * @param key
   */
  function search(query: string, key: string) {
    const queryLower = query.toLowerCase();

    const list = data.filter((record: any) => {
      const recordValueLower = record[key].toLowerCase();
      return recordValueLower.includes(queryLower) ? true : false;
    });

    console.log('------------ list', list);
  }

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
