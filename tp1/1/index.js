const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let prix
    let position = input[0]
    for(let i=1; i < input.length; i++){
      split = input[i].split(' ')
      position += parseInt(split[0])
      position -= parseInt(split[1])
    } 
    if(position <= 100){
      prix = 1000
    }
    else if(position <= 10000){
      prix = 100
    }
    else{
      prix = 'KO'
    }
    return prix

    console.log(course)
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}