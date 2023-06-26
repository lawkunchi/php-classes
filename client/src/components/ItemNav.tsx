

import {FC} from 'react';
import { ICategory } from '../@types/product';

type Props = {
  categories:  ICategory[],
  changeTab: (name:string) => void,
  activeTab: string
};

export const ItemNav: FC<Props> = ({ 
    categories,
    changeTab,
    activeTab
}) => {
  
    return (
        <div className="tabs is-boxed">
            <ul>
                {categories.map((category, index) => (
                    <li className={activeTab === category.name? 'is-active': ''} key={index} onClick={()=>changeTab(category.name)}>
                        <a>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
  
export default ItemNav;
