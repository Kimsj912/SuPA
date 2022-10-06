import React from "react";

const Route = ({path, component}) => {
    console.log(path, component);
    return (
        {component}
    );
    
}
export default Route;
