import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectSearch,
} from './searchSlice';
import styles from '../form/forms.module.css';

const SearchEngine:React.FC = () => {
    const dispatch = useAppDispatch();
    const selectPhrase = useAppSelector(selectSearch);
    const [phraseValue, setSearchValue] = useState<string>("");

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value);
        dispatch(incrementByAmount(String({ phraseValue })))
    }

    // const handlePhraseChange = (e) => {
    //     setPhrase(String(e.target.value));
    //     console.log('zmiana!')
    //     dispatch(incrementByAmount(String(phrase)));
    // }
  
    return (
      <>
        <h2>
          The current phrase is
          { selectPhrase }
        </h2>
        <form>
            <label className = { styles.label } htmlFor="search-input">Search Input</label>
            <input 
                id="search-input" 
                className = { styles.input }
                type="search" 
                value = { phraseValue }
                onChange = { handleSearchValueChange }
                inputMode='search'
            />
        </form>
        <div>
          <button
            onClick={() => dispatch(incrementByAmount(String({ phraseValue })))}
          >Why
          </button>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
          <button onClick={() => dispatch(increment())}>Increment by 1</button>
        </div>
      </>
    );
  };
  
  export default SearchEngine;