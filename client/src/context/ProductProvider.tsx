import React, {FC, useState, useEffect} from 'react';
import {ProductContext, defaultState} from './ProductContext';
import axios from 'axios';
import { IProduct, ICategory,Props } from '../@types/product';

export const ProductProvider: FC<Props> = ({children}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState(defaultState.loading);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const config = {
        headers: {
            'Access-Control-Allow-Origin': "*"
        }
    }

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const getCategories = () => {
        setLoading(true);
        let url:string = API_BASE_URL+'/products.php';
       
        axios
        .get<ICategory[]>(url, config)
        .then(function ({ data }: { data: ICategory[] }) {
			setCategories(data);
            setProducts(data[0].products);
            setTimeout(() => {
                setLoading(false);
            }, 200);
		})
        .catch(e => {
          const error = e.response.status === 404? "Resource Not found": "An unexpected error has occurred";
          setLoading(false);
          setError(error);
          console.log(e);
        });
    }

    const addProduct = (name: string, category:string) => {

        setLoading(true);

        const payload = {
            name: name,
            category: category
        }

        axios
        .post(API_BASE_URL+'/add-product.php', payload)
        .then(function ({ data }: { data: IProduct[]}) {
            setTimeout(() => {
                setLoading(false);
            }, 200);
		})
        .catch(e => {
          const error = e.response.status === 404? "Resource Not found": "An unexpected error has occurred";
          setLoading(false);
          setError(error);
        });
    }

    useEffect(() => {
        getCategories()
    }, [searchQuery])
    
    

    return (
        <div className='container'>
            <ProductContext.Provider value={{
                products,
                setProducts,
                categories,
                getCategories,
                addProduct,
                searchQuery,
                setSearchQuery,
                loading,
                error
            }}>
            {children}
            </ProductContext.Provider>
        </div>
    );
};
