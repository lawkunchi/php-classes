import {FC, useContext} from 'react';
import { ProductContext } from "../context/ProductContext";
import Item from '../components/Item';
import SearchBar from '../components/SearchBar';
import { Link } from "react-router-dom";

export const Products: FC = () => {

    const { products, loading, searchQuery, setSearchQuery } = useContext(ProductContext);
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => setSearchQuery?.(event.target.value)
    
    return (
        <div>
            <nav className="breadcrumb">
                <ul>
                    <li><Link to="/product/add">Add Product</Link></li>
                </ul>
            </nav>
            <nav className="panel">
                <p className="panel-heading">Products</p>
                
                <SearchBar searchQuery={searchQuery} handleChange={handleChange}/>

                {loading?   
                <div>Loading products ... </div>: 
                    <>{products.length > 0 ? <Item  products={products}/>: <div>No products found</div>  }</>
                }

            </nav>
        </div>
    );
}
  
export default Products;
