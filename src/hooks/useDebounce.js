import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [deBounceValue, setDeBounceValue] = useState(value);

    useEffect( () => {
        const hanler = setTimeout(() => setDeBounceValue(value), delay);
        return () => clearTimeout(hanler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[value]);
    
    return (deBounceValue);
}

export default useDebounce;