var filmes = document.querySelector(".lista-filmes");

var listaFilmes = [
  {
    id: 1,
    nome: "Demon Slayer: Infinity Train",
    linkImagem:
      "https://media.techtribune.net/uploads/2021/01/0_07ddlRJZ7KFGebgf-1-683x1024-640x960.jpg",
    linkSite:
      "https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba/leg-the-movie-mugen-train-demon-slayer-kimetsu-no-yaiba-mugen-train-leg-819635?utm_source=paid_cr&utm_medium=google-search&utm_campaign=consideration&utm_term=demon%20slayer%20mugen%20train&referrer=paid_cr_google-search_consideration&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRMGYxfIwx1HpwfUZ9BJA1nh3xOz4t7GpZsOCKGNLe-UlHDQFFiMm2waAji9EALw_wcB"
  },
  {
    id: 2,
    nome: "A Silent Voice",
    linkImagem:
      "https://br.web.img3.acsta.net/c_310_420/pictures/17/10/12/19/35/2068130.jpg",
    linkSite: "https://www.netflix.com/br-en/title/80223226"
  },
  {
    id: 3,
    nome: "Senhor dos Anéis: Os Anéis de Poder",
    linkImagem:
      "https://br.web.img3.acsta.net/pictures/22/02/14/14/50/3578447.png",
    linkSite:
      "https://www.primevideo.com/detail/0TUVXIO58IUNEPNBF8363Z7YGL/ref=atv_hm_hom_1_c_8o26tb_brws_3_1/?language=pt_br"
  }
];

atualizarTela();

function adicionarFilme() {
  var nome = document.getElementById("nome").value;
  var linkImagem = document.getElementById("linkImagem").value;
  var linkSite = document.getElementById("linkSite").value;

  var filme = {
    id: listaFilmes.length + 1,
    nome: nome,
    linkImagem: linkImagem,
    linkSite: linkSite
  };

  if (
    linkImagem.endsWith(".jpg") ||
    linkImagem.endsWith(".jpeg") ||
    linkImagem.endsWith(".png")
  ) {
    listaFilmes.push(filme);
    atualizarTela(filme);
  } else {
    alert("Endereço de imagem inválido");
  }
  document.getElementById("nome").value = "";
  document.getElementById("linkImagem").value = "";
  document.getElementById("linkSite").value = "";
}

function atualizarTela(filme) {
  filmes.innerHTML = "";
  listaFilmes.forEach((filme) => {
    var elementoListaFilmes = listarFilmesNaTela(
      filme.nome,
      filme.linkImagem,
      filme.linkSite,
      filme.id
    );

    filmes.appendChild(elementoListaFilmes);
  });
}

function atualizarFilmeId() {
  for (let i in listaFilmes) {
    var novoId = Number(i) + 1;

    listaFilmes[i].id = novoId;
  }
}

function listarFilmesNaTela(nome, linkImagem, linkSite, id) {
  var listaFilmesDiv = document.createElement("div");
  var listaFilmesImg = document.createElement("img");
  var listaFilmesNome = document.createElement("span");
  var listaFilmesLink = document.createElement("a");

  listaFilmesNome.textContent = id + " " + "-" + " " + nome;
  listaFilmesImg.src = linkImagem;
  listaFilmesLink.href = linkSite;
  listaFilmesLink.target = "_blank";

  listaFilmesDiv.setAttribute("class", "filmes");
  listaFilmesDiv.setAttribute("title", nome);

  listaFilmesDiv.appendChild(listaFilmesLink);
  listaFilmesDiv.appendChild(listaFilmesNome);
  listaFilmesLink.appendChild(listaFilmesImg);

  return listaFilmesDiv;
}

function removerFilme(id) {
  var elementoNumero = document.getElementById("removerFilme").value;
  var index = elementoNumero - 1;

  listaFilmes.splice(index, 1);

  atualizarFilmeId();
  atualizarTela();
  document.getElementById("removerFilme").value = "";
}