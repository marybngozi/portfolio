<template>
  <section class="">
    <Header active="contact" class="sticky top-0"/>
    <section class="mt-5 flex xs:flex-col lg:flex-row">
      <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
        <AsideLeft />
      </aside>
      <main class="lg:w-7/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
        <div class="xl:w-4/6 md:w-3/6 xs:w-11/12 xs:mx-auto xs:mb-8">
          <p class="text-gray-400 mt-20 text-center">
            <i class="fa fa-10x fa-phone-alt"></i><br>
            <span>Coming soon...</span>
          </p>
        </div>
      </main>
      <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0 xs:order-last">
        <AsideRight />
      </aside>
    </section>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import AsideLeft from "@/components/AsideLeft.vue"
import AsideRight from "@/components/AsideRight.vue"
import Footer from "@/components/Footer.vue";
export default {
  name: 'Contact',
  components: {
    Header,
    AsideLeft,
    AsideRight,
    Footer
  }
}
</script>