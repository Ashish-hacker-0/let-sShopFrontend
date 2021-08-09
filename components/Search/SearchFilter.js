const SearchFilter = () => {
    return(
        <div className="search-filter">
            <div className="price-filter" >
                <p>FILTER BY PRICE</p>
                <div className="price-input">
                <input placeholder="Min" /> <input placeholder="Max" />
                </div>
                <button>FILTER</button>
            </div>
            <div className="category">
            <p>CATEGORIES</p>
               <ul>
                   <li>Accessories</li>
                   <li>Bags</li>
                   <li>BOYS & GIRLS </li>
                   <li>Clothes</li>
                   <li>Kids</li>
                   <li>Men</li>
                   <li>Shoes</li>
                   <li>Women</li>
               </ul>
            </div>
            <div className="category">
            <p>SIZES</p>
               <ul>
                   <li>XS</li>
                   <li>S</li>
                   <li>M</li>
                   <li>L</li>
                   <li>XL</li>
                   <li>XXL</li>
               </ul>
            </div>
        </div>
    )
};

export default SearchFilter;