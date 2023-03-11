const express = require("express")
const app = express()

app.listen(3000, ()=> {
    console.log("el servicio está levantado en puerto 3000")
})

app.get("/zodiaco", (req, res)=> {
    res.send("<h1>Zodíaco</h1><p>Ingrese fecha de nacimiento (YYYYMMDD)</p>")
})

app.get("/zodiaco/:fecha", (req, res)=> {
  
    const signos = [
        {sign: "acuario", desc: "No se deje engañar por la palabra ‘acuario’. Este signo de aire no es de los que se atan a ideales arbitrarios. A riesgo de ganarse la reputación de distantes y distanciadas, este signo analítico e innovador prefiere situarse al margen de la multitud en lugar de seguir al rebaño.."},
        {sign: "piscis", desc: "Sí, Piscis tiende a ver el mundo a través de lentes de sol color de rosa, pero su alma romántica se basa en un profundo sentido de la intuición, la sensibilidad y la empatía que le ayudan a conectar con la gente a un nivel más profundo, incluso más allá de lo que el mundo ve."},
        {sign: "aries", desc: "Como el primer signo del zodiaco, no es de extrañar que Aries siempre esté dispuesto a lanzarse de cabeza a un desafío. Esta actitud positiva significa que ellos no dejan que los contratiempos de la vida los paren durante mucho tiempo. Para ellos siempre hay una nueva montaña que conquistar."},
        {sign: "tauro", desc: "Como signo de tierra, el toro de la esfera zodiacal es conocido por mantener los pies muy bien puestos en el suelo, son personas prácticas y responsables. Son una constante en la vida de todos, este sentido de la fiabilidad es lo que ayuda a sus amigos recurran a ellos cuando las cosas se ponen difíciles."},
        {sign: "géminis", desc: "Las gemelas del zodiaco tienen una refrescante dualidad que les hace atraer a la gente como un imán. Inquisitivas, pero adaptables, juguetonas, pero sensibles, ¡así eres tú, Géminis! Algunos podrían llamarte indecisa, pero este sentido de la curiosidad por lo que el mundo tiene que ofrecerte significa que las cosas nunca serán aburridas para ti."},
        {sign: "cáncer", desc:"Con un mundo emocional dictado por la pasión, la calidez y un espíritu afectuoso, un Cáncer es más leal que nadie. Es el signo más hogareño de la rueda zodiacal, sus seres queridos se sienten realmente en casa cuando están junto a ellos. "},
        {sign: "leo", desc:"Extrovertidos, alegres y teatrales, ¡nadie podría acusar a Leo de sufrir por falta de confianza! Ellos saben lo que quieren en la vida y no tienen reparos en conseguirlo. Puede que el mundo piense que les encanta ser el centro de atención, pero es obvio que las cámaras los adoran. "},
        {sign: "virgo", desc:"Si quieres que algo se haga, llama a cualquiera. Pero si quieres algo bien hecho, llama a un Virgo. Metódicos, meticulosos y detallistas hasta el extremo. Si el mundo es un caos, está claro que solo los de este signo lo pueden poner en orden."},
        {sign: "libra", desc:"La armonía y la paz ocupan un lugar destacado en la carta de presentación de tu signo del zodiaco, y con razón. Simbolizado por la balanza, son conocidos por el sentido de la equidad y la justicia, que los impulsan a establecer el equilibrio en todos los aspectos de su vida."},
        {sign: "escorpio", desc: "Entre los signos más incomprendidos del zodíaco. Muchos los ven como agresivos y conflictivos, pero en realidad tienen pasión por defender las causas perdidas. Su naturaleza profundamente apasionada significa que nunca se rendirán sin luchar."},
        {sign: "sagitario", desc:"Como signo de fuego, tu búsqueda del conocimiento está destinada a llevarte a grandes lugares. Espíritu errante, tu personalidad inconformista no echa raíces fácilmente, no cuando todavía te queda un mundo por descubrir. "},   
        {sign: "capricornio", desc:"Metódicos, prácticos y decididos, los Capricornio no se detienen cuando tienen un objetivo en mente. A ellos no les gustan las charlas triviales ni los halagos vanidosos, por lo que su círculo íntimo es pequeño pero muy leal."}  
    ]

    const fecha = req.params.fecha;
let dia = fecha.substring(6)
let mes = fecha.substring(6, 4)
 
if (mes == "01" && dia >= "20" || mes == "02" && dia <= "19") {
    res.send(`<h4>Tu signo es ${signos[0].sign} </h4><p>${signos[0].desc} </p>`)
} else if (mes == "02" && dia >= "20" || mes == "03" && dia <= "19") {
    res.send(`<h4>Tu signo es ${signos[1].sign} </h4><p>${signos[1].desc} </p>`)
} else if (mes == "03" && dia >= "20" || mes == "04" && dia <= "19") {
    res.send(`<h4>Tu signo es ${signos[2].sign} </h4><p>${signos[2].desc} </p>`)
} else if (mes == "04" && dia >= "20" || mes == "05" && dia <= "20") {
    res.send(`<h4>Tu signo es ${signos[3].sign} </h4><p>${signos[3].desc} </p>`)
} else if (mes == "05" && dia >= "21" || mes == "06" && dia <= "20") {
    res.send(`<h4>Tu signo es ${signos[4].sign} </h4><p>${signos[4].desc} </p>`)
} else if (mes == "06" && dia >= "21" || mes == "07" && dia <= "22") {
    res.send(`<h4>Tu signo es ${signos[5].sign} </h4><p>${signos[5].desc} </p>`)
} else if(mes == "07" && dia > "23" || mes == "08" && dia < "21") {
    res.send(`<h4>Tu signo es ${signos[6].sign} </h4><p>${signos[6].desc} </p>`)
} else if (mes == "08" && dia >= "22" || mes == "09" && dia <= "22") {
    res.send(`<h4>Tu signo es ${signos[7].sign} </h4><p>${signos[7].desc} </p>`)
} else if (mes == "09" && dia >= "23" || mes == "10" && dia <= "22") {
    res.send(`<h4>Tu signo es ${signos[8].sign} </h4><p>${signos[8].desc} </p>`)
} else if (mes == "10" && dia >= "23" || mes == "11" && dia <= "21") {
    res.send(`<h4>Tu signo es ${signos[9].sign} </h4><p>${signos[9].desc} </p>`)
} else if (mes == "11" && dia >= "22" || mes == "12" && dia <= "21") {
    res.send(`<h4>Tu signo es ${signos[10].sign} </h4><p>${signos[10].desc} </p>`)
} else {
    res.send(`<h4>Tu signo es ${signos[11].sign} </h4><p>${signos[11].desc} </p>`)
}

})

