import {mount} from "auth/AuthApp";
import React, {useEffect, useRef} from "react";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);
    
    return <div ref={ref} />;
}