import React from 'react';
import ReactDom from 'react-dom';


const Info =(props)=>(
    <div>
        <h1>Test</h1>
        <p>this is testing{props.infos}</p>
    </div>
);

const adminWarning = (WrappedComponent)=> {
    return (props) =>(
        <div>
            <p>this is warning msg</p>
            <WrappedComponent {...props}/> 
        </div>
    )
}

const authenticationWarning = (WrappedComponent)=> {
    return (props) =>(
        <div>
            <p>this is warning msg 2</p>
            <WrappedComponent {...props}/> 
        </div>
    )
}

const HocAdmin = adminWarning(Info);
const HocAuthentication =authenticationWarning(Info);



ReactDom.render(<HocAdmin infos='this 1st level testing' />, document.getElementById('app'));
ReactDom.render(<HocAuthentication infos='this 2st level testing' />, document.getElementById('app'))