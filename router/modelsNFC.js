const express = require("express");
const router = express.Router();


const item = require("../controllers/f");

//NPCทั้งหมด
const NPC = "10";
//รายการสิ้นค้าทั้งหมด
const itemsNames = ["a1", "a2", "a3", "a4", "a5"]

for (var i = 1; i <= NPC; i++) {
  itemsNames.forEach((element) => {
    let dynamicPath = `/NFC${i}_${element}`
    let groupNFC = `NFC${i}`
     
    router.get(dynamicPath, (req, res,) => {
        
       //ส่งพารา ชื่อกลุ่มnfc เเละชื่อสิ้นค้า
      item[element](req, res,groupNFC,element);});
  });
  
}
module.exports = router;
