import { createContext } from 'react';
import {IProductContext } from '../@types/product';

export  const defaultState = {
    products: [],
    loading: false,
    errors: [],
    message: '',
    searchQuery: ''
};

// Intialize Product API Context
export const ProductContext = createContext<IProductContext>(defaultState);