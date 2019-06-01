export default class Post{
  constructor(public id: number, 
              public title: string,
              public content: string,
              public author: string,
              public date: Date,
              public like: number,
              public dislike: number){
                this.like = 0
                this.dislike = 0
              }

  increaseLike(){
    this.like++
  }

  increaseDislike(){
    this.dislike++
  }

  postClass(){
    if(this.like > this.dislike)
      return { 'list-group-item-success' : true, 'list-group-item-danger': false }
    else if(this.like < this.dislike)
      return { 'list-group-item-danger': true,  'list-group-item-success' : false}
  }
}