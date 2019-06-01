<template>
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-md-12 list-group">
            <blog-post-list-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            >
            </blog-post-list-item>
        </div>
    </div>
</template>

<script>
import PostListItem from './PostListItem'
import Post from './Models/Post'

    export default {
        data(){
            return {
                posts: [
                    new Post(1, 'First Post', 'Ceci est le premier post.', 'Papi', new Date().toLocaleDateString()),
                    new Post(2, 'Second Post', 'Ceci est le second post.', 'PapiHack', new Date().toLocaleDateString()),
                    new Post(3, 'Third Post', 'Ceci est le troisième post.', 'itdev', new Date().toLocaleDateString()),
                    new Post(4, 'Fourth Post', 'Ceci est le quatrième post.', 'SkullFace', new Date().toLocaleDateString()),
                ]
            }
        },
        components: {
            'blog-post-list-item': PostListItem,
        }        
    }
</script>