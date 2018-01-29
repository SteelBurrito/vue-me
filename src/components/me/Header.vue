<template>
    <div class='menu-container blue-gradient'>
        <div class="page-heading">
            <transition name="slide-fade">
                <h1 v-if="show">bloggo.club</h1>
            </transition>
            <p>Personal webpage managed by Antonio Kevin Christophorus</p>
        </div>
        <nav>
            <ul>
                <router-link to="/about-me" tag="li">About Me</router-link>
                <li id="show-modal" @click="showModal=true">Let's Talk</li>
            </ul>
        </nav>
        <transition name="modal">
            <ContactMe v-if="showModal" @close="showModal=false"></ContactMe>
        </transition>
    </div>
</template>

<script>
import ContactMe from '@/components/me/ContactMe'
import { EventBus } from '../../store/event-bus'
export default {
  data() {
    return {
      show: false,
      showModal: false,
    };
  },
  components:{
      'ContactMe': ContactMe,
  },
//   beforeMount(){
//       this.ContactMe.show = false;
//   },
  mounted() {
    this.show = true;
  },
  methods:{
    //   showModal() {
    //       this.isContactMeVisible = true;
    //   },
    //   closeModal() {
    //       this.isContactMeVisible = false;
    //   },
  },
};
</script>
