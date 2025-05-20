// conversion rate: 1 EURO = 140 NRS
const conversionRate = 140;

function convertNrsToEuro(nrs) {
  if (typeof nrs !== 'number' || nrs < 0) {
    throw new Error('Amount must be a positive number');
  }
  const euro = nrs / conversionRate;
  return euro.toFixed(2);
}

module.exports = { convertNrsToEuro };
