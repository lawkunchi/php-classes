import {FC, useContext, useState} from 'react';
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export const AddProduct: FC = () => {

    const { errors, loading, addProduct, message } = useContext(ProductContext);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    
    const submitForm = (e:any) => {
        e.preventDefault();
        addProduct?.(name, category);
    }

    return (
        <div>
            <nav className="breadcrumb">
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li className="is-active"><Link to="/products/add-product">Add Product</Link></li>
                </ul>
            </nav>

            <form>
            {message !== '' &&<div className="notification is-primary">
                {message}
                </div> }
                <h1 className="subtitle is-4">Add Product</h1>
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <input className="input" type="text" value={category} placeholder="Text input" onChange={(e)=>setCategory(e.target.value)}/>
                    </div>
                    {errors.category && <p className="help is-danger">{errors.category}</p> }
                </div>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" value={name} placeholder="Text input" onChange={(e)=>setName(e.target.value)} />
                    </div>
                    {errors.name && <p className="help is-danger">{errors.name}</p> }
                </div>

                
                <div className="field is-grouped">
                    <div className="control">
                        {!loading?<button className="button is-link" onClick={submitForm}>Submit</button>:
                        <button className="button is-loading">Loading</button>}
                    </div>
                </div>
            </form>
        </div>
    );  
}
  
export default AddProduct;
