import React, { useState } from 'react';
import Layout from '../core/Layout';
import {signup} from '../auth/index'
import {Link} from 'react-router-dom'
const Signup = () => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    
    const clickSubmit = event => {
        event.preventDefault();
        signup({name,email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    success:true
                })
            }
        })

    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted animated slideInLeft">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control animated slideInRight" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted animated slideInLeft">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control animated slideInRight" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted animated slideInLeft">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control animated slideInRight" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary animated zoomIn">
                Submit
            </button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger animated zoomIn" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info animated zoomIn" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <Layout
            title="Signup"
            description="Where all shopping starts from here"
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;
