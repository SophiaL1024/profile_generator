const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  profile.name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile.activity = answer;
    rl.question('What do you listen to while doing that?', (answer) => {
      profile.listen = answer;
      rl.question('Which meal is your favourite?', (answer) => {
        profile.meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          profile.favouriteToEat = answer;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.superPower = answer;
              console.log(`My name is ${profile.name}. I like doing ${profile.activity}, while liestening to ${profile.listen}. My favourite meal is ${profile.meal}, and I like to eat ${profile.favouriteToEat} for that meal.My abosolute favourite sports is ${profile.sport}. My super power is ${profile.superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});