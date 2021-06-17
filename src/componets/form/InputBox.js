import React from 'react'

export default function InputText(props) {
    const { name, type, placeholder } = props
    return (
        <>
                <input name={name} type={type} placeholder={placeholder} />
        </>
    )
}


export function TextArea(props) {
    const { name, type, placeholder } = props
    return (
        <>
            <textarea name={name} type={type} placeholder={placeholder} ></textarea>
        </>
    )
}

export function SubmitButton(props) {
    const { name, type, value } = props
    return (
        <>
            <button class="ht-btn ht-btn-md" name={name} type={type}  >{value}</button>
        </>
    )
}


