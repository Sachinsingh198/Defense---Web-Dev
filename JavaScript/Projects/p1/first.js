const quotes = [
    "Fill out the Habits Scorecard. Write down your current habits to become aware of them.",
    "Use implementation intentions: “I will [BEHAVIOR] at [TIME] in [LOCATION]",
    "Use habit stacking: “After [CURRENT HABIT], I will [NEW HABIT]",
    "Design your environment. Make the cues of good habits obvious and visible",
    "Use temptation bundling. Pair an action you want to do with an action you need to do ",
    "Join a culture where your desired behavior is the normal behavior. ",
    "Create a motivation ritual. Do something you enjoy immediately before a difficult habit.",
    "Reduce friction. Decrease the number of steps between you and your good habits. ",
    "Prime the environment. Prepare your environment to make future actions easier. ",
    "Master the decisive moment. Optimize the small choices that deliver outsized impact. ",
    "Use the Two-Minute Rule. Downscale your habits until they can be done in two minutes or less. ",
    "Automate your habits. Invest in technology and onetime purchases that lock in future behavior. ",
    "Use reinforcement. Give yourself an immediate reward when you complete your habit. ",
]

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', ()=>{
    const index = Math.floor(Math.random() * 13);

    quote.textContent = quotes[index];
})