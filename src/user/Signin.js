import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import {signin, authenticate,isauthenticate} from '../auth/index'
const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });
    const {user}=isauthenticate();
    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({email,password}).then(data=>{
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        loading:false,
                        redirectToReferrer:true
                    });
                });
            }
        })
       
    };
    const showError = () => (
        <div className="alert alert-danger animated zoomIn" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    const redirect=()=>{
            if(redirectToReferrer){
                if(user && user.role===1){
                    return <Redirect to="/admin/dashboard"/>
                }else if(user.role===0){
                    return <Redirect to="/user/dashboard"/>
                }
                else{
                    return <Redirect to="/signin"/>
                }
            }
            if(isauthenticate()){
                return <Redirect to='/'/>
            }
        }
    const showLoading= () => (
       loading && (<div className="alert alert-info animated zoomIn"><h5>Loading</h5></div>)
    );
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted animated slideInLeft">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control animated slideInRight"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted animated slideInLeft">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control animated slideInRight"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary animated zoomIn">
                Submit
            </button>
        </form>
    );


    return (
        <Layout
            title="Login"
            description="Login to do your shopping"
            className="container col-md-8 offset-md-2">
                {showError()}
                {showLoading()}
            {signUpForm()}
            {redirect()}
        
        </Layout>
    );
};

export default Signin;
