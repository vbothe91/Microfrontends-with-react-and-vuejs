import React, { useEffect, useRef } from "react";
import { mount } from "VueAppHost/VueApp";

const VeuJs = () => {
    const ref = useRef(null);

    useEffect(()=> {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref}></div>
    )
}

export default VeuJs;

// Import mount from view.js app
// call mount method async.. useEffect
// Reference the template from mount method and add it to our react app