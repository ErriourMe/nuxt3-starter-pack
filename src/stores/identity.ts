import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Ivan',
    lastName: 'Ivanov',
  }),
  actions: {
    setFirstName(firstName: string): void {
      this.firstName = firstName
    },
    setLastName(lastName: string): void {
      this.lastName = lastName
    },
    reset(): void {
      this.firstName = 'Ivan'
      this.lastName = 'Ivanov'
    },
  },
  getters: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
