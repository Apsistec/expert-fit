<h1 align="center"> 🏋️‍♂️ 🥡 🍎 Xpert Fitness App   🍏 ⚖️ 🏋️‍♀️</h1>
<!-- PROJECT LOGO -->
<p align="center"> The fitness app that becomes your trainer.  :muscle: </p>

[![Xpert Fitness Logo]][logo]

[Xpert Fitness](https://github.com/apsistec/expert-fit)

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU General Public License v3.0][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[Explore the docs](https://github.com/apsistec/expert-fit")

[View Demo](https://github.com/apsistec/expert-fit)

[Report Bug](https://github.com/apsistec/expert-fit/issues)

[Request Feature](https://github.com/apsistec/expert-fit/issues)

---

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![product-screenshot][product screenshot]][screenshot]

The goal has been simple, to develop a fitness app capable of guiding users
effeciently to help them reach their peak fitness goals and then help
them maintain. THe app needs to be easy to access, easy to use, and is an
interesting tool that is rewarding to use. The app is a tool in the
toolbox capable of providing users with realtime reports and has
numerous novel views about their current progress and how it relates to
others. The app provides access to dashboards and reports from
personally attained data on the user's own smart devices and comparing
that to available fitness related datasets. The app provides access to
the latest proven and well documented information on techniques and
diets that are safe and effective. The app also providees access to many
of the latest safe and effective fitness products available in the
market. Using the app is rewarding and more effective at helping users
reach their personal goals and then maintaining them.

Here's why:

- Time should be focused on creating something amazing. A project that solves a
  problem and helps others
- Clients shouldn't be using a plain website now that progressive web apps have
  entered the market
- We should implement DRY coding principles to the app code

Of course, this is a continued work in progress. I will constantly add to this
project any updates and additional features that are relevant to the industry
and/or to progressive web apps in general. You may also suggest changes by
forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

Thanks to all the people have have contributed to expanding
this template!

### Built With

The major frameworks I used to build the project. Add-ons/plugins are listed in
the acknowledgements section.

- [Ionic](https://ionicframework.com)
- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Firebase](https://firebase.com)
- [Stripe](https://stripe.com)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Install
   [NodeJS](https://www.nodejs.com)

2. Using npm, install:

   ```sh
   npm install npm@latest -global
   ```

   ```sh
   npm install @angular/cli@latest -global
   ```

   ```sh
   npm install @ionic/cli@latest -global
   ```

   ```sh
   npm install firebase-tools@latest -global
   ```

### Acquire APIs

1. Get a free Stripe API Key at [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Get a free Stripe Tax Rates API Key at [https://dashboard.stripe.com/tax-rates](https://dashboard.stripe.com/tax-rates)
3. Get a free Firebase API Key at [https://firebase.com](https://firebase.com)
4. Get a free MailStart API Key at [https://mailstart.com](https://mailstart.com)

## Installation

<details open>
<summary>Installation Steps:</summary>
<ol>
<li>Clone the repo

```sh
git clone https://github.com/apsistec/expert-fit.git
```

   </li>
   <li> Install NPM packages

```sh
npm install
```

</li>

<li>Setup Firebase backend

```sh
firebase init
```

<li>Enter your APIs in `environments/environment.ts` and `environments/environment.prod.ts`

```js
export const environment = {
  production: 'boolean',
  firebaseConfig: {
    apiKey: '...',
    authDomain: '...',
    databaseURL: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...',
    measurementId: '...'
  },
  stripePubKey: 'pk_test_ API',
  taxRates: ['enter API']
};
```

<li>Compile the function code

```sh
cd functions
```

```sh
npm install
```

```sh
ng build
```

```sh
cd ..
```

 </li>

<li>Compile the app code -production quality

```sh
ionic build --prod
```

   </li>

<li>Work on the app code with hot-reload

```sh
ionic serve
```

   </li>

<li>Deploy to Firebase Authentication, Hosting, Database, Serverless and Storage

```sh
firebase deploy
```

   </li>

</ol>
</details>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional
 screenshots, code examples and demos work well in this space. You may also link
  to more resources.

_For more examples, please refer to the [Documentation][project]_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/apsistec/expert-fit/issues) for a list
 of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to
 be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

<details open>
<summary>
Doug White
</summary>
<ul>
<li>Email:<a href="doug@apsistec.app"> :email:</a></li>
<li>Twitter: <a href="https://twitter.com/apsistec)">@apsistec</a></li>
<li>This project: <a href="https://github.com/apsistec/expert-fit">expert-fit</a></li>
<li>Github projects: <a href="https://github.com/apsistec">Apsistec</a></li>
</ul>
</details>

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Ion Icons](https://ionicons.com)

---

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/apsistec/expert-fit.svg?style=for-the-badge
[contributors-url]: https://github.com/apsistec/expert-fit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/apsistec/expert-fit.svg?style=for-the-badge
[forks-url]: https://github.com/apsistec/expert-fit/network/members
[stars-shield]: https://img.shields.io/github/stars/apsistec/expert-fit.svg?style=for-the-badge
[stars-url]: https://github.com/apsistec/expert-fit/stargazers
[issues-shield]: https://img.shields.io/github/issues/apsistec/expert-fit.svg?style=for-the-badge
[issues-url]: https://github.com/apsistec/expert-fit/issues
[license-shield]: https://img.shields.io/github/license/apsistec/expert-fit.svg?style=for-the-badge
[license-url]: https://github.com/apsistec/expert-fit/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/apsistec
[product-screenshot]: src/assets/images/screenshot.png
[logo]: https://github.com/apsistec/expert-fit/src/assets/logos/logo.png
[screenshot]: https://xfitness.studio-midland-tx.web.app
[project]: https://github.com/apsistec/expert-fit
