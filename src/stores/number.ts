import { defineStore } from 'pinia'

export const useNumberStore = defineStore('number', {
  state: () => {
    return {
      phoneNumber: 'not able to be reformatted.',
      href: '',
    }
  },
  actions: {
    updatePhoneNumber(phoneNumber: string) {
      this.phoneNumber = phoneNumber;
    }
  }
})
