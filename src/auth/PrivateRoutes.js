import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { isauthenticate} from './index'
const PrivateRoute=({component:Component,...rest})=>(
    <Route {...rest} render={props=>isauthenticate()?(
            <Component {...props}/>
    ):(
            <Redirect to={{
                pathname:'/signin',
                state:{from:props.location}
            }}
    />
    )
        }
        />
)
export default PrivateRoute;