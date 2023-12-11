const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const model = require("../models/documents");
const { a2 } = require("../controllers/item");

let PD = [];

router.get("/showItem", async (req, res) => {

  const collections = await mongoose.connection.db.listCollections().toArray();
  const collectionNames = collections.reverse().map((collection) => collection.name.toUpperCase());
  

  const itemsNames = ["a1", "a2", "a3", "a4", "a5"];


  for (const collectionName of collectionNames) {
    const collectionModel = mongoose.model(collectionName, model);
    PD.push(collectionModel);
  }

  let resultProduct = [];


  for (let i = 0; i < collectionNames.length; i++) {
    resultProduct.push(await PD[i].find({ nameNFC: collectionNames[i].toUpperCase() }));
  }


  let newName = Array.from({ length: collectionNames.length }, () => Array(itemsNames.length).fill([]));


  let o=0
  let showItem = Array.from({ length: collectionNames.length }, () => Array(itemsNames.length).fill([]));

  for (let i = 0; i < resultProduct.length; i++) {

    for (let x = 0; x < itemsNames.length; x++) {

      newName[i][x] = resultProduct[i].filter((item) => item.itemsName === itemsNames[x]);
    
      if(newName[i][x].length){
        let d0 = newName[i][x][0].nameNFC 
        let d1 = newName[i][x][0].itemsName
        let d2 = newName[i][x][0].countt

        // console.log(d0+'|'+d1+'  =  '+d2);
         showItem[i][x] = `<b>รหัสสินค้า:&nbsp;&nbsp;</b> ${d1}<br> <b>ตำเเหน่ง:&nbsp;&nbsp;</b> ${d0} <br><b>บันทึกการเข้าใช้:&nbsp;&nbsp;</b> ${d2} ครั้ง<hr>`
         
      }else{
        
      }
     
    }
  }
      
  res.render("index.ejs", { showsData: showItem, nfC: collectionNames ,itemsNames:itemsNames});
});

module.exports = router;
