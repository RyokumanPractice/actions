function factorial(n) {
  if (n < 0) throw new Error("input needs to be bigger than 0");
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

export { factorial };
