<template>
  <div>
    <Header active="home" class="sticky top-0"/>
    <Jumbotron />
    <Features />
    <Tour />
    <Testimony />
    <HostelLife />
    <News />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Home/Jumbotron.vue'
import Features from '@/components/Home/Features.vue'
import Tour from '@/components/Home/Tour.vue'
import Testimony from '@/components/Home/Testimony.vue'
import HostelLife from '@/components/Home/HostelLife.vue'
import News from '@/components/Home/News.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Jumbotron,
    Features,
    Tour,
    Testimony,
    HostelLife,
    News,
    Footer
  },
  metaInfo: {
    // Children can override the title.
    title: "Swizel Technologies",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "%s ← Swizel",
    // Define meta tags here.
    meta: [
      { property: "og:site_name", content: "Swizel" },
      { property: "og:title", content: "Swizel" },
      { property: "og:url", content: "https://www.swizel.co" },
      {
        property: "og:image",
        content: "https://swizel.co/img/header-logo.091c72f8.svg"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:description",
        content:
          "Swizel is an IT solution company with primary emphasis on harnessing web techologies to deliver solutions which aim at improving way of life and ease of doing business across all sectors of human life"
      },
      {
        property: "og:keywords",
        content:
          "Website design, Mobile app, Software Development, It support, Data Analysis and Management, Digital Marketing, Networking, Consultancy"
      },
      { itemprop: "name", content: "Swizel" },
      { itemprop: "url", content: "https://swizel.co" },
      {
        itemprop: "description",
        content:
          "Swizel is an IT solution company with primary emphasis on harnessing web techologies to deliver solutions which aim at improving way of life and ease of doing business across all sectors of human life"
      },
      { name: "twitter:title", content: "Swizel" },
      { name: "twitter:url", content: "https://swizel.co" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image:src",
        content: "https://swizel.co/img/header-logo.091c72f8.svg"
      },
      { name: "twitter:site", content: "@swizelhq" },
      { name: "twitter:creator", content: "@swizelhg" },
      {
        name: "twitter:description",
        content:
          "Swizel is an IT solution company with primary emphasis on harnessing web techologies to deliver solutions which aim at improving way of life and ease of doing business across all sectors of human life"
      },
      {
        name: "description",
        content:
          "Swizel is an IT solution company with primary emphasis on harnessing web techologies to deliver solutions which aim at improving way of life and ease of doing business across all sectors of human life"
      }
    ],
    link: [{ rel: "canonical", href: "https://www.swizel.co" }]
  }
}
</script>
