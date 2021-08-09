import SearchFilter from "./SearchFilter"
import SearchResult from "./SearchResult"

const SearchPlate = ({products}) => {
    return(
        <div className="searchPlate">
            <SearchFilter/>
            <SearchResult products={products} />
        </div>
    )
};
export default SearchPlate;