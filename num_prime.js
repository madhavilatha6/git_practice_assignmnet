function Prime(abc) {

    if (n === 2) {
      return true;
    } else if (m> 1) {
      for (var i = 2; i < m; i++) {
  
        if (abc % i !== 0) {
          return true;
        } else if (m === i * i) {
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