import React from 'react';
const MyComponent = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <native-card tabindex="0"></native-card>
            <p>This is a simple text.</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
};

export default MyComponent;
