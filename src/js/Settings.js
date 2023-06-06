export default class Settings {
  defaultSettings = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);

  userSettings = new Map([
    ['theme', 'gray'],
    ['music', 'off'],
    ['difficulty', 'nightmare'],
  ]);

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
