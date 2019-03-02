import Request from '../utils/request'

export default class Book {
  static fetchHotList = () => {
    return Request.promiseRequest({
      url: '/book/hot_list',
      method: 'GET'
    })
  }

  static fetchDetail = (bookId) => {
    return Request.promiseRequest({
      url: `/book/${bookId}/detail`
    })
  }

  static fetchLikeStatus = (bookId) => {
    return Request.promiseRequest({
      url: `/book/${bookId}/favor`
    })
  }

  static fetchComments = (bookId) => {
    return Request.promiseRequest({
      url: `/book/${bookId}/short_comment` 
    })
  }
}