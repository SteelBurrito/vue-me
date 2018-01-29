<template>
  <div id="modal-template">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h1>Send me a friendly hello 😉</h1>
          </div>

          <div class="modal-body">
            <ul>
              <li><i class="fas fa-envelope"></i> antouniokevin@gmail.com</li>
              <li><a href="https://www.linkedin.com/in/antonio-kevin-972512145/"><i class="fab fa-linkedin"></i> LinkedIn Page</a></li>
              <li><a href="https://github.com/SteelBurrito"><i class="fab fa-github"></i> GitHub Page</a></li>
            </ul>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="button modal-default-button" @click="$emit('close')">
                Close Window
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../store/event-bus";
export default {
  name: "modal",

  methods: {
    close() {
      EventBus.$emit("close");
    }
  }
};
</script>


