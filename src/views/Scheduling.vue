<template>
  <div class="main">
    <Header class="header" />
    <date-picker v-model="time" lang="en" type="time" format="HH:mm:ss a" placeholder="Select Time">

    </date-picker>
  </div>
</template>

<script>
  // @ts-ignore
    import Header from '@/components/Header.vue'
   // @ts-ignore
    import Button from '@/components/Button.vue'
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    //import Vue from 'vue';

    //DatePicker.install(Vue);
    DatePicker.locale('en'); 

    export default {
        name: "Scheduling",
        components: {
            Header, Button, DatePicker
        },
        data() {
          return {
            date: '',
            time: ''
          }
        }
    }
</script>

<style scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem;
}
.header {
  margin: 8rem 0 6rem;
}
</style>