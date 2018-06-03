const problems = {
  prime: {
    answers: [2, 3, 5, 7, 11, 13, 17, 19],
    message: 'PRIMES',
    cast: 'Indivisible'
  },
  two: {
    answers: [2, 4, 6, 8, 10, 12, 14, 16],
    message: 'MULTIPLES OF 2',
    cast: 'Divide by Two'
  },
  three: {
    answers: [3, 6, 9, 12, 15],
    message: 'MULTIPLES OF 3',
    cast: 'Divide by Three'
  },
  four: {
    answers: [4, 8, 12, 16],
    message: 'MULTIPLES OF 4',
    cast: 'Divide by Four'
  },
  five: {
    answers: [5, 10, 15],
    message: 'MULTIPLES OF 5',
    cast: 'Divide by Five'
  }
}

// Get a random number between min (inclusive) and max (exclusive)
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default class Challenge {
  answers;
  message;
  cast;
  startingHp;

  constructor() {
    const problem = Object.values(problems)[getRandomIndex(0, 5)];
    this.answers = problem.answers;
    this.message = problem.message;
    this.cast = problem.cast;
    const targetHp = this.answers[getRandomIndex(0, this.answers.length)];
    
    // Guarantee that our problem will have a solution by subtracting 1..4 from it
    // Therefore at least one button will be a solution
    // HP of 1 will always have a solution so set that as a minimum
    this.startingHp = Math.max(1, targetHp - getRandomIndex(1, 5));
    console.log('challenge init hp', this.startingHp, 'targetHp', targetHp); // eslint-disable-line
  }

  getAnswers(values) {
    return values.map(value =>
      this.answers.includes(value) ? 'correct' : 'incorrect');
  }


  /*
  So what do we need and where should it go?

  Need some sort of timer:
    Idea there was create a setInterval that would keep track of a msRemaining and fire a callback on changes
    so that a progress bar can update for cast

    Maybe a 2nd callback for completed
    And the idea was that this would go inside a QuizEngine, not here
  
  Need to keep track of which state we're in:
    String based, either auto-advancing or set manually (or both)
    DONE button (or timer) puts us in answer mode
    NEXT button (or timer) puts us in challenge mode
    Help mode might just be a modal open by default, maybe localstorage to store pref

  A lot of this seems heavily tied to this component's state as well, but
  want to keep code out of components as much as possible

  So now I'm thinking startingHp and currentHp belong on the QuizEngine (or Challenge?) and not the component
  The goal of the QuizEngine is to input those HP values and output an array of answers

  */
}
