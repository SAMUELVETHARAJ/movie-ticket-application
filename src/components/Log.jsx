import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {GoogleLogin} from "@react-oauth/google";
import { gapi } from "gapi-script";
import "./Log.css";
// import {LoginSocialGoogle} from "reactjs-social-login";

const Log = () => {

    const navigate = useNavigate()
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "396068927684-54n8rdqbukgjc5ofad4scete6818r9o7.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
        navigate("/home")
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="cover5">
            <div className="cover3">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text" >Or login using</p>

            {/* <div className="alt-login"> */}
                
                {/* <LoginSocialGoogle
                    client_id = '294721693696-ulu9beieq3vt6cdlsggbilraaqqg0aar.apps.googleusercontent.com'
                    access_type = 'offline'
                    onResolve = {({provider, data})=>{
                        console.log(provider, data)
                     }}
                    onReject = {(err)=>{
                        console.log(err)
                    }}>
                        <div className="facebook"></div>
                    </LoginSocialGoogle> */}

                
                    <GoogleLogin 
                        className="blue"
                        client_id = "396068927684-54n8rdqbukgjc5ofad4scete6818r9o7.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} 
                        icon={true}    
                        theme="dark"
                    />
                
            {/* </div> */}

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
        </div>
    )
}

export default Log