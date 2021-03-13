
import React from 'react';

export default function Input({ type, value, onChangeText }) {
    const onChange = ({ target }) => {
        onChangeText(target.value);
    }

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}