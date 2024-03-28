
function superbowlWin(record) {
    // Iterate over each entry in the record array
    for (let i = 0; i < record.length; i++) {
      // Check if the result is a win ('W')
      if (record[i].result === 'W') {
        // If it is, return the corresponding year
        return record[i].year;
      }
    }
    // If no win is found, return undefined
    return undefined;
  }
  




