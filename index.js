// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver['name']);
  })
}

function logDriversByHometown(drivers, hometown) {
   drivers.forEach(function(driver){
     if (driver.hometown === hometown){
    console.log(driver.name);
  }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

function driversByName(drivers){
  return drivers.slice().sort(function (dr1, dr2){
    return dr1.name.localeCompare(dr2.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
