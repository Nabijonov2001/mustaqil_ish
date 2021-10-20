const fs  = require('fs/promises')
const path = require('path')

module.exports = async function depozit(productName, productNumber){
    let dataPath = path.join(__dirname, '..', 'db', 'database.json')
    let data = await fs.readFile(dataPath, 'utf8')
    data = JSON.parse(data)
    let checkIndex  = data.products.findIndex(item => item.nomi === productName.toLowerCase())
    if(checkIndex >= 0){
       
        if(data.products[checkIndex].qoldi < Number(productNumber)){
            console.log('Bu mahsulot ' + data.products[checkIndex].qoldi + ' dona qoldi')
        }
        else{
            data.products[checkIndex] = {
                ...data.products[checkIndex],
                sotildi:data.products[checkIndex].sotildi+ Number(productNumber),
                qoldi:data.products[checkIndex].qoldi - Number(productNumber)
                }
                await fs.writeFile(dataPath, JSON.stringify(data))
                console.log('Sotuv muvaffaqqiyatli amalga oshirlidi!')
        }
      
    }else{
        console.log('Bunday mahsulot omborda mavjud emas!')
    }
   
}



