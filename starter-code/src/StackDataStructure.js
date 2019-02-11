function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.stackControl.length == 0) {
      return true
    } else {
      return false
    }
  }

  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  this.push = function(elem) {
    if (this.canPush() == true) {
      this.stackControl.push(elem);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  this.pop = function() {
    if (this.isEmpty() == false) {
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }
  }
}