

import {FC} from 'react';
import { IProduct } from '../@types/product';

type Props = {
  products:  IProduct[],
  searchQuery:string,
  handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
};

export const Item: FC<Props> = ({ 
  products,
  searchQuery,
  handleChange
}) => {
  
    return (
      <nav className="panel">
      <p className="panel-heading">
        Products
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input onChange={handleChange} className="input" type="text" placeholder="Search" value={searchQuery}/>
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        
      </div>
      {products.map((item, index) => (
        
      <a className="panel-block is-active" key={index} href="/">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          {item.name}
          
        </a>
      ))}
</nav>
    );
}
  
export default Item;
