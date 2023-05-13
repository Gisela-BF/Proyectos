function mayorArray(arr) {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
    }
    let index = 0;
    while (index < arr.length) {
      console.log(arr[index]);
      index++;
    }
    let contadorImpares = 0;
    let j = 0;
    do {
      if (arr[j] % 2 !== 0) {
        contadorImpares++;
      }
      j++;
    } while (j < arr.length);
    return mayor;
  }
}