<template>
    <div class='menu-container blue-gradient'>
        <div class="page-heading">
            <h1>bloggo.club</h1>
            <p>Personal webpage managed by Antonio Kevin Christophorus</p>
        </div>
        <nav>
            <ul>
                <router-link to="/about-me" tag="li">About Me</router-link>
                <li>What I Do</li>
                <li>Contact Me</li>
            </ul>
        </nav>
    </div>
    <!-- <component v-bind:is="renderDescription"></component> -->
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
