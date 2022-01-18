function formatString(str) {
  // replaces spaces with dashes
  return str.toLowerCase().split(' ').join('-');
}

export default formatString;
