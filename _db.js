let games = [
  {
    id: '1',
    title: 'The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch', 'Wii U'],
  },
  {
    id: '2',
    title: 'God of War',
    platform: ['PlayStation 4'],
  },
  { 
    id: '3',
    title: 'Minecraft',
    platform: ['PC', 'Xbox', 'PlayStation', 'Nintendo Switch'],
  },
];

let authors = [
    {
        id: '1',
        name: 'Alice Johnson',
        verified: true,
    },
    {
        id: '2',
        name: 'Bob Smith',
        verified: false,
    },
    {
        id: '3',
        name: 'Charlie Lee',
        verified: true,
    },
    {
        id: '4',
        name: 'Diana Evans',
        verified: false,
    },
    {
        id: '5',
        name: 'Ethan Brown',
        verified: true,
    },
    {
        id: '6',
        name: 'Fiona Clark',
        verified: false,
    },
];

let reviews = [
    {
        id: '1',
        rating: 9,
        content: 'Amazing game with a vast open world!',
        author_id: '3',
        game_id: '1'
    },
    {
        id: '2',
        rating: 8,
        content: 'Great story and gameplay.',
        author_id: '2',
        game_id: '2'
    },
    {
        id: '3',
        rating: 7,
        content: 'Fun to play with friends.',
        author_id: '1',
        game_id: '3'
    },
    {
        id: '4',
        rating: 10,
        content: 'A masterpiece, truly unforgettable.',
        author_id: '6',
        game_id: '1'
    },
    {
        id: '5',
        rating: 6,
        content: 'Good, but could use more features.',
        author_id: '5',
        game_id: '2'
    },
    {
        id: '6',
        rating: 8,
        content: 'Endless creativity and fun.',
        author_id: '4',
        game_id: '3'
    },
];

export default {
    games,
    authors,
    reviews
}