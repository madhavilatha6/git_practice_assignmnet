function Prime(abc) {

    if (abc === 2) {
      return true;
    } else if (abc> 1) {
      for (var i = 2; i < abc; i++) {
  
        if (abc % i !== 0) {
          return true;
        } else if (abc === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(Prime(16));