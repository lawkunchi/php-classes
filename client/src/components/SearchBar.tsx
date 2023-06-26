import {FC} from 'react';

type Props = {
    searchQuery:string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: FC<Props> = ({ 
    searchQuery,
    handleChange
}) => {
  
    return (
            
            <div className="panel-block search-bar">
                <p className="control has-icons-left">
                    <input onChange={handleChange} className="input" type="text" placeholder="Search" value={searchQuery}/>
                    <span className="icon is-left">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                </p>
            </div>

    );
}
  
export default SearchBar;
