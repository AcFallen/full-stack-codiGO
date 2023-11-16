console.log('Hola JS')

// PARA TRAER INFORMACION EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'


const fetchPost = async () => {

  try {
    const response = await fetch(url) // promise

    if (!response.ok) {
      throw new Error('ERROR HTTP: ' , response.status)
    }

    const json = await response.json()
  
    // Aqui podemos procesar o modificar el JSON entrante
  
    return json

  } catch (error) {
    console.log(error)
  }



}

const renderPosts = (posts) => {
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {

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
  .catch(error => {
    console.log(error)
  })