const MinStack = function () {
  this.st = []
  this.stMin = []
}

MinStack.prototype.push = function(x) {
  this.st.push(x)
  if (!this.stMin.length || x <= this.stMin[this.stMin.length - 1]) this.stMin.push(x)  
}

MinStack.prototype.pop = function() {
  const popItem = this.st.pop()
  if (item === this.stMin[this.stMin.length - 1]) this.stMin.pop() 
}

MinStack.prototype.top = function() {
  return this.st[this.st.length - 1]
}

MinStack.prototype.getMin = function() {
  return this.stMin[this.stMin.length - 1]
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
