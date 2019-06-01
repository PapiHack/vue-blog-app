<template>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 list-group-item">
            <h2>#{{ post.id }} - {{ post.title }}</h2>
            <p> {{ post.content }} </p> <br>
            <p> <button class="btn btn-success"><i class="fa fa-heart"></i> Like</button> &nbsp; <button class="btn btn-danger"><i class="fa fa-heartbeat"></i> Dislike</button> </p>
            <p class="pull-right"> <b><i>Par {{ post.author }}, le {{ post.date }}</i></b> </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['post']
    }
</script>