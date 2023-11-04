const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


   function contarOvejas(ovejas) {

    const array = []
  
    for(let i=0;i<ovejas.length;i++){
      if(ovejas[i].color === 'rojo' &&
       (ovejas[i].name.toLowerCase().includes('a') && 
       ovejas[i].name.toLowerCase().includes('n'))){
        array.push(ovejas[i])
      }
    }
  
    return array
  }


  const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)