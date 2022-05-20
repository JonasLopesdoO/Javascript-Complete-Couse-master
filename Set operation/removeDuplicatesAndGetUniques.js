Set.difference = function(s1, s2) {
   if (!s1 instanceof Set || !s2 instanceof Set) {
      console.log("The given objects are not of type Set");
      return null;
   }
   let newSet = new Set();
   s1.forEach(elem => newSet.add(elem));
   s2.forEach(elem => newSet.delete(elem));
   return newSet;
}

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
console.log(Set.difference(setA, setB));