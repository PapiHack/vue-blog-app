class Post {
  constructor(id, title, content, author, date, like, dislike) {
    this.id = id
    this.title = title
    this.content = content
    this.author = author
    this.date = date
    this.like = like
    this.dislike = dislike
  }

  increaseLike() {
    this.like++
  }

  increaseDislike() {
    this.dislike++
  }
}

module.exports = {
  Post
}
