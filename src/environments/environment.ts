// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: 'AIzaSyBp8ssZ4LEJqzdRYMbK9rvh66_za4iujdM',
      authDomain: 'expert-fitness-midland-tx.firebaseapp.com',
      databaseURL: 'https://expert-fitness-midland-tx.firebaseio.com',
      projectId: 'expert-fitness-midland-tx',
      storageBucket: 'expert-fitness-midland-tx.appspot.com',
      messagingSenderId: '179991880670',
      appId: '1:179991880670:web:a1394671023dc13052f34f',
      measurementId: 'G-RSCR13VTT9'
    },
  // Replace with your publishable key
  // https://dashboard.stripe.com/apikeys
   stripePubKey: 'pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA',

  // Replace with your tax ids
  // https://dashboard.stripe.com/tax-rates
  taxRates: ['txr_1HCshzHYgolSBA35WkPjzOOi']
  };

  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
