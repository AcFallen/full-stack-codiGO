console.log('Hola JS')

// PARA TRAER INFORMACION EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url) // Devuelve una promesa
//   .then(response => response.json()) // Convertimos la respuesta en un objeto JS
//   .then(data => {
//     console.log(data)
//   }) // podemos usar el objeto JS

const fetchPost = () => {
  console.log('llamando al api de JSONPLACEHOLDER')

  return fetch(url)
  .then(response => response.json())
  // .then(data => data)
}

const renderPosts = (posts) => {
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    // console.log(post)
    postList += `

      <div>
        <h2>${post.id}: ${post.title}</h2>
        <p> ${post.body}</p>
      </div>
    `
  });

  appDiv.innerHTML = postList
}

fetchPost()
  .then(posts => {
    renderPosts(posts)
  })