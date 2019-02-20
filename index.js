// Code your solution in this file!
function logDriverNames(drivers) {
  for (const i of drivers) {
    console.log(i["name"])
  }
}

function logDriversByHometown(drivers, town) {
  for (const i of drivers) {
    if (i["hometown"] === town) {
      console.log(i["name"])
    }
  }
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (a, b) { return a.revenue - b.revenue})
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a,b) {return a.name.localeCompare(b.name)})
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function(total, driver) { return total + driver.revenue }, 0)
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / Object.keys(drivers).length
}
