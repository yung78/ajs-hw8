import ErrorRepository from '../js/ErrorRepository.js';

test('test unknown code', () => {
  const error = new ErrorRepository();

  expect(error.translate(26)).toBe('Unknown error');
});

test('test code error', () => {
  const error = new ErrorRepository();

  expect(error.translate(2)).toBe('Unexpected "type" of character');
});
