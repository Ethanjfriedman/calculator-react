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
      default:
        console.log('I am an error');
        return null;
    }
  }
}
