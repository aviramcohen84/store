export const filters = [
  {
    filterBy: 'price',
    filters: [
      {
        id: 1,
        text: '$7-$99',
        higher: 7,
        lower: 99
      },
      {
        id: 2,
        text: '$99-$199',
        higher: 99,
        lower: 199
      },
      {
        id: 3,
        text: '$199-$999',
        higher: 199,
        lower: 1000
      }
    ]
  },
  {
    filterBy: 'rating',
    filters: [
      {
        id: 4,
        text: '1',
        higher: 1,
        lower: 1.9
      },
      {
        id: 5,
        text: '2',
        higher: 2,
        lower: 2.9
      },
      {
        id: 6,
        text: '3',
        higher: 3,
        lower: 3.9
      },
      {
        id: 7,
        text: '4',
        higher: 4,
        lower: 4.9
      },
      {
        id: 8,
        text: '5',
        higher: 5,
        lower: 5
      },
    ]
  }
]