function toggleChatbot() {
    var chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.classList.toggle('open');

const sendButton = document.querySelector('.chatbot-input button');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.getElementById('chatbot-body');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    let userMessage = userInput.value.trim();
    if (userMessage) {
        appendUserMessage(userMessage);
        appendBotMessage(generateResponse(userMessage));

        userInput.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
}
    
const responses = {
    "hi": "Hi! How can I help you?",
    "hello": "Hello! How can I help you today?",
    "menu": "Our menu includes a variety of hot and iced coffees, as well as blended beverages. Check out the Menu section above for more details!",
    "location": "We are located in Sta. Barbara. You can find us easily on Google Maps.",
    "hours": "Our operating hours are from 8 AM to 8 PM every day.",
    "contact": "You can reach us through our Facebook and Instagram pages. Links are available in the Contact section below.",
    "default": "I'm sorry, I don't understand. Please ask another question or visit our Contact section for more information."
};

function generateResponse(message) {
    let lowerCaseMessage = message.toLowerCase().trim();
    return responses[lowerCaseMessage] || responses["default"];
}

function appendUserMessage(message) {
    let userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.innerHTML = `<strong>You:</strong> ${message}`;
    chatbotMessages.appendChild(userMessageDiv);
}

function appendBotMessage(message) {
    let botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');
    botMessageDiv.innerHTML = `<strong>Chatbot:</strong> ${message}`;
    chatbotMessages.appendChild(botMessageDiv);
}
}