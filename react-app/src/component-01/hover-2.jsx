import React from 'react';

function Hover2() {

    function changeBackground(e) {
        e.target.style.background = 'red';
    }
    
    function defBack(e) {
        e.target.style.background = 'blue';
    }

    return (
        <div className="App">
            <button
                onLoad={defBack}
                onMouseOver={changeBackground}
                onMouseLeave={defBack}
            >Hover over me!
            </button>
        </div>
    );
}

export default Hover2;
