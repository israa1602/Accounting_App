const { Paper } = require('../models')
module.exports = {
    async getPaperList() {
        return Paper.findAll({
            attributes: ['id','type']
          })
   },

   /*async addDefaultPapers(){
    await Paper.create({ 
        createdAt : moment().format("YYYY/MM/DD h:mm:ss"),
        updatedAt : moment().format("YYYY/MM/DD h:mm:ss"),
    });
   }*/
}