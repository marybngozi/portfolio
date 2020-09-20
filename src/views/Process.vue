<template>
  <section class="">
    <Header active="process" class="sticky top-0"/>
    <section class="mt-5 flex xs:flex-col lg:flex-row">
      <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
        <AsideLeft />
      </aside>
      <main class="lg:w-7/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
        <div class="p-4 shadow-lg divide-y">
          <!-- Book room process -->
          <h1 class="font-light text-center text-unidarkblue text-2xl">How to Book a Space in the University Hostel</h1>
          <ul class="mt-4 text-md text-gray-700 p-4 font-light">
            <li class="tracking-wide py-1"><span>1.</span> <router-link class="font-semibold text-unidarkblue border-b-2 cursor-pointer" to="/signup">Sign up</router-link> with your Student Registration Number</li>
            <li class="tracking-wide py-1"><span>2.</span> <router-link class="font-semibold text-unidarkblue border-b-2 cursor-pointer" to="/signup">Login</router-link> in into your account</li>
            <li class="tracking-wide py-1"><span>3.</span> Go to <router-link class="font-semibold text-unidarkblue border-b-2 cursor-pointer" to="/hostels">Book Space</router-link> and select a Hostel</li>
            <li class="tracking-wide py-1"><span>4.</span> Proceed accordingly to select a Bed Space</li>
            <li class="tracking-wide py-1"><span>5.</span> Make payments using the RRR generated</li>
            <li class="tracking-wide py-1"><span>6.</span> After 24 hours, if payment is not made, the reserved space will be open</li>
          </ul>
        </div>

        <div class="mt-16 p-4 shadow-lg divide-y">
          <!-- Back order process -->
          <h1 class="font-light text-center text-unidarkblue text-2xl">How to Back Order a Space in the University Hostel</h1>
          <ul class="mt-4 text-md text-gray-700 p-4 font-light">
            <li class="tracking-wide py-1"><span>1.</span> <router-link to="/signup" class="font-semibold text-unidarkblue border-b-2 cursor-pointer">Sign up</router-link> with your Student Registration Number</li>
            <li class="tracking-wide py-1"><span>2.</span> <router-link to="/signup" class="font-semibold text-unidarkblue border-b-2 cursor-pointer">Login</router-link> in into your account</li>
            <li class="tracking-wide py-1"><span>3.</span> Go to <router-link to="/hostels" class="font-semibold text-unidarkblue border-b-2 cursor-pointer">Book Space</router-link> and select a Hostel</li>
            <li class="tracking-wide py-1"><span>4.</span> Proceed accordingly to select an occupied bed space that is 15 days to expiry and back order for it</li>
            <li class="tracking-wide py-1"><span>5.</span> Make payments using the RRR generated</li>
            <li class="tracking-wide py-1"><span>6.</span> After 12 hours, if payment is not made, the reserved space will be open</li>
          </ul>
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
import Header from '@/components/Header.vue'
import AsideLeft from "@/components/AsideLeft.vue"
import AsideRight from "@/components/AsideRight.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'Process',
  components: {
    Header,
    AsideLeft,
    AsideRight,
    Footer
  }
}
</script>