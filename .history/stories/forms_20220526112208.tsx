import '../styles/forms.css';

export const Form = () => {
    return (
        <form>
            <label htmlFor="text-input">Text Input</label>
            <input className="input" id="text-input" type="text" />
            <br/>
            <label htmlFor="textarea">Textarea</label>
            <textarea className="input" id="textarea"></textarea>
            <br />
            <label className="form-control">
                <input name="checkbox" type="checkbox"/>
                Checkbox
            </label>
            <br />
            <label className="form-control">
                <input name="radio" type="radio" disabled/>
                Radio
            </label>
            <br />
            <label className="form-control">
                <input name="radio" type="radio"/>
                Radio - checked
            </label>
            <br />
            <label htmlFor="standard-select">Standard Select</label>
            <div className="select">
                <select id="standard-select">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">
                    Option that has too long of a value to fit
                    </option>
                </select>
                <span className="focus"></span>
            </div>
        </form>
    );
};
