window.addEventListener('DOMContentLoaded', () => {

    const key = 'JXrcKb8H6XMJb61xu5Q2lw==';

    const requisicao = {
        "Chave": key,
        "Seq_Apos": 1,
        "Seq_Ate": 50,
        "Vencto_Apos": "2019/01/01 00:00:00",
        "Vencto_Ate": "2025/12/31 23:59:59",
        "NumDoc": "",
        "NumPag": 1,
        "DtComp_Apos": "2019/01/01 00:00:00",
        "DtComp_Ate": "2025/12/31 23:59:59",
        "PessoaCodigo": 27517
    };


    // fetch('https://api_sgo/wsconsultafinanceiro', {
    fetch('https://api01.erpgestao.com.br/sistema/rest',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requisicao)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
});



