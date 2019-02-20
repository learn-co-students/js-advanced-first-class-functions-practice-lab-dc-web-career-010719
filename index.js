// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(function(el){
        console.log(el.name)
    })
}

const logDriversByHometown = function(drivers, hometown) {
    drivers.forEach(function(driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function(drivers) {
    let newDrivers = [...drivers]
    return newDrivers.sort((a, b) => a.revenue - b.revenue)
}

const driversByName = function(drivers) {
    let newDrivers = [...drivers]
    return newDrivers.sort((a,b) => a.name.localeCompare(b.name))
}

const totalRevenue = function(drivers) {
    return drivers.reduce(function(acc, currValue){
        return acc + currValue.revenue
    },0)
    }

const averageRevenue = function(drivers) {
    return totalRevenue(drivers)/drivers.length
}