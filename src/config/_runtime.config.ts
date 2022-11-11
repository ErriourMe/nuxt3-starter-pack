interface IRuntimeConfig {
  public: {
    domain: string
    apiDomain: string
  }
}

export const runtimeConfig: IRuntimeConfig = {
  public: {
    domain: '',
    apiDomain: '',
  },
}
