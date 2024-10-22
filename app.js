document.getElementById('adicionar').addEventListener('click', function () {
    const itemSelecionado = document.getElementById('item').value;
    
    if (itemSelecionado) {
        const listaCompras = document.getElementById('lista-compras');
        const novoItem = document.createElement('li');
        novoItem.textContent = itemSelecionado;
        listaCompras.appendChild(novoItem);
    }
});