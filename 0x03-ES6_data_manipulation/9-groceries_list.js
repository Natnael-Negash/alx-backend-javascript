export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const mp = new Map();
  // Iterate over each element in the array and set key-value pairs in the map
  for (const el of arr) {
    mp.set(el[0], el[1]);
  }
  return mp;
}
