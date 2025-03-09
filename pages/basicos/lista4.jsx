function gerarLista(final = 10){
    const lista = [];
    for (let i = 1; i <= final; i++){
        lista.push(<span>{i}{i < final ? ', ' : ''}</span>);
    }
    return lista;
}

export default function lista() {
    return (
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(3)}
            </div>
            <div>
                {gerarLista(19)}
            </div>
            <div>
                {gerarLista()}
            </div>
        </div>
    )
}