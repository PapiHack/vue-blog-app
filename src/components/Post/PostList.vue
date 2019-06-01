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

    export default {
        data(){
            return {
                posts: [
                    { id: 1, title: 'First Post', content: 'Ceci est le premier post.', author: 'Papi', date: new Date().toLocaleDateString() },
                    { id: 2, title: 'Second Post', content: 'Ceci est le second post.', author: 'PapiHack', date: new Date().toLocaleDateString() },
                    { id: 3, title: 'Third Post', content: 'Ceci est le troisième post.', author: 'itdev', date: new Date().toLocaleDateString() },
                    { id: 4, title: 'Fourth Post', content: 'Ceci est le quatrième post.', author: 'SkullFace', date: new Date().toLocaleDateString() },
                ]
            }
        },
        components: {
            'blog-post-list-item': PostListItem,
        }        
    }
</script>