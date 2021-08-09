const ProductBar = () => {
    return(
        <div className="product-bar">
          <div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/61Ax-b3TXnL._UY500_.jpg"/>
          </div>
          <div>
              <p>Name</p>
          </div>
          <div>
             <p>Price</p>
          </div>
          <div>
              <p>Quantity</p>
          </div>
          <div>
              <p>Category</p>
          </div>
          <div>
              <button>VIEW DETAILS</button>
          </div>

        </div>
    )
}

export default ProductBar;