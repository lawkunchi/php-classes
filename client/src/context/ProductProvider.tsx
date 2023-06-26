import {FC, useState, useEffect} from 'react';
import {ProductContext, defaultState} from './ProductContext';
import axios from 'axios';
import { IProduct, Props } from '../@types/product';

export const ProductProvider: FC<Props> = ({children}) => {
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(defaultState.loading);
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const config = {
        headers: {
            'Access-Control-Allow-Origin': "*"
        }
    }

    // Get products
    const getProducts = () => {
        setLoading(true);
        let url:string = API_BASE_URL+'/products.php';
        if(searchQuery !== '') {
            url += '?query='+searchQuery;
        }
       
        axios
        .get(url)
        .then(function ({ data  }) {
            if(data.length === undefined) {
                setProducts(Object.values(data));
            }
            else {
                setProducts(data);
            }

            setTimeout(() => {
                setLoading(false);
            }, 200);
		})
        .catch(e => {
            console.log(e);
          setLoading(false);
          console.log(e);
        });
    }

     // add product
    const addProduct = (name: string, category:string) => {
        setLoading(true);
        setErrors([]);
        const payload = {
            name: name,
            category: category
        }

        axios
        .post(API_BASE_URL+'/add-product.php', payload, config)
        .then(function ({ data }) {
            if(data.errors) {
                setErrors(data.errors);
            }

            if(data.success) {
                getProducts();
                setMessage('Prodcut added succefully');
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }
            setTimeout(() => {
                setLoading(false);
            }, 300);
		})
        .catch(e => {
            setLoading(false);
            console.log(e);
        });
    }

    useEffect(() => {
        getProducts()
    }, [searchQuery])
    
    return (
        <section className="section">
            <div className='container'>
                <ProductContext.Provider value={{
                    products,
                    getProducts,
                    addProduct,
                    searchQuery,
                    setSearchQuery,
                    loading,
                    errors,
                    message
                }}>
                {children}
                </ProductContext.Provider>
            </div>
        </section>
    );
};
