export default {
  incrementByBase: function(prev, n, base) {return (prev * base) + n},
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; },
  multiply: function(a, b) { return a * b; },
  divide: function(a, b) {
    if (!b) { return 'ERR Divide By Zero'; }
    return a / b;
  },
  switchSign: function(a) { return -a; },
  squareRoot: function(a) { return Math.sqrt(a); },
  square: function(a) { return a * a; },
  ln: function(a) { return Math.log(a); },
  log10: function(a) { return Math.log10(a); },
  xToY: function(a, b) { return Math.pow(a, b); },
  sin: function(a) { return Math.sin(a); },
  cos: function(a) { return Math.cos(a); },
  tan: function(a) { return Math.tan(a); },
  cubeRoot: function(a) { return Math.cbrt(a); },
  percent: function(a) { return a / 100; },
  ythRoot: function(a, b) { return Math.pow(a, (1 / b)); },
  inverse: function(a) { return 1 / a; },
  factorial: function(a) {
    let fact = 1;
    while (a > 1) {
      fact *= a;
      a--;
    }
    return fact;
  },
  setOperation: function(op) {
    switch (op) {
      case '+':
        return this.add;
      case '-':
        return this.subtract;
      case '*':
        return this.multiply;
      case '÷':
        return this.divide;
      case '+/-':
        return this.switchSign;
      case '√':
        return this.squareRoot;
      case 'x²':
        return this.square;
      case 'ln':
        return this.ln;
      case 'log₁₀':
        return this.log10;
      case 'xʸ':
        return this.xToY;
      case 'sin':
        return this.sin;
      case 'cos':
        return this.cos;
      case 'tan':
        return this.tan;
      case '∛':
        return this.cubeRoot;
      case '%':
        return this.percent;
      case 'ʸ√x':
        return this.ythRoot;
      case '¹/ₓ':
        return this.inverse;
      case 'x!':
        return this.factorial;
      default:
        console.error('Error in /src/utils/calculatorFxns.js switch statement.');
        return null;
    }
  }
}
