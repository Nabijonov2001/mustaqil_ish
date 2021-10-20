const fs  = require('fs/promises')
const path = require('path')

module.exports = async function depozit(productName, productNumber){
    let dataPath = path.join(__dirname, '..', 'db', 'database.json')
    let data = await fs.readFile(dataPath, 'utf8')
    data = JSON.parse(data)
    let check  = data.products.find(item => item.nomi === productName.toLowerCase())

    if(check){
        console.log('Bunday mahsulot omborda mavjud!')
    }else{
        let newProduct = {
            nomi:productName.toLowerCase(),
            jami:+productNumber,
            sotildi: 0,
            qoldi:+productNumber
        }
        
        data.products.push(newProduct)
        await fs.writeFile(dataPath, JSON.stringify(data))
        console.log(productName + ' muvaffaqqiyatli qo`shildi!') 
    }
   
}



