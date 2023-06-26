import {FC, useState} from 'react';

export const AddProduct: FC = () => {
    const[form, setForm] = useState([]);

    return (
        <form>
            <h1 className="subtitle is-1">Add Product</h1>
            <div className="field">
                <label className="label">Category</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
                <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
                <p className="help is-danger">This email is invalid</p>
            </div>

            
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                    <button className="button is-loading">Loading</button>
                </div>
            </div>
        </form>
    );
}
  
export default AddProduct;
