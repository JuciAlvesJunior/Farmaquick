function pesquisar() {
    // Obtém o termo de busca digitado pelo usuário e converte para minúsculas
    const searchInput = document.getElementById("search-input").value.toLowerCase();

    // Seleciona a div onde os resultados serão exibidos
    const resultadosDiv = document.getElementById("results");

    // Filtra os medicamentos que correspondem ao termo de busca
    const resultados = remedios.filter(remedio => {
        return remedio.nome.toLowerCase().includes(searchInput) ||
               remedio.descricao.toLowerCase().includes(searchInput) ||
               remedio.cha_substituto.toLowerCase().includes(searchInput) ||
               remedio.tags.some(tag => tag.toLowerCase().includes(searchInput));
    });

    // Inicializa uma string vazia para construir o HTML dos resultados
    let html = "";
    // Verifica se foram encontrados resultados
    if (resultados.length === 0) {
        html += "<p>Nenhum resultado encontrado.</p>";
    } else {
        // Itera sobre cada medicamento encontrado e cria o HTML do card
        resultados.forEach(remedio => {
            html += `
                <div class="medicine-card">
                    <div class="header">${remedio.nome}</div>
                    <div class="body">${remedio.descricao}</div>
                    <div class="footer">
                        Chá substituto: ${remedio.cha_substituto}<br>
                        <a href="${remedio.link_bula}" target="_blank">Bula</a>
                    </div>
                </div>
            `;
        });
    }

    // Atualiza o conteúdo da div de resultados com o HTML gerado
    resultadosDiv.innerHTML = html;
}