
var campionato = [
    {
      nome: 'juventus',
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: 'inter',
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: 'milan',
      puntiFatti: 0,
      falliSubiti: 0
    },
  ]
  
  
  //funzione numero random
  function randomNumber(min, max) {
    var result = Math.floor(Math.random() * (max + 1 - min) + min);
    return result;
  }
  
  // assegnare a puntiFatti e falliSubiti con un numero random
  for(var i = 0; i < campionato.length; i++){
    var squadra = campionato[i]
    squadra.falliSubiti = randomNumber(0,10)
    squadra.puntiFatti = randomNumber(0,50)
  }
  
  console.log(campionato)
  
  // creare un nuovo array di oggetti senza la proprietà puntiFatti
  var nuovoCampionato = [];
  for(var i = 0; i < campionato.length; i++){
    var vecchioCampionato = campionato[i]
  
    nuovoCampionato.push({
      nome: vecchioCampionato.nome,
      falliSubiti: vecchioCampionato.falliSubiti
    })
  }
  
  console.log(nuovoCampionato)
  