import  axios  from 'axios';

export async function queryLMStudio(prompt) {
    console.log(prompt)
  try{
    const response = await axios.post('http://localhost:1234/v1/chat/completions', {
      messages: [
        { 
          role: "system", 
          content: "Eres un asistente agrícola que brinda recomendaciones según el nivel de experiencia del usuario, cuando respondas al usaurio y llegues al limite de tokens no siga con otro punto dirijido al usuario para evitar que este texto quede cortado cuando veas que tu limite se acerca termina el texto en el punto en el que estas, necesito que tu prioridad en el texto es que sea un poco mas resumido para que no quede texto cortado, recuerda siempre empezar el texto saludando al usuario." 
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
      model: "gemma-3n-e4b-it-text",
      temperature: 0.7,
      max_tokens: 900
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      suppress_thoughts: true,  // Parámetro específico del modelo
      show_thought_process: false,
      timeout: 200000,
      
    });
    console.log(response.data);

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error('Error al conectar con LM Studio:', error);
    throw error;
  }
}
