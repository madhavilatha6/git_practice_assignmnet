function Prime(primenumber) {

    if (primenumber === 2) {
      return true;
    } else if (primenumber> 1) {
      for (var i = 2; i < primenumber; i++) {
  
        if (primenumber % i !== 0) {
          return true;
        } else if (primenumber === i * i) {
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