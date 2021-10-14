//obtained from Karl Hadwen on https://github.com/karlhadwen/netflix/blob/master/src/seed.js
export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
  
    /* Series
      ============================================ */
    // Documentaries
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Tiger King',
      description: 'A zoo owner spirals out of control amid a cast of eccentric characters in this true murder-for-hire story from the underworld of big cat breeding',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Citizenfour',
      description:
        'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'citizenfour',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Last Dance',
      description:
        'This docuseries chronicles the rise of superstar Michael Jordan and the 1990s Chicago Bulls, with unaired footage from an unforgettable 1997-98 season.',
      genre: 'documentaries',
      maturity: '13',
      slug: 'thelastdance',
    });
    
  
    // Comedies
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Brooklyn Nine-Nine',
      description:
        'Brilliant but immature Brooklyn detective Jake Peralta must learn to follow the rules and be a team player when his squad gets an exacting new captain.',
      genre: 'comedies',
      maturity: '13',
      slug: 'b99',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Family Guy',
      description:
        'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
      genre: 'comedies',
      maturity: '15',
      slug: 'FamilyGuy',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'South Park',
      description:
        'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
      genre: 'comedies',
      maturity: '15',
      slug: 'SouthPark',
    });
  
  
    // Crime
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Long Shot',
      description:
        'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Staircase',
      description:
        "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    });
  
  
    /* Movies
      ============================================ */
    // Children
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Home Alone 2: Lost in New York',
      description:
        'Kevin accidentally boards a flight to New York City and gets separated from his family who are on their way to Miami. He then bumps into two of his old enemies, who plan to rob a toy store.',
      genre: 'children',
      maturity: '0',
      slug: 'home-alone-nyc',
    });
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Ratatouille',
      description:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realize that people despise rodents and will never enjoy a cooked meal by him.',
      genre: 'children',
      maturity: '5',
      slug: 'ratatouille',
    });
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Toy Story 3',
      description:
        'Before Andy leaves for college, his toys are mistakenly delivered to a day care centre.  Woody convinces the other toys that they were not dumped and leads them to take an expedition back home.',
      genre: 'children',
      maturity: '0',
      slug: 'toy-story-3',
    });
  
    // Action
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Deadpool 2',
      description:
        'Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travellign mercenary from killing Russell.',
      genre: 'action',
      maturity: '18',
      slug: 'dead-pool-2',
    });
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'John Wick 3',
      description:
        'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.',
      genre: 'action',
      maturity: '18',
      slug: 'john-wick-3',
    });
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Terminator Dark Fate',
      description:
        'When an advanced Terminator is sent into the pst, a cyborg and a seasoned female warrior team up to stop the death of a young woman who is fated to ensure the survival of the human race.',
      genre: 'action',
      maturity: '18',
      slug: 'terminator-df',
    });

  
    // Comedy
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Dumb and Dumber To',
      description:
        'Long-time friends and colossal fools Harry and Lloyd embark on a journey to find Harry\'s newly-discovered daughter and convince her to donate a kidney to Harry, whose health is deteriorating',
      genre: 'comedies',
      maturity: '15',
      slug: 'dumb-and-dumber',
    });
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Mr. Bean Holiday',
      description:
        'Mr. Bean wins a holiday to France and sets out on his journey. Once there, he unknowingly seperates a father-son duo then decides to reunite them.',
      genre: 'comedies',
      maturity: '15',
      slug: 'mr-bean',
    });
    firebase.firestore().collection('movies').add({
      id: getUUID(),
      title: 'Paul Blart: Mall Cop 2',
      description:
        'Paul Blart, a security guard who saved a mall from criminals, earns a trip to Las Vegas. While on the vacation, Paul learns that the hotel he is staying at is in danger and steps up to save the day.',
      genre: 'comedies',
      maturity: '15',
      slug: 'paul-blart-2',
    });
}
