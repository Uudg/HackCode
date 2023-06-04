<template>
  <v-container>
    <v-row>
      <h5>TTS Module</h5>
    </v-row>

    <v-row>
      <input ref="textRef" type="text" />
      <button @click="speak">Speak</button>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      voices: [],
    };
  },
  methods: {
    loadVoices() {
      this.voices = window.speechSynthesis.getVoices();
    },
    speak() {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.$refs.textRef.value;

      msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Google UK English Male"; })[0];

      window.speechSynthesis.speak(msg);
    },
  },
  mounted() {
    this.loadVoices();
    window.speechSynthesis.onvoiceschanged = function () {
      this.loadVoices();
    };
  },
};
</script>
<style>
</style>
