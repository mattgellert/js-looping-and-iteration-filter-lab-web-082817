// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {return driver === (name.charAt(0).toLowerCase() + name.slice(1)) || driver === (name.charAt(0).toUpperCase() + name.slice(1))})
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driver) {return driver.slice(0, letters.length) === letters})
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    for (const key in driver) {
      return driver[key] === name
    }
  })
}
