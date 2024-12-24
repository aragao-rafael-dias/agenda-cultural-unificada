document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/cult')
        .then(response => response.json())
        .then(data => {
            const eventos = document.getElementById('eventos');
            data.forEach(evento => {
                const eventoDiv = document.createElement('div');
                eventoDiv.innerHTML = `
                <p><strong>Nome:</strong> ${evento.nome}</p>
                <p><strong>Data:</strong> ${evento.data}</p>
                <p><strong>Organização:</strong> ${evento.org}</p><hr>
                `;
                eventos.appendChild(eventoDiv);
            });
        })
})
.catch(error => console.error('Erro ao carregar eventos', error));

// RAFFS DIAS