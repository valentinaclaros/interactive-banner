// Variables globales
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');

// Función para obtener la hora actual
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
}

// Función para agregar un mensaje
function addMessage(text, sender, senderName) {
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'sender-name';
    nameDiv.textContent = senderName;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = getCurrentTime();
    
    bubble.appendChild(timeSpan);
    messageDiv.appendChild(bubble);
    messageGroup.appendChild(nameDiv);
    messageGroup.appendChild(messageDiv);
    chatMessages.appendChild(messageGroup);
    
    // Scroll automático hacia abajo
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Respuestas automáticas del agente
const autoResponses = [
    "¡Hola! Muy buenos días. Espero que estés teniendo un buen día, gracias por escribirnos.",
    "Entiendo tu situación. Déjame revisar esto para ti.",
    "Gracias por tu paciencia. Estoy verificando la información.",
    "Con gusto te ayudo con eso. ¿Podrías proporcionarme más detalles?",
    "He revisado tu caso y voy a escalarlo al área correspondiente.",
    "¿Hay algo más en lo que pueda ayudarte?",
    "Perfecto, quedo atento a cualquier otra consulta que tengas.",
    "Muchas gracias por contactarnos. Estamos aquí para ayudarte."
];

// Función para enviar respuesta automática del agente
function sendAutoResponse() {
    setTimeout(() => {
        const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
        addMessage(randomResponse, 'agent', 'Yaraldin M.');
    }, 1000 + Math.random() * 1500); // Respuesta después de 1-2.5 segundos
}

// Event listener para el formulario
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        // Agregar mensaje del cliente
        addMessage(messageText, 'client', 'Jefry Dayanna');
        
        // Limpiar input
        messageInput.value = '';
        
        // Enviar respuesta automática del agente
        sendAutoResponse();
    }
});

// Mensaje de bienvenida inicial
window.addEventListener('load', () => {
    setTimeout(() => {
        addMessage('¡Hola! Bienvenido a nuestro chat de soporte. ¿En qué puedo ayudarte hoy?', 'agent', 'Yaraldin M.');
    }, 500);
});







