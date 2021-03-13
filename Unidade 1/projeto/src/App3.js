import React, { useState, useEffect } from "react";

export default function App() {
    const [name, setName] = useState("");

    useEffect(() => {
        setName("Teste");
    }, []);

    const onChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={onChange} />
            <p>{name}</p>
        </div>
    );
}
