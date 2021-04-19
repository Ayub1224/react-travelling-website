import React, { Component } from 'react'
import './button.css'

const STYLE = ['btn-primar', 'btn-outline']
const SIZE = ['btn-medium', 'btn-large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStye,
    buttonSize
}) => {
    const checkButtonStyle = STYLE.includes(buttonStye) ? buttonStye : STYLE[0]
    const checkButtonSize = STYLE.includes(buttonSize) ? buttonSize : SIZE[0]

    return (
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}