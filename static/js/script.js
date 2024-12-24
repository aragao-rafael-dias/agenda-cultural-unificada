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
                <p><strong>Organização:</strong> ${evento.org}</p>
                <p><strong>Descrição:</strong> ${evento.desc}</p>
                <p><strong>Cartaz:</strong></p>`;
                
                if (evento.insta) {
                    const instaEmbed = document.createElement('blockquote');
                    instaEmbed.className = 'instagram-media';
                    instaEmbed.innerHTML = `<a href="${evento.insta}" target="_blank" id="instaEmbend">Veja o post no Instagram</a>`;
                    eventoDiv.appendChild(instaEmbed);

                    const hr = document.createElement('hr');
                    eventoDiv.appendChild(hr);
                }
                

                eventos.appendChild(eventoDiv);
            });
            });
        })
.catch(error => console.error('Erro ao carregar eventos', error));

// RAFFS DIAS