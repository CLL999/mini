// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection("blog").where({
      //  _id:event._id,
       author:event.author,
      //  title:event.title
    }).get({
      success: function (res) {
        return res;
      }
    });
  } catch (e) {
    console.log(e);
  }
}