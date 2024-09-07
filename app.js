function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</P>"
        return
    }
                           
    campoPesquisa = campoPesquisa.toLowerCase()
    
  
    // Inicializa uma string para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados e cria HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()    
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.
        includes(campoPesquisa) || tags.includes
        (campoPesquisa)) {
            // cria um novo elemento
            resultados += `
        <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}
            </a>
        </h2>
          <p class="descricão-meta">${dado.descricao}</
          p>
          <a href=${dado.link} target="_blank">Mais 
          informações</a>
      </div>
      `;
        }

      
      
    }

    if (!resultados) {
        resultados = "Nada foi encontrado. você não buscou por um anime ou categoria</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



