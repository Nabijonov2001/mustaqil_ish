const fs  = require('fs/promises')
const path = require('path')

module.exports = async function dashboard(){
    let dataPath = path.join(__dirname, '..', 'db', 'database.json')
    let data = await fs.readFile(dataPath, 'utf8')
    data = JSON.parse(data)
    console.table(data.products)   
}


