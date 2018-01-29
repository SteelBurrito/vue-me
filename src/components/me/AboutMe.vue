<template>
    <transition name="slide-fade">
      <div class='header' v-if="show">
        <h2>Greetings 🖐</h2>
        <div class='picture'>
            <img src="/static/biggie2.png"/>
        </div>
        <p>I am a web developer that specializes in offering creative solutions to solve various business problems. I am comfortable in writing and communicating with back-end web systems (Databases, Web APIs). Currently, I am spending most of my time honing my front-end skills exploring the further fundamentals of Javascript and its various frameworks. This site itself is built with Vue.js.</p>
        <div class='skills'>
          <div class='frontend'>
            <p>FRONT-END SKILLSET</p>
            <ul>  
              <li>Vue.js</li>
              <li>Javascript</li>
              <li>CSS 3</li>
            </ul>
          </div>
          <div class='backend'>
            <p>BACK-END SKILLSET</p>
            <ul>
              <li>PHP</li>
              <li>C#</li>
              <li>MySQL/SQLServer</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import HomeNav from '@/components/navButtons/HomeNav'
export default {
  data() {
    return {
      show: false,
    };
  },
  components:{
    'HomeNav': HomeNav,
  },
  mounted() {
    this.show = true;
  },
};
</script>
