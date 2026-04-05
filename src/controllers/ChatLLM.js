import  axios  from 'axios';

export async function queryLMStudio(prompt) {
    console.log(prompt)
  try{
    const response = await axios.post('http://localhost:1234/v1/chat/completions', {
      messages: [
        {
          role: "system",
          content: "Eres un asistente introductorio que apoya el usuario a introducirlo a la aplicacion utiliza el siguiente fragmento de informe para introducir al usuario a la aplicacion, En las últimas décadas el trabajo de los agricultores se ha visto como un trabajo de poca innovación en software que les permita vigilar toda la cadena productiva, según (Endeavor ,2020 “Página 87, Párrafo tercero”). La comunidad de emprendimiento en AgTech México está conformada por 127 empresas. Pero de estas empresas no hay registro de alguna que tenga un proyecto que vigile la cadena productiva de los agricultores en méxico, por lo cual, el problema de no tener vigilado todos los procesos de la cadena productiva puede llegar a ser devastador ya que Si en algún momento de la cadena productiva algo falla no se tiene control de exactamente en que fallo, o en donde. Tener vigilada la cadena productiva es vital para otorgar seguridad y calidad a los distribuidores, tiendas y clientes. Dicho todo esto, presentamos MULI_XIR una aplicación web que ayuda a los agricultores de mexico a tener vigilada toda la cadena productiva, desde que sale el producto del campo hasta que llega al consumidor final con la finalidad de poder tener un control total sobre todo el flujo productivo. tambien recuerda saludar al usuario al iniciar la conversacion"
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
export async function chatBotQuery(prompt, context, user) {
  try {
    console.log(context);
    console.log(user);

    let enhancedPrompt = prompt || '';
    if (context) {
      enhancedPrompt = `${context}\n${enhancedPrompt}`;
    }
    if (user && user.username) {
      enhancedPrompt = `Usuario: ${user.username}\n${enhancedPrompt}`;
    }

    const userContent = [];
    if (enhancedPrompt) {
      userContent.push({ type: "text", text: enhancedPrompt });
    }

    const response = await axios.post('http://localhost:1234/v1/chat/completions', {
      messages: [
        {
          role: "system",
          content: "Eres un asistente que ayuda a los agricultores a resolver dudas y mas importante buscar opiniones de los usuarios acerca de su producto vas a recibir como input los siguientes datos, Productor, nombre: Juan Carlos de la cruz hernandez, Lote: 017-210, Direccion: Prf Periferico 48 3. Lomas del Pitic.. Hermosillo, Sonora. Destinario: Distribuidora abarrey, Estado de envio: Llego en perfecto estado. Distribuidora, nombre: Distribuidora abarrey, Direccion: Av. Luis Donaldo Colosio 1200. Col. Las Quintas. Hermosillo, Sonora. Destinario: Tiendas abarrey, Producto recibido: 5 toneladas, Estado de envio: El producto llego en buenas condiciones. Tienda, Distribuidora: distribuidora abarrey, direccion: recuperala de distribuidor, cantidad recibida: llego una tonelada, estado de envio: el producto llego en mal estado. Cliente, opinion: los productos de esta distribuidora usualmente es muy bueno pero esta ocasion el producto llego en mal estado y no de la misma calidad que esperaba. siempre saluda al usuario y responde las preguntas segun la informacion del prompt por ejemplo que opninan los clientes de lote 017-210 preguntas de ese estilo. Si el usuario no pregunta por este tema busca responder su dudas normalmente sin tomar en cuenta esta informacion.",
        },
        {
          role: "user",
          content: userContent
        }
      ],
      model: "gemma-3n-e4b-it-text",
      temperature: 0.7,
      max_tokens: 900
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      suppress_thoughts: true,
      show_thought_process: false,
      timeout: 200000,

    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error al conectar con LM Studio:', error);
  }
}
