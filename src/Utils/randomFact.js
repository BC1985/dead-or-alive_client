export function generateRandomFact() {
  const randomFacts = [
    "One in five country music songs refer to alcohol, one in three to tears and one in seven to “mama”.",
    "Not a single member of the Beatles could read or write music.",
    "The most expensive instrument in the world is the “Lady Blunt” Stradivarius violin, which sold in 2011 for $15.9 million.",
    "A 2007 study found that music, classical in particular, can help make plants grow faster.",
    "Barry Manilow didn’t write the song called “I Write the Songs”",
    "In 2008, researchers discovered that loud music makes customers in bars drink more alcohol in less time.",
    "Leo Fender, the founder of the iconic electric guitar and bass brand and Rock and Roll Hall of Fame inductee, never learned to play either instrument.",
    "In 2015, Canadian astronaut Chris Hadfield released the first ever album recorded entirely in space, named Space Sessions: Songs from a Tin Can.",
    "For every $1,000 of music sold, the average musician only makes about $23.40.",
    "The first (and only) band to play on all seven continents is Metallica.",
    "In “Bohemian Rhapsody”, Freddie Mercury plays on the very same piano used by Paul McCartney in “Hey Jude”.",
    "Music, along with painting, poetry, literature and architecture, was Olympic event from 1912 until 1948.",
    "Mozart sold more CDs than Beyoncé in 2016.",
    "When you listen to music, the brain releases the same feel-good hormone (dopamine) it does during sex and eating.",
    "In 1952, American composer John Cage created a song titled “4’44”. It consisted of four minutes and 33 seconds of silence.",
    "The longest song title ever is Hoagy Carmichael’s 1943 “I'm a Cranky Old Yank in a Clanky Old Tank on the Streets of Yokohama with my Honolulu Mama Doin' Those Beat-o, Beat-o Flat-On-My-Seat-o, Hirohito Blues.”",
    "There are more people in Monaco’s orchestra than in its army.",
    "Bryan Adams photographed The Queen for a Canadian postal stamp commemorating Her Majesty’s Golden Jubilee.",
    "In the US in 2005, vinyl record sales only reached $35 million. In 2015, sales had exploded to $416 million."
  ];
  let randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
  return randomFact;
}
