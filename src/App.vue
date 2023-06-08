<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script lang="ts">
import { useNumberStore } from './stores/number';

const addDashes: Function = (f: string): string => {
  return f.slice(0, 3) + "-" + f.slice(3, 6) + "-" + f.slice(6);
};

export default {
  mounted(): void {
    const store = useNumberStore();
    const params: URLSearchParams = new URLSearchParams(window.location.search);

    if (params.has('phone_number')) {
      const phoneNumberParam: string = params.get('phone_number') ?? "";
      const number = parseInt(phoneNumberParam);
      let convertedNumber = number.toString();

      while (convertedNumber.length > 10) {
        convertedNumber = convertedNumber.slice(1)
      }

      convertedNumber = addDashes(convertedNumber);

      console.log(convertedNumber);
      store.phoneNumber = convertedNumber;
      store.href = `https://ww1.autotask.net/Autotask/AutoTaskExtend/ExecuteCommand.aspx?Code=OpenAccount&Phone=${number}`;
      window.location.href = `https://ww1.autotask.net/Autotask/AutoTaskExtend/ExecuteCommand.aspx?Code=OpenAccount&Phone=${number}`;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
