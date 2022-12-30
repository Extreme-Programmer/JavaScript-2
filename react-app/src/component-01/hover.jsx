import React from 'react';

function MyComponent(props) {
    const defaultStyles = {
        /* default styles */
        backgroundColor: "red"
    };
    const hoverStyles = {
        /* hover styles */
        backgroundColor: "blue"
    };

    return (
        <div
            onMouseEnter={() => React.setStyle(hoverStyles)}
            onMouseLeave={() => React.setStyle(defaultStyles)}
        >
            Hover over me!
        </div>
    );
}

export default MyComponent;

