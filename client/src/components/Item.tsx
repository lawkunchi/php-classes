import {FC} from 'react';
import { IProduct } from '../@types/product';

type Props = {
    products:  IProduct[],
};

export const Item: FC<Props> = ({ 
    products,
}) => {
  
    return (
        <>
            {products.map((item, index) => (
                
                <a className="panel-block is-active" key={index} href="/">
                    <span className="panel-icon">
                        {index +1}.
                    </span>
                    {item.name}
                </a>
            ))}
        </>
    );
}
  
export default Item;
