import { v4 as uuidv4 } from 'uuid';

const Movie = [
    {
        id: uuidv4(),
        title: 'GodFather 1',
        description: 'GodFather 1 Description',
        posterURL: 'https://chiswickcalendar.co.uk/wp-content/uploads/2022/03/The-Godfather-1.jpg',
        rating: 10,
        checked: true,
        categorie:"horror"
    },
    {
        id: uuidv4(),
        title: 'GodFather 2',
        description: 'GodFather 2 Description',
        posterURL: 'https://posterspy.com/wp-content/uploads/2023/04/TheGodfatherPartII_Poster_VAR.jpg',
        rating: 9.2,
        checked: false,
        categorie:"horror"
    },
    {
        id: uuidv4(),
        title: 'GodFather 3',
        description: 'GodFather 3 Description',
        posterURL: 'https://flxt.tmsimg.com/assets/p12911_p_v8_at.jpg',
        rating: 7.5,
        checked: true,
         categorie:"comedy"
    },
    {
        id: uuidv4(),
        title: 'The Platform',
        description: 'The Platform Description',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMzllNmRjYWItNjlhNS00MjcyLWIyODEtMTg0ZjBiNTNhNzQwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
        rating: 7,
        checked: true,
        categorie:"comedy"
    },
    {
        id: uuidv4(),
        title: 'The Next Three Days ',
        description: 'The Next Three Days Description',
        posterURL: 'https://flxt.tmsimg.com/assets/p8129788_p_v8_ae.jpg',
        rating: 7.6,
        checked: false,
        categorie:"romantic"
    },
    {
        id: uuidv4(),
        title: 'John Wick 3 ',
        description: 'John Wick 3 Description',
        posterURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3c40a78219513.5cc812e957de6.jpg',
        rating: 7,
        checked: true,
          categorie:"romantic"
    },
    {
        id: uuidv4(),
        title: 'The Bourne Identity ',
        description: 'The Bourne Identity Description',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_.jpg',
        rating: 6.9,
          categorie:"romantic"
    },

];

export default Movie;
