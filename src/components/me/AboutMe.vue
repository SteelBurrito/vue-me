<template>
    <transition name="slide-fade">
      <div class='header' v-if="show">
        <div>
          <router-link :to="{ path: '/'}">HOME</router-link>
        </div> 
        <h2>Greetings 🖐</h2>
        <div class='picture'>
            <img src="/static/biggie2.png"/>
        </div>
        <p>I am a web developer that specializes in 
            offering creative solutions to solve various business problems. 
            I am comfortable in writing and communicating 
            with back-end web systems (Databases, Web APIs).</p>
        <p>As a developer, I write maintainable code that 
            conforms to industry standards and best practices. 
            Scalability, performance, and usability is my main focus.</p>
        <p>Currently, I am spending most of my time honing 
            my front-end skills exploring the further fundamentals 
            of Javascript and its various frameworks. This site itself
            is built with Vue.js.</p>
        <div class='skills'>
          <div class='frontend'>
            <ul>
              <li>HEY</li>
              <li>YOU</li>
              <li>WHAT ARE YOU GOING TO DO</li>
            </ul>
          </div>
          <div class='backend'>
            <ul>
              <li>PARTY PEOPLE</li>
              <li>IN THE HOUSE</li>
              <li>LETS GO</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>
