const { Fragment } = require("react")
const { default: Footer } = require("./Footer")
const { default: Navbar } = require("./Navbar")

const MainNavigation = ({children, search, setSearch , user, setUser, isloggedIn, setIsloggedIn}) => {
    console.log(search, setSearch);
    return(
        <Fragment>
         <Navbar search={search} setSearch={setSearch} user={user} isloggedIn={isloggedIn} setUser={setUser} setIsloggedIn={setIsloggedIn}  />
         {children}
         <Footer/>
       </Fragment>
    )
}

export default MainNavigation;