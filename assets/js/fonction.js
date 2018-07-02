$(function() {
  //DAéclaration des variables
  var answerComputer;
  var counterComputer = 0;
  var counterPlayer = 0;
  //Activation de l'évenement au clic sur le bouton valider
  $('#valider').click(function() {
    //Génération d'un nombre aléatoire et intégration dans une variable pour l'ordinateur
    var comp = Math.floor(Math.random() * 3);
    //Si le nombre aéatoire est égale a 1
    if (comp == 1) {
      //Intégrer la valeur 'pierre' dans la variable
      answerComputer = 'pierre';
      //Si le nombre aéatoire est égale a 2
    } else if (comp == 2) {
      //Intégrer la valeur 'papier' dans la variable
      answerComputer = 'papier';
      //Si le nombre aéatoire est égale a 3
    } else if (comp == 3) {
      //Intégrer la valeur 'ciseaux' dans la variable
      answerComputer = 'ciseaux';
    } else {
    }
    //Intégration de la valeur input des types radio dans une variable
    var answerPlayer = $('input[type=radio][name=shifumi]:checked').attr('value');
    /*//Génération d'un nombre aléatoire et intégration dans une variable pour le joueur
    var answer = Math.floor(Math.random() * 3);
    //Si le nombre aéatoire est égale a 1
    if (answer == 1) {
      //Intégrer la valeur 'pierre' dans la variable
      answerPlayer = 'pierre';
      //Si le nombre aéatoire est égale a 2
    } else if (answer == 2) {
      //Intégrer la valeur 'papier' dans la variable
      answerPlayer = 'papier';
      //Si le nombre aéatoire est égale a 3
    } else if (answer == 3) {
      //Intégrer la valeur 'ciseaux' dans la variable
      answerPlayer = 'ciseaux';
    } else {
    }*/

    //Si le joueur fait pierre et que l'ordinateur fait pierre
    if (answerPlayer == 'pierre' && answerComputer == 'pierre') {
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Égalité !');
      //Sinon si le joueur fait pierre et que l'ordinateur fait papier
    } else if (answerPlayer == 'pierre' && answerComputer == 'papier') {
      ++counterComputer;
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Perdu !');
      //Sinon si le joueur fait pierre et que l'ordinateur fait ciseaux
    } else if (answerPlayer == 'pierre' && answerComputer == 'ciseaux') {
      ++counterPlayer;
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Gagné !');
      //Sinon si le joueur fait papier et que l'ordinateur fait pierre
    } else if (answerPlayer == 'papier' && answerComputer == 'pierre') {
      ++counterPlayer;
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Gagné !');
      //Sinon si le joueur fait papier et que l'ordinateur fait papier
    } else if (answerPlayer == 'papier' && answerComputer == 'papier') {
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Égalité !');
      //Sinon si le joueur fait papier et que l'ordinateur fait ciseaux
    } else if (answerPlayer == 'papier' && answerComputer == 'ciseaux') {
      ++counterComputer;
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Perdu !');
      //Sinon si le joueur fait ciseaux et que l'ordinateur fait pierre
    } else if (answerPlayer == 'ciseaux' && answerComputer == 'pierre') {
      ++counterComputer;
      $('#ring').text(answerPLayer + '\nVS' + '\n' + answerComputer);
      alert('Perdu !');
      //Sinon si le joueur fait ciseaux et que l'ordinateur fait papier
    } else if (answerPlayer == 'ciseaux' && answerComputer == 'papier') {
      ++counterPlayer;
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Gagné !');
      //Sinon si le joueur fait ciseaux et que l'ordinateur fait ciseaux
    } else if (answerPlayer == 'ciseaux' && answerComputer == 'ciseaux') {
      $('#ring').text(answerPlayer + '\nVS' + '\n' + answerComputer);
      alert('Égalité !');
    } else {
    }
    //Compteur
    $('#computer').text('Victoires : ' + counterComputer);
    $('#player').text('Victoires : ' + counterPlayer);
  });
});
