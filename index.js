// Code your solution in this file!
const logDriverNames = (array) => {array.map(element => console.log(element.name))}

const logDriversByHometown = (array, arg) => {logDriverNames(array.filter(element => element.hometown === arg))}

const driversByRevenue = (array) => {return array.slice().sort((a, b) => {return a.revenue - b.revenue})}

const driversByName = (array) => {return array.slice().sort((a, b) => {return a.name.localeCompare(b.name)})}

const totalRevenue = (array) => {return array.reduce((total, element) => total + element.revenue, 0)}

const averageRevenue = (array) => {return totalRevenue(array)/array.length}
