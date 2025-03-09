function gerarLista(){
    const lista = [];
    for (let i = 1; i <= 10; i++){
        lista.push(
            <span key={i}>{i}{i < 10 ? ', ' : ''}</span>
        );
    }
    return lista;
}

export default function lista() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}