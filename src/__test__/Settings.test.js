import Settings from '../js/Settings.js';

test('test settings', () => {
  const settings1 = new Settings();
  const userSettings = new Map([
    ['theme', 'gray'],
    ['music', 'off'],
    ['difficulty', 'nightmare'],
  ])

  expect(settings1.settings).toEqual(userSettings);
});
