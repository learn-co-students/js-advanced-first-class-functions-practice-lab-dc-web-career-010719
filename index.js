// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location){
  locationDrivers = drivers.filter(driver => driver.hometown === location)
  logDriverNames(locationDrivers)
}

function driversByRevenue(drivers) {
  let sortedDrivers = [...drivers]
  return sortedDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  let sortedDrivers = [...drivers]
  return sortedDrivers.sort(function (a, b) {
    return (a.name).localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  let totalRev = drivers.reduce((acc, driver) => {
    return acc + driver.revenue
  }, 0)
  return totalRev
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers)/drivers.length)
}
