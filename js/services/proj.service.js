'use strict'

const gProjects = [
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: "Don't Explode!",
    desc: 'lorem lorem lorem',
    url: '#',
    publishedAt: new Date(2022, 9, 1),
    lables: ['Matrixes', 'Keyboard events', 'Game design', 'Game development'],
  },
  {
    id: 'pacman',
    name: 'Pac-Man',
    title: 'Eat strawberries!',
    desc: 'lorem lorem lorem',
    url: '#',
    publishedAt: new Date(2022, 9, 10),
    lables: ['Matrixes', 'Keyboard events', 'Game development'],
  },
  {
    id: 'book-shop',
    name: 'Book Shop',
    title: 'Buy books!',
    desc: 'lorem lorem lorem',
    url: '#',
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
