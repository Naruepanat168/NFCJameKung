const mongoose = require("mongoose");
const models = require("../models/documents");

exports.handleNFCOperation = async (req, res, groupNFC, element) => {
  const add = mongoose.model(groupNFC, models);
  const research = await add.findOne({
    itemsName: element,
  });

  if (research) {
    research.countt += 1;
    await research.save();
    console.log(research);
    res.send("มีในระบบ");
  } else {
    let countt = 1;
    const item = new add({
      nameNFC:groupNFC,
      itemsName: element,
      countt: countt,
    });

    await item.save();
    res.send("บันทึกเรียบร้อย");
  }
};






//   const research = await add.findOne({
//     itemsName: element,
//   });
//   if (research) {
//     research.count += 1;
//     await research.save();
//     res.send("มีในระบบ");
//   } else {
//     const item = new add({
//       itemsName: element,
//       count: 1,
//     });
//     await item.save();
//     res.send("บันทึกเรียบร้อย");
//   }
// };