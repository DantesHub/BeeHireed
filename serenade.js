function prime(number) {
  if (number < 1) {
    return false;
  }
  let i = 2;
  while (i < number) {
    if (number % i == 0) {
      return true;
    }
  }
  return false;
}
prime(3);
console.log(prime(5));
assert(prime(7) == true);

function save(splice) {
  if (i == 0) {
    return 5;
  } else {
    return 4;
  }
}
