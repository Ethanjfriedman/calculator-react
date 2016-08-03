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
  setOperation: function(op) {
    switch (op) {
      case '+':
        return this.add;
      case '-':
        return this.subtract;
      case '*':
        return this.multiply;
      case '/':
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
      default:
        console.log('I am an error');
        return null;
    }
  }
}
