// Code your solution in this file!
function logDriverNames(driver){
  driver.forEach(function(element) {
    console.log(element.name);
  });
}

function logDriversByHometown(driver, place){
  driver.forEach(function(element) {
    if(element.hometown ===  place){
      console.log(element.name);
    }
  });
}

function driversByRevenue(driver){
  // console.log(Object.assign({},driver))
  let newdriver = [...driver]
  // console.log(newdriver, driver);
  newdriver.sort(function(el1, el2){return el1.revenue - el2.revenue})
  return newdriver
}

function driversByName(driver){
  // console.log(Object.assign({},driver))
  let newdriver = [...driver]
  newdriver.sort(function(el1, el2){return el1.name.localeCompare(el2.name)})
  console.log(newdriver);
  return newdriver
}

const sum = ( acc, cur ) => acc + cur

function totalRevenue(driver){

  let x = driver.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue},0)
  return x

}

function averageRevenue(driver){

  let x = driver.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue},0)
  return x/driver.length

}
