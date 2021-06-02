<h1 align="center"> 🏋️‍♂️ 🥡 🍎 Expert Fitness App   🍏 ⚖️ 🏋️‍♀️</h1>
<!-- PROJECT LOGO -->
<p align="center"> The fitness app that becomes your trainer.  :muscle: </p>

[![Expert Fitness Logo]][logo]

[Expert Fitness](https://github.com/apsistec/expert-fit)

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

---

<!-- ABOUT THE PROJECT -->

## About The Project

[![product-screenshot][product screenshot]][screenshot]

There are many great fitness apps available on GitHub.
However, I didn't find one that really suit my client's needs.
So I created this enhanced one.
I want to create a fitness app so amazing that it'll be the last one my client
ever needs.
I think this is it.

Here's why:

- Time should be focused on creating something amazing. A project that solves a
  problem and helps others
- Clients shouldn't be using a plain website now that progressive web apps have
  entered the market
- We should implement DRY coding principles to the app code :barbell:

Of course, this is a continued work in progress. I will constantly add to this
project any updates and additional features that are relevant to the industry
and/or to progressive web apps in general.

You may also suggest changes by forking this repo and creating a pull request or
opening an issue. Thanks to all the people have have contributed to expanding
this template!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

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

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/apsistec/expert-fit.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Setup Firebase backend

   ```sh
   firebase init
   ```

4. Enter your APIs in `environments/environment.ts` and `environments/environment.prod.ts`

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

5. Compile the function code

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

6. Compile the app code -production quality

   ```sh
   ionic build --prod
   ```

7. Work on the app code with hot-reload

   ```sh
   ionic serve
   ```

8. Deploy to Firebase Authentication, Hosting, Database, Serverless and Storage

   ```sh
   firebase deploy
   ```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/apsistec/expert-fit/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

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

Doug White - [@apsistec](https://twitter.com/apsistec) - doug@apsistec.app

Project Link: [https://github.com/apsistec/expert-fit](https://github.com/apsistec/expert-fit)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Ion Icons](https://ionicons.com)

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
[screenshot]: http://expert-fitness-midland-tx.web.app

# 🏋️‍♂️ 🥡 🍎 Expert Fitness App 🍏 ⚖️ 🏋️‍♀️

## The fitness app that becomes your trainer

<br>

Update-Help -UICulture en-USspan

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU General Public License v3.0][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[![logo-full]](http://expert-fitness-midland-tx.web.app 'Expert Fitness Landing Page')

<!-- PROJECT Screenshot -->

<p align="center">
<a href="https://github.com/apsistec/expert-fit">
<strong>
Explore the docs »
</strong>
<br />
<a href="https://github.com/apsistec/expert-fit">View Demo
·
<a href="https://github.com/apsistec/expert-fit/issues">Report Bug
·
<a href="https://github.com/apsistec/expert-fit/issues">Request Feature

---

---

### [[About The Project](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[[![product-screenshot]](http://expert-fitness-midland-tx.web.app "Expert Fitness
Landing Page")

There are many great fitness apps available on GitHub. However, I could not find an app that truly embraced the reporting features capable with javascript libraries.
The goal has been simple, to develop a fitness app capable of guiding users effeciently to help them reach their peak fitness goals and then help them maintain. THe app needs to be easy to access, easy to use, and is an interesting tool that is rewarding to use. The app is a tool in the toolbox capable of providing users with realtime reports and has numerous novel views about their current progress and how it relates to others. The app provides access to dashboards and reports from personally attained data on the user's own smart devices and comparing that to available fitness related datasets. The app provides access to the latest proven and well documented information on techniques and diets that are safe and effective. The app also providees access to many of the latest safe and effective fitness products available in the market. Using the app is rewarding and more effective at helping users reach their personal goals and then maintaining them.

[[I think this is it.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[Here&#39;s why:](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

- [[Time should be focused on creating something amazing. A project that solves a
  problem and helps others](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
- [[Clients shouldn&#39;t be using a plain website now that progressive web apps have
  entered the market](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
- [[We should implement DRY coding principles to the app code :barbell:](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[Of course, this is a continued work in progress. I will constantly add to this
project any updates and additional features that are relevant to the industry
and/or to progressive web apps in general.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[You may also suggest changes by forking this repo and creating a pull request or
opening an issue. Thanks to all the people have have contributed to expanding
this template!](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[A list of commonly used resources that I find helpful are listed in the acknowledgements.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

#### [[Built With](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[The major frameworks I used to build the project. Add-ons/plugins are listed in
the acknowledgements section.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

- [[[Ionic](https://ionicframework.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
- [[[Angular](https://angular.io)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
- [[[Angular Material](https://material.angular.io)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
- [[[Firebase](https://firebase.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
- [[[Stripe](https://stripe.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

### [[Getting Started](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[To get a local copy up and running follow these simple example steps.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

#### [[Prerequisites](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

1. [[Install](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

   [[[NodeJS](https://www.nodejs.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

2. [[Using npm, install:](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

   ```shnpm
   install npm@latest -global
   npm install @angular/cli@latest -global

   npm install @ionic/cli@latest -global

   npm install firebase-tools@latest -global
   ```

##### [[Acquire APIs](#acknowledgements)

1. [Get a free Stripe API Key at [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

2. [[Get a free Stripe Tax Rates API Key at [https://dashboard.stripe.com/tax-rates](https://dashboard.stripe.com/tax-rates)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

3. [[Get a free Firebase API Key at [https://firebase.com](https://firebase.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

4. [[Get a free MailStart API Key at [https://mailstart.com](https://mailstart.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

#### [[Installation](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

1. [[Clone the repo](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

   ````sh git clone https://github.com/apsistec/expert-fit.git
   ```2. [[Install NPM packages](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

      ```shnpm install
      ```3. [[Setup Firebase backend](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

         ```sh firebase init
         ```4. [[Enter your APIs in `environments/environment.ts` and `environments/environment.prod.ts`](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

            ```js export const environment = {   production: 'boolean',
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
             }
            ```5. [[Compile the function code](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

               ```sh cd functions
               npm install

               ng build

               cd ..
               ```6. [[Compile the app code -production quality](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                  ```shionic build --prod
                  ```7. [[Work on the app code with hot-reload](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     ```shionic serve
                     ```8. [[Deploy to Firebase Authentication, Hosting, Database, Serverless and Storage](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                        ```shfirebase deploy
                        ```
                     ### [[Usage](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[_For more examples, please refer to the [Documentation](https://example.com)_](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     ### [[Roadmap](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[See the [open issues](https://github.com/apsistec/expert-fit/issues) for a list of proposed features (and known issues).](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     ### [[Contributing](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)


                     1. [[Fork the Project](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     2. [[Create your Feature Branch (`git checkout -b feature/AmazingFeature`)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     3. [[Commit your Changes (`git commit -m 'Add some AmazingFeature'`)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     4. [[Push to the Branch (`git push origin feature/AmazingFeature`)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     5. [[Open a Pull Request](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     ### [[License](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[Distributed under the MIT License. See `LICENSE` for more information.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     ### [[Contact](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[Doug White - [@apsistec](https://twitter.com/apsistec) - doug@apsistec.app](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     [[Project Link: [https://github.com/apsistec/expert-fit](https://github.com/apsistec/expert-fit)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     ### [[Acknowledgements](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

                     * [[[GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     * [[[Img Shields](https://shields.io)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     * [[[Choose an Open Source License](https://choosealicense.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     * [[[GitHub Pages](https://pages.github.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
                     * [[[Ion Icons](https://ionicons.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

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
                     [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&amp;logo=linkedin&amp;colorB=555
                     [linkedin-url]: https://linkedin.com/in/apsistec
                     [product-screenshot]: src/assets/lazy/images/screenshot.png
                     [logo-full]: src/assets/lazy/images/logo.png
   ````
