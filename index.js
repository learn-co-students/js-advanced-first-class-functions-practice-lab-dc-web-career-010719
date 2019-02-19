function logDriverNames (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown (drivers, location) {
  drivers.filter(function (driver) { return driver.hometown === location })
  .forEach(function (driver) {
    console.log(driver.name)
  })
}

function driversByRevenue (drivers) {
  const revSort = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  }
  return drivers.slice().sort(revSort)
}

function driversByName (drivers) {
  const nameSort = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  }
  return drivers.slice().sort(nameSort)
}

function totalRevenue (drivers) {
  let totalPrice = 0
  const rev = function (agg, el, i, drivers) {
    return totalPrice += el.revenue
  }
  return drivers.reduce(rev, 0)
}

function averageRevenue (drivers) {
  let totalPrice = 0
  const rev = function (agg, el, i, drivers) {
    return totalPrice += el.revenue
  }
  return drivers.reduce(rev, 0)/drivers.length
}
