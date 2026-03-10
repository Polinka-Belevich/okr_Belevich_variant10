vfunction createCounter() {
  let count = 0;
  let history = [0];
  return {
    increment() {
      count++;
      history.push(count);
      return count;
    },
    decrement() {
      count--;
      history.push(count);
      return count;
    },
    reset() {
      count = 0;
      history.push(count);
      return count;
    },
    getHistory() {
      return [...history];
    },
    getValue() {
      return count;
    }
  };
}
