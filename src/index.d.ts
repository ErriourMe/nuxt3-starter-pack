interface IEventBus {
  $emit<Key extends keyof Events>(
    type: undefined extends Events[Key] ? Key : never
  ): void
  $on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void
}

declare module '#app' {
  interface NuxtApp {
    $bus: IEventBus
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bus: IEventBus
  }
}
export {}
