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
    const [incrementAmount, setIncrementAmount] = useState<string>('owl');
  
    return (
      <>
        <h1>Welcome to the greatest app in the world!</h1>
        <h2>
          The current number is
          {count}
        </h2>
        <div>
          <input
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            type="search"
          />
          <button
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
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