// Code your solution in this file!
function logDriverNames(array) {
    for (const elem of array) {
        console.log(elem.name)
    }
}

function logDriversByHometown(array, location) {
    for (const elem of array) {
        if (elem.hometown === location) {
            console.log(elem.name)
        }
    }
}

function driversByRevenue(array) {
    newarr = array.slice()
    return newarr.sort(function (a, b) {
        return a.revenue - b.revenue
    })
}

function driversByName(array) {
    newarr = array.slice()
    return newarr.sort(function (a, b) {
        return a.name.localeCompare(b.name)
    })

}

function totalRevenue(array) {
    return array.reduce(function (total, currentDriver){
        return total + currentDriver.revenue
    }, 0)
}

function averageRevenue(array) {
    return totalRevenue(array) / array.length
}