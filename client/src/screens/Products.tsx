import {FC, useContext, useEffect, useState} from 'react';
import { ProductContext } from "../context/ProductContext";
import Item from '../components/Item';
import { ICategory } from '../@types/product';
import ItemNav from '../components/ItemNav';

export const Products: FC = () => {
    const { products, categories, setProducts, loading, searchQuery, setSearchQuery } = useContext(ProductContext);
    const [activeTab, setActiveTab] = useState('');


    const changeTab = (name: string) => {
        setActiveTab(name);
        const result:any = categories.filter((obj) => {
            return obj.name === name;
          });
          setProducts?.(result[0].products);
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => setSearchQuery?.(event.target.value)

    useEffect(() => {
        setActiveTab(categories[0]?.name)
    }, [])
    
    return (
        <div>

            {loading?
                <div>Loading</div>:
                <div>
                    <ItemNav  categories={categories} changeTab={changeTab} activeTab={activeTab}/>
                    <Item searchQuery={searchQuery} handleChange={handleChange} products={products}/>
                </div>
            }
        </div>
    );
}
  
export default Products;
