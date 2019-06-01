<template>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 list-group-item" :class="post.postClass()">
            <h2>#{{ post.id }} - {{ post.title }}</h2>
            <p> {{ post.content }} </p> <br>
            <p> <button class="btn btn-success" @click="updateLikes(post)"><i class="fa fa-heart"></i> Like</button> &nbsp; <button class="btn btn-danger" @click="updateDislikes(post)"><i class="fa fa-heartbeat"></i> Dislike</button> </p>
            <p class="pull-right"> <b><i>Par {{ post.author }}, le {{ post.date }}</i></b> </p>
        </div>
    </div>
</template>

<script>
import Post from './Models/Post'

    export default {
        props: ['post'],
        methods: {
            updateLikes(post){
                post.increaseLike()
            },
            updateDislikes(post){
                post.increaseDislike()
            }
        }
    }
</script>