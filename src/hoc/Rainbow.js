import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = [ 'red', 'blue', 'green', 'yellow', 'pink', 'orange'];
    const RandomColour = colours[Math.floor(Math.random() * 5)];
    const className = RandomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent/>
            </div>
        )
    }
}

export default Rainbow