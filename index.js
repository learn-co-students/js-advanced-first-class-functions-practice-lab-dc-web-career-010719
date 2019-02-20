
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  localDrivers = drivers.filter(driver => driver.hometown === location)
  logDriverNames(localDrivers)
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
  let total = drivers.reduce((acc, driver) => {
    return acc + driver.revenue
  }, 0)
  return total
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers)/drivers.length)
}
