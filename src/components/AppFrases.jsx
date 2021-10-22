import React, { useState } from 'react'
const color = [

    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#73A857',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12'
    
];
const frases = [
    {
        id: 1,
        cita: "No se trata tanto de lo ocupado que estás, sino de por qué estás ocupado. Se alaba a la abeja. Se aplasta al mosquito",
        autor: "Mary O'Connor"
    },

    {
        id: 2,
        cita: "Algunas personas dejan [de buscar trabajo] porque están cansadas del cambio. Otras porque están felices. Y algunas personas dejan de hacerlo porque se les paga lo suficientemente bien como para ser infelices",
        autor: "Mark Stanley"
    },
    {
        id: 3,
        cita: "La religión es un material excelente para mantener callada a la gente común",
        autor: "Napoleón Bonaparte"
    },

    {
        id: 4,
        cita: "Las reclamaciones extraordinarias requieren pruebas extraordinarias",
        autor: "Carl Sagan"
    },

    {
        id: 5,
        cita: "Los necios rechazan lo que ven y no lo que piensan; los sabios rechazan lo que piensan y no lo que ven",
        autor: "Huang Po"
    },

    {
        id: 6,
        cita: "Ninguna cantidad de evidencia convencerá a un escéptico suficientemente decidido",
        autor: "desconocido"
    },

    {
        id: 7,
        cita: "Aquellos que sienten la necesidad de atacar las creencias de otras personas ciertamente no se sienten confiados en las suyas",
        autor: "desconocido"
    },

    {
        id: 8,
        cita: "La persecución por sí sola no te hace semejante a Galileo. También debes tener razón",
        autor: "desconocido"
    },

    {
        id: 9,
        cita: "Finalmente encontré a Jesús. Él estuvo detrás del sofá todo el tiempo",
        autor: "Dick Fitzwell (Fark.com)"
    },

    {
        id: 10,
        cita: "Si el precio es correcto, lucharé contra un león",
        autor: "Mike Tyson"
    },

    {
        id: 11,
        cita: "La muerte te hace popular. Personas a las que ni siquiera les agradaste en la vida vendrían y dirían que eras un buen tipo. ¡Y flores! ¡Recibirás más flores de las que jamás hayas recibido en tu vida! Lástima que sea demasiado tarde . ",
        autor: "George Carlin"
    },

    {
        id: 12,
        cita: "La democracia es algo peligroso cuando está en manos de gente estúpida",
        autor: "desconocido"
    },

    {
        id: 13,
        cita: "Un dicho ingenioso no prueba nada",
        autor: "Voltaire"
    },

    {
        id: 14,
        cita: "La ropa puede hacer al hombre, pero no hace que el hombre trabaje",
        autor: "Solid_Snake (Fark.com)"
    },

    {
        id: 15,
        cita: "En el juego de la guerra termonuclear global, la única forma de ganar es no jugar en absoluto",
        autor: "Joshua (Juegos de guerra)"
    },

    {
        id: 16,
        cita: "La única diferencia entre el genio y la estupidez es que el genio tiene sus límites",
        autor: "Albert Einstein"
    },
    {
        id: 17,
        cita: "Algunas personas nacen víctimas, otras se desviven por convertirse en una",
        autor: "Empalador (Fark.com)"
    },

    {
        id: 18,
        cita: "No se ha dicho nada sobre política que no se haya dicho ya sobre las hemorroides",
        autor: "desconocido"
    },

    {
        id: 19,
        cita: "Un fanático es alguien que no cambia de opinión y no cambia de tema",
        autor: "Winston Churchill"
    },

    {
        id: 20,
        cita: "La programación de hoy es una carrera entre los ingenieros de software que se esfuerzan por construir programas más grandes y mejores a prueba de idiotas, y el Universo tratando de producir idiotas más grandes y mejores. Hasta ahora, el Universo está ganando",
        autor: "Rick Cook"
    },


    {
        id: 21,
        cita: "Francia es para los franceses, o para cualquiera que pase con un ejército",
        autor: "Dorf1 (Fark.com)"
    },

    {
        id: 22,
        cita: "Si siempre haces lo que siempre hiciste, siempre obtendrás lo que siempre obtuviste. Entonces, si nada cambia, nada cambiará",
        autor: "desconocido"
    },

    {
        id: 22,
        cita: "En tres palabras puedo resumir todo lo que aprendí sobre la vida. Continúa",
        autor: "Robert Frost"
    },

    {
        id: 24,
        cita: "Ves cosas y dices '¿Por qué?' Pero sueño cosas que nunca fueron y digo '¿Por qué no?' ",
        autor: "George Bernard Shaw"
    },

    {
        id: 25,
        cita: "La educación es la capacidad de escuchar casi cualquier cosa sin perder los estribos",
        autor: "Robert Frost"
    }
]
const AppFrases = () => {
    const [colors, setColors] = useState("")
    const [frase, setFrase] = useState("")
    const [autor, setAutor] = useState("")


    const send = () => {
        let send = Math.floor(Math.random() * frases.length);
        let sendColor = Math.floor(Math.random() * color.length);
        setColors(color[sendColor])
        setFrase(frases[send].cita)
        setAutor(frases[send].autor)
    }
    let tumblr1 =  'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
    encodeURIComponent(frase) +
    '&content=' +
    encodeURIComponent(autor) +
    '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';

  let tweet= 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + frase + '" ' + autor);

          !frase && 
          send() 
     return (
        <div style={{ height:"100vh", backgroundColor: colors }}>
            <header>
                {/* <h1 >Generador de frase</h1> */}
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="quote-box" >
                            <p style={{ color: colors }}><strong><span className="quote">{frase}</span></strong><br />&mdash;<span className="author">{autor}</span></p>
                            <div className="buttons">
                            
                                <a
                                    href= {tweet}
                                    className="button"
                                    style={{ backgroundColor: colors }}
                                    id="tweet-quote"
                                    title="Tweet this quote!"
                                    target="_top"
                                >
                                
                                   <img 
                                   style={{ width: "24px", marginTop: "-15px" }}
                                   src="https://img.icons8.com/fluency/48/000000/twitter.png" alt=""/>
                                </a>
            
                                <a
                                    href= {tumblr1}
                                    style={{ backgroundColor: colors }}
                                    className="button"
                                    id="tumblr-quote"
                                    title="Post this quote on tumblr!"
                                    rel= "noreferrer"
                                    target="_blank"
                                >
                                   <img 
                                   style={{ width: "18px", marginTop: "-15px" }}
                                   src="https://img.icons8.com/officel/16/000000/tumblr.png" alt=""/>
                                </a>
                                <button className="button" id="new-quote"
                                    onClick={send}
                                    style={{ backgroundColor: colors }}
                                >Nueva Frase</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFrases
