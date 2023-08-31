const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name: "What's your name? Nicknames are also acceptable :)",
  activity: "What's an activity you like doing?",
  music: "What do you listen to while doing that?",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  food: "What's your favourite thing to eat for that meal?",
  sport: "Which sport is your absolute favourite?",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const profile = {};

const askQuestion = (questionKey) => {
  rl.question(questions[questionKey] + " ", (answer) =>{
    profile[questionKey] = answer;

    const nextQuestionKey = Object.keys(questions)[Object.keys(questions).indexOf(questionKey) + 1];
    if (nextQuestionKey) {
      askQuestion(nextQuestionKey);
    } else {
      generateProfile();
      rl.close();
    }
  });
};

const generateProfile = () => {
  console.log("\nHere's your profile description:\n");
  console.log(
    `${profile.name} loves ${profile.activity}, devouring ${profile.food} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superpower}.`
  );
};

askQuestion(Object.keys(questions)[0]);

