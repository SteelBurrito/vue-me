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
                <!-- <li @click="showModal">Let's Talk</li> -->
            </ul>
        </nav>
        <ContactMe v-show="isContactMeVisible" @close="closeModal"/>
    </div>
</template>

<script>
import ContactMe from "@/components/me/ContactMe";
import { EventBus } from "../../store/event-bus";
export default {
  data() {
    return {
      show: false,
      isContactMeVisible: false
    };
  },
  components: {
    ContactMe: ContactMe
  },
  //   beforeMount(){
  //       this.ContactMe.show = false;
  //   },
  mounted() {
    this.show = true;
  },
  methods: {
    showModal() {
      this.isContactMeVisible = true;
    },
    closeModal() {
      this.isContactMeVisible = false;
    }
  }
};
</script>
