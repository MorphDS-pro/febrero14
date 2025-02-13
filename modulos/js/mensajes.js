document.addEventListener('DOMContentLoaded', function () {
    function initializeMessageModule() {
        const messageTypeSelect = document.getElementById('messageType');
        const messageDisplay = document.getElementById('messageDisplay');

        if (!messageTypeSelect || !messageDisplay) {
            console.error("No se encontró messageType o messageDisplay en el DOM.");
            return;
        }

        console.log("Componentes de mensaje encontrados y listos.");

        const notes = {
            Virtudes: [
                "Eres una persona generosa.", "Tu paciencia me inspira.", "Tienes un corazón lleno de amor.",
                "Siempre me apoyas en todo.", "Tu sentido del humor ilumina mi vida.", "Tu belleza interior es impresionante.",
                "Tienes una fuerza increíble.", "Eres una persona leal y confiable.", "Tu bondad no tiene límites.", "Tu inteligencia me deja sin palabras."
            ],
            Positivas: [
                "Me haces sentir amado/a cada día.", "Tu sonrisa ilumina mis días.", "Tu presencia me da paz.",
                "Cada momento contigo es especial.", "Me haces sentir que todo es posible.", "Tu alegría es contagiante.",
                "Siempre sabes cómo hacerme reír.", "Eres mi motivación para ser mejor.", "Juntos, somos imparables.", "Cada día a tu lado es un regalo."
            ],
            Frases: [
                "El amor lo puede todo.", "Juntos somos más fuertes.", "El amor no se ve con los ojos, sino con el corazón.",
                "El amor es la llave que abre todas las puertas.", "El amor es lo único que crece cuando se reparte.",
                "En cada latido de mi corazón, te amo más.", "Eres la razón por la que sonrío cada día.",
                "Nuestro amor es un cuento de hadas hecho realidad.", "Cada día me enamoro más de ti.", "El amor es un viaje y quiero recorrerlo contigo."
            ]
        };

        function displayNotes(type) {
            messageDisplay.innerHTML = ''; // Limpiar el contenedor

            if (type && notes[type]) {
                const notesList = notes[type];
                const listHTML = `
                    <div class="message-item">
                        <div class="author">Sistema</div>
                        <div class="date">${new Date().toLocaleDateString()}</div>
                        <div class="message-content">
                            <strong>${type}:</strong>
                            <ul>
                                ${notesList.map(note => `<li>${note}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                messageDisplay.innerHTML = listHTML;
            }
        }

        messageTypeSelect.addEventListener('change', function () {
            displayNotes(this.value);
        });
    }

    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
        initializeMessageModule();
    }, 300);
});
