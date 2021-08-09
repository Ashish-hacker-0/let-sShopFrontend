const PleaseLogin = ({msg, setLoginp}) => {
    return(
        <div className="login">
            <div className="msg-div">
                <p>Please Login</p>
                <p>to {msg} </p>
                <button onClick={()=>setLoginp(false)} >CLOSE</button>
            </div>
        </div>
    )
}

export default PleaseLogin;