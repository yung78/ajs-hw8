export default class ErrorRepository {
  errors = new Map([
    [1, 'Unexpected "name": min - 2, max - 10'],
    [2, 'Unexpected "type" of character'],
    [3, 'Can`t level up of dead character'],
    [4, 'The personage is already in the team'],
  ]);

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
