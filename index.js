// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach( function(driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, hometown) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}

const driversByRevenue = function(drivers) {
  let driversClone = [...drivers]
  driversClone.sort( function(a, b) {return a.revenue - b.revenue})
  return driversClone
}

const driversByName = function(drivers) {
  let driversClone = [...drivers]
  driversClone.sort( function(a, b) {return a.name.localeCompare(b.name)})
  return driversClone
}

const reducer = (accumulator, currentValue) => accumulator + currentValue; //thank you MDN

const totalRevenue = function(drivers) {
  return drivers.map(driver => driver.revenue).reduce(reducer)
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
