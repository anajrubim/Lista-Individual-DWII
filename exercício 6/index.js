function pegarValor() {
    let data = document.getElementById('data').value

    let meses = [ "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    let partes = data.split("/")

    let dia = partes[0]
    let mes = partes[1]
    let ano = partes[2]

    if (dia > 31 || dia < 1) {
        alert(`Dia inválido`)
        return
    } 

    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `${dia} de ${meses[mes - 1]} de ${ano}`;
}
