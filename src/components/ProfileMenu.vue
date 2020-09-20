<template>
    <section class="relative">
        <button @click="isOpen = !isOpen" 
        class="relative rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-unidarkblue"
        :class="whdiv"
        >
            <img class="h-full w-full object-cover" src="../assets/images/testipic.png"/>
        </button>
        
        <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>

        <!-- A liitle opacity fade in and out -->
        <transition name="fade">
        <div v-if="isOpen" class="absolute right-0 transition duration-500 ease-in-out mt-2 py-2 w-64 bg-white rounded shadow-xl text-md">
            <ul>
                <li class="block px-4 py-4 text-gray-800 hover:bg-blue-700 hover:text-white">
                    <a href="#" class="flex justify-start">
                        <i class="fa fa-user mr-3 mt-1 "></i> Profile
                    </a>
                </li>
                <li class="block px-4 py-4 text-gray-800 hover:bg-blue-700 hover:text-white">
                    <a href="#" class="flex justify-start">
                        <i class="fa fa-key mr-3 mt-1 "></i>Change Password
                    </a>
                </li>
                <li class="block px-4 py-4 text-gray-800 hover:bg-blue-700 hover:text-white border-b">
                    <a href="#" class="flex justify-start">
                        <i class="fa fa-bell mr-3 mt-1 "></i>Notifications
                    </a>
                </li>
                <li class="block px-4 py-4 text-gray-800 hover:bg-blue-700 hover:text-white">
                    <a href="#" class="flex justify-start">
                        <i class="fa fa-sign-out-alt mr-3 mt-1"></i>Log Out
                    </a>
                </li>
            </ul>
        </div>
        </transition>
    </section>
</template>

<script>
export default {
    name: "ProfileMenu",
    data() {
        return {
            isOpen: false,
        }
    },
    props: {
        whdiv: String,
    },
    created(){
        const handleEscape = (e) => {
            if (e.key === 'Esc' || e.key == "Escape") {
                this.isOpen = false;
            }
        }

        document.addEventListener('keydown', handleEscape);

        this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape);
        })
    }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>