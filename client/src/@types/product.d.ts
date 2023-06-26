export interface IProductContext {
    products: IProduct[];
    searchQuery: string,
    loading: boolean,
    message: string,
    errors: any,
    getProducts?: () => void,
    setSearchQuery?: (query:string) => void,
    addProduct?: (name: string, category:string) => void
}
  
export interface IProduct {
    name: string;
}

export interface ICategory {
    name: string;
    products: IProduct[];
}

export type Props = {
    children?: React.ReactNode
  };