// Code your solution in this file!
function logDriverNames(drivers) {
    return drivers.forEach(function(element){
        console.log(element['name'])
    })
}

function logDriversByHometown(drivers, town) {
     drivers.forEach(function(element){
        if (element["hometown"] === town) {
        console.log(element["name"])
        }
    })
}

function driversByRevenue(drivers){
    return drivers.slice().sort(function(a, b){
        return a['revenue'] - b['revenue']
    })
}

function driversByName(drivers){
    return drivers.slice().sort(function(a, b){
        return a['name'].localeCompare(b['name'])
    })
}

function totalRevenue(drivers){
    return drivers.slice().reduce(function(acc, driver){
        return acc + driver['revenue']
    }, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}