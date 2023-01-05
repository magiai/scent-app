import { useState, useMemo, useEffect } from 'react'
import {
  useAppDispatch
} from '../../app/hooks'
import {
  setSearchedPhrase,
  initialState
} from './searchSlice'
import styles from '../form/forms.module.css'
import searchStyles from './search.module.css'

const SearchEngine:React.FC = () => {
    const dispatch = useAppDispatch()
    const [phraseValue, setSearchValue] = useState<string>(initialState.value)

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value)
    }

    const handleSearchValueSubmit = (event: any) => {
      event.preventDefault()
  }

  useEffect(() => {
    dispatch(setSearchedPhrase(String(phraseValue)))
  }, [phraseValue])

    return (
        <form 
            role="search"
            className = { searchStyles.form }
            onSubmit = { handleSearchValueSubmit }    
        >
            <label className = { styles.label } htmlFor="search-input">Search for a scent</label>
            <input 
                type="search" 
                inputMode='search'
                id="search-input" 
                className = { styles.input }
                value = { phraseValue }
                onChange = { handleSearchValueChange }
            />
            <button 
                type='submit' 
                name="submit-search" 
                id="submit-search"
            >Search
            </button>
        </form>
    );
  };
  
  export default SearchEngine;