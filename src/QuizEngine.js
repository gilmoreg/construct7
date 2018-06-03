import Challenge from './Challenge';

const TICKMS = 50;

export default class QuizEngine {
  challenge;
  currentHp;
  msRemaining;
  interval;
  tickCb;
  endChallengeCb;

  constructor(tickCb, endChallengeCb) {
    this.tickCb = tickCb;
    this.endChallengeCb = endChallengeCb;
  }

  startChallenge() {
    this.challenge = new Challenge();
    this.currentHp = this.challenge.startingHp;
    console.log('init hp', this.challenge.startingHp, this.currentHp); // eslint-disable-line
    this.msRemaining = 10000;
    this.interval = setInterval(() => this.tick(), TICKMS);
  }

  endChallenge() {
    clearInterval(this.interval);
    const values = [1,2,3,4].map(num => this.challenge.startingHp + num);
    const answers = this.challenge.getAnswers(values);
    this.endChallengeCb(answers);
  }

  getStartingHp() {
    return this.challenge.startingHp;
  }

  getCurrentHp() {
    return this.currentHp;
  }

  setCurrentHp(value) {
    this.currentHp = this.challenge.startingHp + value;
    console.log('setting hp', this.challenge.startingHp, value, this.currentHp); // eslint-disable-line
  }

  getMessage() {
    return this.challenge.message;
  }

  tick() {
    this.msRemaining -= TICKMS;
    this.tickCb(Math.max(0, this.msRemaining));
    if (this.msRemaining <= 0) {
      this.endChallenge();
      return;
    }
  }
}
