// Code your solution in this file!
let logDriverNames = function(object) {
  return object.forEach(function(obj) {
    console.log(obj.name);
  });
};

let logDriversByHometown = function(object, city) {
  return object.forEach(function(obj) {
    if (obj.hometown === city) {
      console.log(obj.name);
    }
  });
};

let driversByRevenue = function(object) {
  newDrivers = [...object];
  return newDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
};

// let driversByName = function(object) {
//   newDrivers = [...object];
//   return newDrivers.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     // names must be equal
//     return 0;
//   });
// };

let driversByName = function(object) {
  let newObject = [...object];
  return newObject.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(object) {
  return object.reduce(function(agg, obj) {
    return obj.revenue + agg;
  }, 0);
};

let averageRevenue = function(object) {
  return totalRevenue(object) / object.length;
};
