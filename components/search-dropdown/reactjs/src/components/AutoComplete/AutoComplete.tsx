import React, { useEffect, useState, useRef } from 'react';
import debounce from 'lodash.debounce';
import { AutoCompleteConfig } from './AutoComplete.d';
import { v4 as uuidv4 } from 'uuid';
import './AutoComplete.scss';

function AutoComplete(params: AutoCompleteConfig) {
  const inputEl = useRef(null);
  const [matchedList, setMatchedList] = useState([] as any);
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
    let resultList: any[] = [];

    for (const key of keys) {
      const result = search(query, key);
      resultList = [...result];
    }

    setMatchedList(resultList);
  }

  /**
   * Searches matching records by key
   * @param query
   * @param key
   */
  function search(query: string, key: string): any[] {
    const queryLower = query.toLowerCase();

    const result =  data.filter((record: any) => {
      const recordValueLower = record[key].toLowerCase();
      return recordValueLower.includes(queryLower) ? true : false;
    });

    return result;
  }

  function renderSuggestions() {
    return (
      <ul className="Suggestions">
        {
          matchedList.map((item: any) => {
            const suggestionStr = item.food;
            return <li key={uuidv4()}>{ suggestionStr }</li>
          })
        }
      </ul>
    )
  }

  console.log('------------> render', matchedList);
  return (
    <div className="AutoComplete">
      <input
        className="AutoComplete__input input"
        ref={inputEl}
        type="text"
        tabIndex={1}
        onChange={onInputChange}
      />
      { matchedList && renderSuggestions() }
    </div>
  );
}

export default AutoComplete;
