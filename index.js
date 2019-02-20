// Code your solution in this file!
const logDriverNames = function (drivers) {
  const callback = function (el) {
    console.log(el.name)
  }
  drivers.forEach(callback)
}

const logDriversByHometown = function (drivers, location) {
  const callback = function(el) {
    if (el.hometown === location) {
      console.log(el.name)
    }
  }
  drivers.forEach(callback)
}

const driversByRevenue = function (drivers) {
  const callback = function(el1, el2) {
    return el1.revenue - el2.revenue
  }
  return drivers.slice().sort(callback)
}

const driversByName = function (drivers) {
  const callback = function(el1, el2) {
    return el1.name.localeCompare(el2.name)
  }
  return drivers.slice().sort(callback)
}

const totalRevenue = function (drivers) {
  const callback = function(agg, el, i, arr) {
    return agg + el.revenue
  }
  return drivers.reduce(callback, 0)
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
