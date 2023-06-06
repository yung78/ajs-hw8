import Team from '../js/Team.js';

test('ERROR personage in the team', () => {
  const dreamTeam = new Team();
  expect(() => {
    dreamTeam.add('pers1');
    dreamTeam.add('pers2');
    dreamTeam.add('pers1');
  }).toThrow(new Error('The personage is already in the team'));
});

test('Add personage in team', () => {
  const expected = new Set(['pers1', 'pers2', 'pers3']);
  const dreamTeam = new Team();
  dreamTeam.add('pers1');
  dreamTeam.add('pers2');
  dreamTeam.add('pers3');

  expect(dreamTeam.members).toEqual(expected);
});

test('test addAll', () => {
  const expected = new Set(['pers1', 'pers2', 'pers3']);
  const dreamTeam = new Team();
  dreamTeam.addAll('pers1', 'pers2', 'pers3', 'pers1');

  expect(dreamTeam.members).toEqual(expected);
});

test('test toArray', () => {
  const expected = ['pers1', 'pers2', 'pers3'];
  const dreamTeam = new Team();
  dreamTeam.addAll('pers1', 'pers2', 'pers3', 'pers1');

  expect(dreamTeam.toArray()).toEqual(expected);
});
