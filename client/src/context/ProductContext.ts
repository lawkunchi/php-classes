import { createContext } from 'react';
import {IProductContext } from '../@types/product';

export  const defaultState = {
    products: [],
    categories: [],
    loading: false,
    error: '',
    searchQuery: ''
};

export const ProductContext = createContext<IProductContext>(defaultState);