<h1 align="center">
    Quotes Generator
</h1>

<br>

<p align="center">
  <b>A simple web application for generating inspirational quotes provided by <a href="https://zenquotes.io/">ZenQuotes API</a> built with
  </b>
  <br>
</p>

<p align="center">
<a href="https://kit.svelte.dev">
<img width="130px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1663804918/yassi/mxrjfvymnux04jhjwlh2.svg" align="center" alt="svelte" />
</a>

</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1666455819/yassi/sd0xotvhijcbjrfcijwf.png" alt="yt" width="600px" style="border-radius: 5px;">

</p>

<br>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Usage

**_I start learning the most beloved framework [Sveltekit](https://kit.svelte.dev) and that's what i'm using in the frontend_**

#### API

You can make a `GET` request to [https://quotes-generator-plum.vercel.app/api/generate](https://quotes-generator-plum.vercel.app/api/generate), to get a random quote in `json` format

```bash
curl --request GET \
  --url 'https://quotes-generator-plum.vercel.app/api/generate'
```

Example response

```json
[
    {
        "q": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "a": "Ralph Waldo Emerson",
        "h": "<blockquote>&ldquo;To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>",
    }
]
```

### Development

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev
# or start and open the app in a new browser tab
npm run dev -- --open
```

### Production

```sh
npm run build
```

> You can preview the built client app with `npm run preview`,This should _not_ be used to serve your app in production.

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and features requests, [please create an issue](../../issues/new).

#### Author

**Ysn4Irix**

- [GitHub Profile](https://github.com/Ysn4irix)
- [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
