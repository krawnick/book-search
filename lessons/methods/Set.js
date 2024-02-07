const flights = ['Russia', 'France', 'London', 'London', 'USA']
const setFlights = new Set(flights)

setFlights.add('Germany')

// console.log(setFlights)
// console.log(setFlights.size)
// console.log(setFlights.has('Russia'))

for (const flight of setFlights) {
  console.log(flight)
}

console.log([...setFlights])
