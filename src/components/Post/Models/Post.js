"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(id, title, content, author, date, like, dislike) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.like = like;
        this.dislike = dislike;
        this.like = 0;
        this.dislike = 0;
    }
    Post.prototype.increaseLike = function () {
        this.like++;
    };
    Post.prototype.increaseDislike = function () {
        this.dislike++;
    };
    Post.prototype.postClass = function () {
        if (this.like > this.dislike)
            return { 'list-group-item-success': true, 'list-group-item-danger': false };
        else if (this.like < this.dislike)
            return { 'list-group-item-danger': true, 'list-group-item-success': false };
    };
    return Post;
}());
exports.default = Post;
