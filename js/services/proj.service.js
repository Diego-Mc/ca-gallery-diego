'use strict'

const gProjects = [
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: "Don't Explode!",
    desc: `This project was given to us with a short deadline, meaning a lot was needed to be done in a short time frame, I enjoyed the challenge and decided to rally make it hard on myself and so I decided to finish all of the bonuses & design my own sprites for the game.
    At the end I felt that this project proved to me that I am capable of creating bigger things than I think.`,
    url: 'https://diego-mc.github.io/Minesweeper/',
    publishedAt: new Date(2022, 9, 1),
    lables: ['Matrixes', 'Keyboard events', 'Game design', 'Game development'],
  },
  {
    id: 'pacman',
    name: 'Pac-Man',
    title: 'Eat strawberries!',
    desc: 'A simple project built to learn about matrixes.',
    url: 'https://diego-mc.github.io/Pacman/',
    publishedAt: new Date(2022, 9, 10),
    lables: ['Matrixes', 'Keyboard events', 'Game development'],
  },
  {
    id: 'book-shop',
    name: 'Book Shop',
    title: 'Buy books!',
    desc: 'A simple project built to learn about MVC',
    url: 'https://diego-mc.github.io/Book-Shop/',
    publishedAt: new Date(2022, 9, 11),
    lables: ['User interface', 'CRUDL'],
  },
]

function getProjects() {
  return gProjects
}

function getProjectById(projectId) {
  return gProjects.find((proj) => proj.id === projectId)
}
