<template>
  <div class="mkc-radio">
    <div class="mkc-radio-ball"></div>
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.mkc-radio label {
  position: relative;
}
.mkc-radio label::before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: -22px;
  top: 4px;
  border: 1px solid black;
  border-radius: 50%;
}
</style>