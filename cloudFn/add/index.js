// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    var title = event.title
    var author = event.author
    var content = event.content
    try {
      return await db.collection('blog').add({
        data:{
          title:title,
          author:author,
          content:content
        }
      })
    } catch (e) {
      console.log(e)
    }
}