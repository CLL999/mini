// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  var _id = event._id
  try {
    return await db.collection('blog')
      .doc(_id)
      .remove()
  } catch (e) {
    console.log(e)
  }
}