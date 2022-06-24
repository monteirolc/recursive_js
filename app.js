const myData = require('./components.json')
// let outPut = [] 
function toPrint(printContent){
  console.log(printContent.component)
  // outPut.push(printContent.component)
}
function toFind(dataContent){
    if(Array.isArray(dataContent)){
      if(dataContent[0].component){
        for(let i=0;i< dataContent.length;i++){
          toPrint(dataContent[i])
          if(dataContent[i].settings){
            toFind(dataContent[i].settings)
          }
        }
      }
      
    }else{
      if(dataContent.components) toFind(dataContent.components)
      if(dataContent.filters_collection) toFind(dataContent.filters_collection.filters)
      if(dataContent.sort_collection) toFind(dataContent.sort_collection.sort)
      if(dataContent.footer_collection) toFind(dataContent.footer_collection.columns)
    }
}
toFind(myData)
// console.log(outPut, outPut.length)

