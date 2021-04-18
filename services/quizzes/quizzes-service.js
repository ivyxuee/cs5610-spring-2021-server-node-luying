// const quizzes = require('./quizzes.json')
// const quizzesModel = require("../../models/quizzes/quizzes-model")
//
//
// // TODO: Node.js Assignment this week
// const findAllQuizzes = () => {
//     // return quizzes
//     return quizzesModel.find();
// }
// const findQuizById = (quizId) => {
//     return quizzesModel.findById(quizId).populate("questions").exec()
//     // return quizzes.find((quiz) => {
//     //     return quiz._id === quizId
//     // })
// }
//
//
// // console.log(findAllQuizzes())
// // console.log(findQuizById('123'))
//
// // TODO: MongoDB Assignment next week
// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findQuizById, findAllQuizzes,
//     updateQuiz, deleteQuiz
// }

const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }
