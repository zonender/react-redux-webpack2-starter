import numeral from 'numeral';

const talk = (a, b) =>numeral(a + b).format('$0.0.00');

export default talk;
