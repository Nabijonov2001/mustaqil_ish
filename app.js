const dashboard = require('./src/dash')
const depozit = require('./src/dep')
const selling = require('./src/sell')

let command = process.argv

if(command.length == 2){
    dashboard()
}else if(command.length === 5 && command[2] === '--dep'){
    depozit(command[3], command[4])
}else if(command.length === 5 && command[2] ==='-sell'){
  selling(command[3], command[4])
}


