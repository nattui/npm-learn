const customLogger = obj => {
  console.log(obj);
}

const customMessage = () => {
  console.log('I like pizza! 🍕');
}

module.exports = {
  customLogger,
  customMessage
};
