export interface IProductContext {
    products: IProduct[];
    categories: ICategory[];
    searchQuery: string,
    loading: boolean,
    error: string,
    getCategories?: () => void;
    setSearchQuery?: (query:string) => void;
    setProducts?: (query:IProduct[]) => void;
    addProduct?: (name: string, category:string) => void;
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