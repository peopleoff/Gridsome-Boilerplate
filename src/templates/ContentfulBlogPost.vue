<template>
  <Layout>
    <section class="markdown-body">
      <div class="container p-5 mx-auto lg:px-32">
        <div class="flex flex-col w-full mb-2 text-center">
          <p>
            Written By {{ $page.blog.author.name }} -
          </p>
          <h1 id="blog-title" class="mb-2 text-4xl font-bold">
            {{ $page.blog.title }}
          </h1>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
    query singleBlog($path: String!){
        blog: contentfulBlogPost(path: $path){
            id
            title
            author {
                name
            }
        }
    }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title,
      meta: [
        { name: "keywords", content: "blog" },
      ],
    };
  },
};
</script>