<!--
*** Thanks for checking out the Expert Fitness App. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU General Public License v3.0][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/apsistec/expert-fit">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Expert Fitness App</h3>

  <p align="center">
    The fitness app that becomes your trainer.
    <br />
    <a href="https://github.com/apsistec/expert-fit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/apsistec/expert-fit">View Demo</a>
    ·
    <a href="https://github.com/apsistec/expert-fit/issues">Report Bug</a>
    ·
    <a href="https://github.com/apsistec/expert-fit/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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

[![Expert Fitness App Screen Shot][product-screenshot]](/assets/images/screenshot.png)

There are many great fitness apps available on GitHub, however, I didn't find one that really suit my client's needs so I created this enhanced one. I want to create a fitness app so amazing that it'll be the last one my client ever needs -- I think this is it.

Here's why:
* Time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be using a plain website now that progressive web apps have entered the market
* You should element DRY principles to the rest of your life :smile:

Of course, this is a continued work in progress. I will constantly add to this project any updates and additional features that are relevant to the industry and/or to progressive web apps in general.

You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

The major frameworks I used to build the project. Add-ons/plugins are listed in the acknowledgements section.
* [Ionic](https://ionicframework.com)
* [Angular](https://angular.io)
* [Angular Material](https://material.angular.io)
* [Firebase](https://firebase.com)
* [Stripe](https://stripe.com)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  npm install @angular/cli@latest -g
  npm install @ionic/cli@latest -g
  npm install firebase-tools@latest -g
  ```

### Installation

1. Get a free Stripe API Key at [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Get a free Stripe Tax Rates API Key at [https://dashboard.stripe.com/tax-rates](https://dashboard.stripe.com/tax-rates)
3. Get a free Firebase API Key at [https://firebase.com](https://firebase.com)
4. Get a free MailStart API Key at [https://mailstart.com](https://mailstart.com)
5. Clone the repo
   ```sh
   git clone https://github.com/apsistec/expert-fit.git
   ```
6. Install NPM packages
   ```sh
   npm install

   firebase init

   cd functions

   npm install

   ng build

   cd ..

   ionic build --prod

   ionic serve 
   ```
   
   or 

   ```sh
   firebase deploy
   ```
7. Enter your APIs in `environments/environment.ts` and `environments/environment.prod.ts`
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
    }
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
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Ion Icons](https://ionicons.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
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
[product-screenshot]: /assets/images/screenshot.png