app.get("/astrologia-china", (req, res)=> {
    res.send("<h1>Astrología China</h1><p>Ingrese fecha de nacimiento (YYYYMMDD)</p>")
})

app.get("/astrologia-china/:fecha2", (req, res)=> {
    
    const horosChino = [
        {nombre: "mono", desc: "Animal más parecido al ser humano, es ingenioso, divertido, simpático, de mente rápida y despierta, comprador, persuasivo, sociable, capaces de resolver cualquier problema por difícil que sea con soltura. Sus relaciones amorosas y con los amigos suelen ser conflictivas, pues no soporta que no lo valoren. Gozan de buena salud, aunque sus excesos en las fiestas, alcohol y drogas podrían pasarle factura."},
        {nombre: "gallo", desc: "Atractivo y seductor, con talento y apreciado. Son meticulosos, eficientes, ordenados, buenos conversadores, observadores, egoístas, usureros, pragmáticos y muy familiares. En el amor son románticos, obstinados y luchan por el control de su pareja. Suelen destacar como relaciones públicas o como artistas. No prestan demasiada atención a su salud."},
        {nombre: "perro", desc: "El perro es un ser dedicado al trabajo, honesto, confiable, diligente, con un gran sentido de la justicia y la lealtad. Cautiva a todos con su personalidad excitante, su buen humor y su gran capacidad para escuchar los problemas de los demás y dar buenos consejos. En el amor son fieles y leales, aunque muy celoso cuando su pareja no está en casa. Los nervios son su mayor problema de salud."},
        {nombre: "cerdo", desc: "Es un animal sincero, honesto, confiado, educado, cariñoso, servicial, valiente, decidido, con gran fuerza de voluntad, sin grandes pretensiones ni vanidad, con los pies en la tierra. Son muy agradables y tienen gusto y modales impecables. En el amor son sensuales, apasionado y pacientes, pero hasta un punto. Son muy trabajadores, aunque la falta de atracción por el deporte y la apatía harán que su físico se resienta y engorde en exceso."},
        {nombre: "rata", desc: "Los nacidos bajo el signo de la Rata son persona sabias a las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios. Buenas trabajadoras, ahorradores y buenos administradores de su economía."},
        {nombre: "buey", desc: "Los búfalos o bueyes son animales pacientes y tranquilos, que irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."},
        {nombre: "tigre", desc: "Las personas de este signo son muy pasionales y llenas de energía. No pasan desapercibidas, son aventureros, independientes, ingeniosos, impulsivos y les gusta la diversión. Son amigos para toda la vida, aunque les gusta ser el líder del grupo. En el mundo de las relaciones de pareja se muestran el más fuerte, sexy y seductor, aunque de comportamiento excesivo."},
        {nombre: "conejo", desc: "Los que nacen en el Año del Conejo reúnen extraordinarias cualidades humanas: son prudentes, inteligentes, afables, discretos, previsores, atentos y benevolentes. Por eso, el signo del conejo es ampliamente aceptado por la gente.De carácter moderado e indulgente, amante de la paz y la concordia, el conejo odia la guerra y la violencia. Le gusta la vida tranquila, la ternura y la armonía."},
        {nombre: "dragón", desc: "Símbolo del Emperador en China, el dragón es imaginativo, magnánimo, emprendedor, afortunado y poderoso. Está lleno de fuerza y vitalidad. Es un verdadero acumulador de energía y si le enojas, se enfurecerá de tal manera que perderá los estribos. Será difícil calmarle, pues no cree ni a nadie ni en nadie. Suelen dar buenos consejos y son afortunados tanto en el dinero como en el amor. Son muy sentimentales y se enamoran locamente."},
        {nombre: "serpiente", desc: "Las personas Serpientes son astutas, saben lo que quieren y cómo conseguirlo. Su conversación es elegante y fluida. Son intensos y prudentes a la vez. Son celosas y posesivas con su familia pero leales. Les gusta mimar a sus amigos y esperan de ellos una actitud recíproca. Si se sienten desdeñados o fracasan en sus tentativas, pueden estar enfadados durante horas, aunque son buenas para mantener la calma y parecer tranquilas en situaciones difíciles."},
        {nombre: "caballo", desc: "Populares, optimistas, llenos de alegría, aventureros, elocuentes, impacientes, emprendedores, entusiastas con la vida, grandes amantes y amigos. Su gran pasión es el dinero y los viajes. Les gusta conocer gente nueva, distintas culturas, hablar idiomas y son el alma de las fiestas. Su atractivo físico y su belleza hace que les sea fácil encontrar el amor: trampa en la que caen sin remedio"},
        {nombre: "cabra", desc: "La cabra es creativa, artística, positiva, elegante, femenina, afable, compasiva, llorona, sensible, soñadora, orgullosa y triste. No persiguen la riqueza material y prefieren vivir de sus ensoñaciones. Aman la familia, los niños, el hogar y estar en contacto con la naturaleza. Son muy trabajadoras, aunque no les gusta la presión ni de una fecha límite, ni de un jefe."}
    ]
    
    const fecha2 = req.params.fecha2;
    let anio = fecha2.substring(0,4)
    let hChino = anio%12
   
    res.send(`<h4>Tu animal en el horóscopo chino es ${horosChino[hChino].nombre} </h4><p>${horosChino[hChino].desc} </p>`)
})

