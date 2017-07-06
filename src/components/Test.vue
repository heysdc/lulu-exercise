<template>
  <div>222
    <Slider v-model="value" range></Slider>
  </div>
</template>
<script>

export default {
  name: 'app',
  data: function () {
    return {
      value: [20, 50]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
