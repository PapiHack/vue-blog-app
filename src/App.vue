<template>
  <div id="app" class="container">
    <blog-header></blog-header>
    <hr>
    <blog-post-list></blog-post-list>
    <hr>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import PostList from './components/Post/PostList'

export default {
  name: 'app',
  components: {
    'blog-header': Header,
    'blog-footer': Footer,
    'blog-post-list': PostList,
  }
}
</script>
