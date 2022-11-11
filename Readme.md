# Nuxt 3 starter pack

<p align="center">
  <img src="https://i.stack.imgur.com/S1QYn.png" alt="Logo" />
</p>
<p align="center">
    Configured Nuxt 3 with necessary packages to quickly start a new project.
</p>

## Build Setup

```bash
# install dependencies
$ pnpm install --shamefully-hoist

# serve with hot reload at localhost:3000
$ pnpm run dev

# build for production and launch server
$ pnpm run build
$ pnpm run start

# generate static project
$ pnpm run generate
```

For detailed explanation on how things work, check out [Nuxt 3 docs](https://v3.nuxtjs.org/).

-----

## Docker

If you woul like to use docker? you should configure it in `docker-compose.yml` and `.env`

* Change ports in `docker-compose.yml` if necessary
* Copy `.env.example` to `.env` and change variable
