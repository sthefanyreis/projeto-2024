const filmes = [
    { nome: "Veloses e Furiosos", bilheteria: 726000000, sinopse: "Um grupo de corredores enfrentam desafios nas ruas com carros superpotentes.", imagem: "velozes.png" },
    { nome: "Pânico 4", bilheteria: 97000000, sinopse: "Um novo assassino mascarado ameaça os moradores de Woodsboro.", imagem: "panico.jpg" },
    { nome: "Nós", bilheteria: 255000000, sinopse: "Uma família se vê aterrorizada por seus duplos perturbadores em uma noite de horror.", imagem: "nos.jpg" },
    { nome: "Vingadores", bilheteria: 1518000000, sinopse: "Os heróis mais poderosos da Terra se unem para derrotar uma ameaça intergaláctica.", imagem: "vingadores.webp" },
    { nome: "Espetacular Homem Aranha", bilheteria: 758000000, sinopse: "Peter Parker tenta equilibrar sua vida como adolescente com suas responsabilidades como super-herói.", imagem: "espetacular.jpeg" },
    { nome: "Os Fantasmas Ainda Se Divertem", bilheteria: 74000000, sinopse: "Um casal de fantasmas tenta expulsar uma família de sua casa com a ajuda de um excêntrico poltergeist.", imagem: "fantasma.jpg" },
    { nome: "IT:a coisa", bilheteria: 701000000, sinopse: "Um grupo de crianças enfrenta uma entidade demoníaca que assume a forma de um palhaço aterrorizante.", imagem: "it.jpg" },
    { nome: "Homem Aranha: Sem Volta Para Casa", bilheteria: 1916000000, sinopse: "Peter Parker enfrenta vilões de universos paralelos enquanto lida com o preço de ser o Homem-Aranha.", imagem: "homenaranha.jpg" },
    { nome: "carros", bilheteria: 1657000000, sinopse: "Um jovem leão embarca em uma jornada épica para reivindicar seu lugar como rei da selva.", imagem: "carros.jpg" },
    { nome: "deadpool e wolverine", bilheteria: 255000000, sinopse: "Um homem negro descobre um terrível segredo ao visitar a família de sua namorada branca.", imagem: "deadpool.jpg" },
    { nome: "Frozen", bilheteria: 1276000000, sinopse: "Duas irmãs enfrentam uma perigosa aventura para salvar seu reino de um inverno eterno.", imagem: "frozen.jpg" },
    { nome: "Descendentes 4", bilheteria: 150000000, sinopse: "Os filhos dos vilões da Disney enfrentam novos desafios em uma história cheia de magia e mistério.", imagem: "descendentes.jpg" },
    { nome: "Slenderman", bilheteria: 51500000, sinopse: "Um grupo de amigos tenta desvendar o mistério por trás da lenda urbana do Slenderman.", imagem: "slenderman.jpg" },
    { nome: "crepusculo lua nova", bilheteria: 35000000, sinopse: "A turma do Carrossel volta para novas aventuras, enfrentando inimigos e fortalecendo amizades.", imagem: "cre.jpg" }
  ];
  
  function showSection(sectionId) {
    document.getElementById('filmes').style.display = sectionId === 'filmes' ? 'block' : 'none';
    document.getElementById('graficos').style.display = sectionId === 'graficos' ? 'block' : 'none';
    if (sectionId === 'graficos') {
      showAllFilmsGraph();
    }
  }
  
  function showDetails(index) {
    const filme = filmes[index];
    const detalhesDiv = document.getElementById('detalhes-filme');
    detalhesDiv.innerHTML = `
      <h2>${filme.nome}</h2>
      <img src="${filme.imagem}" alt="Imagem do ${filme.nome}" width="200">
      <p><strong>Bilheteria:</strong> $${filme.bilheteria.toLocaleString()}</p>
      <p>${filme.sinopse}</p>
      <canvas id="graficoFilme" width="400" height="200"></canvas>  <!-- Define o tamanho do canvas menor -->
    `;
    showFilmGraph(filme);
  }
  
  function showFilmGraph(filme) {
    const ctx = document.getElementById('graficoFilme').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [filme.nome],
        datasets: [{
          label: 'Bilheteria',
          data: [filme.bilheteria],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  
  function showFilmGraph(filme) {
    const ctx = document.getElementById('graficoFilme').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [filme.nome],
        datasets: [{
          label: 'Bilheteria',
          data: [filme.bilheteria],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  function showAllFilmsGraph() {
    const ctx = document.getElementById('graficoGeral').getContext('2d');
    const nomes = filmes.map(filme => filme.nome);
    const bilheterias = filmes.map(filme => filme.bilheteria);
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nomes,
        datasets: [{
          label: 'Bilheteria',
          data: bilheterias,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  