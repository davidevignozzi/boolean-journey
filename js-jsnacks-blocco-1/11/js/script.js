var bici = [
    {
      nome: 'Bici 1',
      peso: 100
    },
    {
      nome: 'Bici 2',
      peso: 85
    },
    {
      nome: 'Bici 3',
      peso: 50
    },
    {
      nome: 'Bici 4',
      peso: 70
    },
  ]
  
  // prima bici = bici leggera
  var biciLeggera = bici[0]
  
  // ciclo le bici e le confronto con bici leggera, 
  // se bici_confrontata.peso < bici_leggera.peso 
  // bici_confrontata become bici_leggera
  for(var x = 1; x < bici.length; x++) { // ciclo l'array
    if(bici[x].peso < biciLeggera.peso) {
      biciLeggera = bici[x]
    }
  }
  
  console.log(biciLeggera)
  