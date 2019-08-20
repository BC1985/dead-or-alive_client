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
    "In the US in 2005, vinyl record sales only reached $35 million. In 2015, sales had exploded to $416 million.",
    "Florida passed a law requiring toddlers in state-run schools to listen to classical music every day, and in 1998 the governor of Georgia budgeted $105,000 per year to provide every child born in Georgia with a tape or CD of classical music. ",
    "The song “Torn” by Natalie Imbruglia is actually a cover. The original is by Ednaswap.",
    "Actor Mel Brooks was a combat engineer during the Battle of the Bulge. When the Germans played propaganda recordings over loudspeakers, Brooks responded by setting up his own sound system and played music by Al Jolson, a Jewish musician",
    "In 2008, an Ohio man named Andrew Vactor was sentenced to listening to classical music by the likes of Bach, Beethoven and Chopin for 20 hours, after being caught for playing rap music too loud, as an alternative to paying a full fine of $150. He only lasted 15 minutes before leaving.",
    "The song “Sweet Child of Mine” was written in five minutes.",
    "In 2006, VH1 Classic ran fundraiser for Hurricane Katrina relief in which viewers could donate $25 to see the music video of their choice. One viewer donated $35, 000. The viewer could have selected an hour’s worth of music videos from the 1960s through the early 1990s. However, they chose something different for his allotted hour, requesting continuous playing of 99 Luftballons.",
    "On the one-year anniversary of the Curiosity rover’s landing on Mars, it played “Happy Birthday” to itself making “Happy Birthday” the first song and Curiosity the first device used to play music on a foreign planet.",
    `Serial killer Aileen Wuornos was obsessed with Natalie Merchant's "Carnival." She requested they play it at her funeral.`,
    `Sarah McLachlan's song "Angel" is about heroin addiction.`,
    "Eye movement in music reading is an extremely complex phenomenon that involves a number of unresolved issues in psychology. Despite some 30 studies in this area over the past 70 years, little is known about the underlying patterns of eye movement in music reading.",
    '"Zombie" by The Cranberries is about terrorism in Northern Ireland.',
    "In retail stores slow music is played to keep you shopping and spend more. In restaurants fast music is played to speed up turnaround.",

    "Beck’s last album was released only in sheet music form, for others to interpret. No cd’s, no digital download, just sheet music.",
    'Shel Silverstein wrote "A Boy Named Sue."',
    "Famed jazz guitarist Django Reinhardt was in Paris during the Nazi occupation. Despite being a gypsy, handicapped, a player of a banned music style, and a known friend of blacks and Jews, the Germans left him alone because some higher Nazi officers were huge fans of his music.",
    "Garth Brooks is one of the last holdout big-name musicians who still refuses to put his music on iTunes because he disagrees with Apple’s approach to selling music. He will make his back catalog of hits and his new music available for download, but only through his own website.",
    "A McDonald’s in Mount Annan, Sydney Austrailia has been playing classical music on purpose to force teenagers off of its premises at late night.",
    "Hitchcock didn’t want music in Psycho’s shower scene. He practically doubled composer Bernard Herrmann’s salary after seeing the scene with music",
    "Classical and heavy metal music both attracts listeners with similar personalities but dissimilar ages. Younger members apparently go for heavy metal, while their older counterparts prefer classical. However, both have the same basic motivation: to hear something dramatic and theatrical, a shared “love of the grandiose",
    "Hans Zimmer, the composer/producer for over 150 movies, including The Lion King, Gladiator, all Pirates of the Caribbean movies, Pearl Harbor, Rush, Inception, the Dark Knight, etc.; had only 2 weeks of formal music education (piano lessons as a child).",
    "Beethoven won a sight reading piano competition by turning his sheet music upside down, playing it, then improvising on one of its themes for thirty minutes. His opponent, Daniel Steibelt, never returned to challenge him again.",
    "Police in Belfast, Northern Ireland used music from ice cream van to calm angry teen rioters.",
    "There is a music piece called “As Slow as Possible” which started in 2001 and has a duration of 639 years. It can take years for a single note to be played.",
    "In 2008, Warner Music Group was collecting over $5,000 a day ($2 million a year) in royalties for public usage of the “Happy Birthday” song. They have been known to charge up to $10,000 for usage of the song in film. This is also why restaurants have their own birthday songs when you visit.",
    `The US military would play Enter Sandman for hours on end to aid in the interrogation and torture of prisoners. When asked about this, Metallica’s James Hetfield responded “We’ve been punishing our parents, our wives, our loved ones with this music forever. Why should the Iraqis be any different?”`,
    "When Beethoven went deaf, he composed his music by hacking the legs off his piano and sitting on the floor so he could feel the vibrations.",
    "A Sea Organ in Croatia continuously plays music powered by waves that flow through tubes located underneath a set of large marble steps."
  ];
  let randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
  return randomFact;
}
