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

const SearchEngine:React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectSearch);
    const [phrase, setPhrase] = useState<string>('owl');
  
    return (
      <>
        <h1>Welcome to the greatest app in the world!</h1>
        <h2>
          The current number is
          { phrase }
        </h2>
        <div>
          <input
            value = { phrase }
            onChange = {(e) => setPhrase(String(e.target.value))}
            type = "search"
          />
          <button
            onClick={() => dispatch(incrementByAmount(String(phrase)))}
          >
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