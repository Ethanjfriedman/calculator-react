export default [
    { value: 1, type: 'num' },
    { value: 2, type: 'num' },
    { value: 3, type: 'num' },
    { value: 4, type: 'num' },
    { value: 5, type: 'num' },
    { value: 6, type: 'num' },
    { value: 7, type: 'num' },
    { value: 8, type: 'num' },
    { value: 9, type: 'num' },
    { value: 0, type: 'num' },
    { value: '+', type: 'op', tooltip: 'addition' },
    { value: '-', type: 'op', tooltip: 'subtraction' },
    { value: '*', type: 'op', tooltip: 'multiplication' },
    { value: '÷', type: 'op', tooltip: 'division' },
    { value: '√', type: 'op', tooltip: 'square root' },
    { value: 'x²', type: 'op', tooltip: 'square current number' },
    { value: 'ln', type: 'op', tooltip: 'natural log (base 𝑒)' },
    { value: 'log₁₀', type: 'op', tooltip: 'log base 10' },
    { value: 'log₂', type: 'op', tooltip: 'log base 2'},
    { value: 'xʸ', type: 'op', tooltip: 'raise current number to next number' },
    { value: 'sin', type: 'op', tooltip: 'find the sine of x' },
    { value: 'cos', type: 'op', tooltip: 'find the cosine of x' },
    { value: 'tan', type: 'op', tooltip: 'find the tangent of x' },
    { value: '∛', type: 'op', tooltip: 'cube root' },
    { value: 'ʸ√x', type: 'op', tooltip: 'use the next number(y) to find the yth root of current number' },
    { value: '%', type: 'op', tooltip: 'convert to percent' },
    { value: '¹/ₓ', type: 'op', tooltip: 'find the inverse of current number' },
    { value: 'x!', type: 'op', tooltip: 'find the factorial of current number' },
    { value: 'Ran', type: 'other', tooltip: 'generate a random number between 0 - 1' },
    { value: 'C', type: 'other', tooltip: 'clear all' },
    { value: '+/-', type: 'other', tooltip: 'make number negative (or positive)' },
    { value: 'π', type: 'other', tooltip: 'insert π (3.14159...) as current number' },
    { value: '𝑒', type: 'other', tooltip: 'insert 𝑒 (2.71828...) as current number' },
    { value: '.', type: 'other', tooltip: 'insert a decimal point' },
    { value: 'copy', type: 'other', tooltip: 'copy current number to clipboard NOT YET FUNCTIONAL' },
    { value: '=', type: 'enter' }
]
