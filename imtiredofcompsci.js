function showFact() {
  const earthFacts = [
    "Earth is the only planet not named after a god.",
    "About 71% of the Earth's surface is covered by water.",
    "The Earth's core is as hot as the surface of the sun.",
    "A day on Earth is actually 23 hours, 56 minutes, and 4 seconds.",
    "Earth is the densest planet in our solar system.",
  ];

  const randomFact = earthFacts[Math.floor(Math.random() * earthFacts.length)];
  document.querySelector("#fact-display").innerHTML = randomFact;
}
