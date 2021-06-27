export const Services = [
  {
    id: 'prod_J79A6KYyCYieid',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfS3ZWQURRVU1tZkFZTklpVU96YTRzMEhr00Qf9IGThH',
    description:
      '1-on-1 training with a personal trainer. Packages include up to 4 sessions per month, offered in a variety of payment plans to best fit your needs. Additional sessions can be added individually as add-ons at a discounted rate of $65 per session.',
    name: '1-on-1 Training Membership',
    prices: [
      {
        id: 'price_1IUusTKgDdcItEX8H274RqZA',
        interval: 'month',
        type: 'recurring',
        unit_amount: '30000'
      },
      {
        id: 'price_1IUusTKgDdcItEX8Oxq1rlmc',
        interval: 'year',
        type: 'recurring',
        unit_amount: '360000'
      },
      {
        id: 'price_1IUusUKgDdcItEX812Kg0ect',
        interval: 'week',
        type: 'recurring',
        unit_amount: '6923'
      }
    ]
  },
  {
    id: 'prod_J79aXbQVflC9iO',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfcGVlN2o1WmlFN3RWOXo1OUhxRElNbkk500VGxWjUPJ',
    description: 'Add-on individual sessions to your membership. Only available for existing members. ',
    name: 'Add-on Session',
    prices: [
      {
        id: 'price_1IUvHnKgDdcItEX8RWoc5oY8',
        interval: '',
        type: 'one_time',
        unit_amount: '6500'
      }
    ]
  },
  {
    id: 'prod_J79lHt41BLbaRx',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfTVBQODQ3WFBmclFiZVlnWjE2MkNNcmpL00VqgQHO0h',
    description:
      'An 1-on-1 session with a personal trainer. (Note: if you are an existing member, you want to purchase an add-on session instead.)',
    name: 'Single 1-on-1 Session',
    prices: [
      {
        id: 'price_1IUvRzKgDdcItEX8QxrCwiVP',
        interval: '',
        type: 'one_time',
        unit_amount: '7500'
      }
    ]
  }
];

export const Analysis = [
  {
    id: 'prod_J79sQK7T2RwwnJ',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfNUpYTzV0NkQ5MUJzU0VRaVNieTBRTTdw00uAJQkhr7',
    description:
      'Establish your baseline body shape, for establishing your goals and precisely measuring your ongoing success.',
    name: '3D Body Analysis Scan',
    prices: [
      {
        id: 'price_1IUvYmKgDdcItEX8bUx4OjmS',
        interval: '',
        type: 'one_time',
        unit_amount: '5000'
      }
    ]
  }
];

export const Items = [
  {
    id: 'prod_J7A0vDm3w4FDnH',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfUkRaQWQzYXA4bmhMcjRCOWtXdnhOOVdo00p3HG5UkN',
    description: 'A physical therapy foam roller for exercises, stretching and trigger points,',
    name: 'Foam Roll',
    prices: [
      {
        id: 'price_1IUvgNKgDdcItEX8V5NQG1oR',
        interval: '',
        type: 'one_time',
        unit_amount: '3000'
      }
    ]
  },
  {
    id: 'prod_J7A8vvn6HlKvaL',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfdjBYcWVGak1VT1NuU1ljMmpBaFAzNkds00D5vJi4SA',
    description:
      'Helps to relieve muscle soreness and pain. Post activity use enhances and accelerates muscle recovery by dispersing the effects of lactic acid.',
    name: 'Therapeutic MFR Stick',
    prices: [
      {
        id: 'price_1IUvo0KgDdcItEX8dmYnGIl1',
        interval: '',
        type: 'one_time',
        unit_amount: '3500'
      }
    ]
  },
  {
    id: 'prod_J7ABxovCcO3zau',
    images:
      'https://files.stripe.com/links/MDB8YWNjdF8xRUlqN1ZLZ0RkY0l0RVg4fGZsX3Rlc3RfMnJUbVg3VUxSTGdFR3J1ZFpCODJabWpY00gS7uHuJu',
    description: 'A soft mat or yoga mat',
    name: 'Yoga mat',
    prices: [{ id: 'price_1IUvr8KgDdcItEX8OGbRQxdl', interval: '', type: 'one_time', unit_amount: '3000' }]
  }
];
