function logDriverNames(drivers) {
  drivers.forEach(d => console.log(d.name));
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(d => {
    if (d.hometown === hometown) console.log(d.name);
  });
}

function driversByRevenue(drivers) {
  let newDrivers = [...drivers];
  return newDrivers.sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  let newDrivers = [...drivers];
  return newDrivers.sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.reduce((total, d) => total + d.revenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}