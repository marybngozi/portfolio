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
  }
}
</script>
