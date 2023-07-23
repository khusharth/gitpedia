export default class GhPolyglot {
  constructor() {
    // console.log('GhPolyglot: constructor was called');
  }

  userStats(func) {
    func('', defaultStats);
  }
}

const defaultStats = [
  {
    label: 'JavaScript',
    value: 19,
    color: '#f1e05a'
  },
  {
    label: 'TypeScript',
    value: 9,
    color: '#3178c6'
  },
  {
    label: 'Python',
    value: 3,
    color: '#3572A5'
  },
  {
    label: 'Others',
    value: 2,
    color: '#ccc'
  },
  {
    label: 'Dart',
    value: 2,
    color: '#00B4AB'
  },
  {
    label: 'Objective-C',
    value: 1,
    color: '#438eff'
  },
  {
    label: 'Svelte',
    value: 1,
    color: '#ff3e00'
  },
  {
    label: 'MDX',
    value: 1,
    color: '#fcb32c'
  }
];
