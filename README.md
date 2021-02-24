# 🏋️‍♂️ 🥡 🍎 Expert Fitness App   🍏 ⚖️ 🏋️‍♀️

## The fitness app that becomes your trainer

<br>

Update-Help -UICulture en-USspan

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU General Public License v3.0][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[![logo-full]](http://expert-fitness-midland-tx.web.app "Expert Fitness Landing Page")

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
There are many great fitness apps available on GitHub.
However, I didn&#39;t find one that really suit my client&#39;s needs.
So I created this enhanced one.
I want to create a fitness app so amazing that it&#39;ll be the last one my client
ever needs.
I think this is it.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[Here&#39;s why:](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

* [[Time should be focused on creating something amazing. A project that solves a
  problem and helps others](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
* [[Clients shouldn&#39;t be using a plain website now that progressive web apps have
  entered the market](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
* [[We should implement DRY coding principles to the app code :barbell:](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

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

* [[[Ionic](https://ionicframework.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
* [[[Angular](https://angular.io)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
* [[[Angular Material](https://material.angular.io)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
* [[[Firebase](https://firebase.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
* [[[Stripe](https://stripe.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

### [[Getting Started](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

[[To get a local copy up and running follow these simple example steps.](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

#### [[Prerequisites](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

1. [[Install](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

   [[[NodeJS](https://www.nodejs.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
2. [[Using npm, install:](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

   ```shnpm install npm@latest -global
   npm install @angular/cli@latest -global

   npm install @ionic/cli@latest -global

   npm install firebase-tools@latest -global
   ````
##### [[Acquire APIs](#acknowledgements)1. [Get a free Stripe API Key at [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)2. [[Get a free Stripe Tax Rates API Key at [https://dashboard.stripe.com/tax-rates](https://dashboard.stripe.com/tax-rates)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
3. [[Get a free Firebase API Key at [https://firebase.com](https://firebase.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)
4. [[Get a free MailStart API Key at [https://mailstart.com](https://mailstart.com)](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)


#### [[Installation](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

1. [[Clone the repo](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

   ```shgit clone https://github.com/apsistec/expert-fit.git
   ```2. [[Install NPM packages](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

      ```shnpm install
      ```3. [[Setup Firebase backend](#acknowledgements)](https://github.com/apsistec/expert-fit/issues)

         ```shfirebase init
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

               ```shcd functions
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
                     [logo-full]: src/assets/lazy/logos/logo.png
