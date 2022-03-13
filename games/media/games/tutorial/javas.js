// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Dia de tu cumpleaños</h1>\
        <img src='media/games/tutorial/tarta1.png' class='float_right'>\
        <p>Hoy es tu cumpleaños y tu padres te dan un regalo a elegir entre dos opciones.</p>\
        \
        <p>Elige:</p>\
        \
        <p class='sticky'><a href='fiat'>100 euros</a></p>\
        \
        <p class='sticky'><a href='btc'>0.0026 BTC</a></p>"
    ),

    fiat: new undum.SimpleSituation(
        "<p class='transient float-right'><img src='media/games/tutorial/euro.png' class='float_right'>\
        Pasa 1 mes, y la inflacción sube un 50%, tus 100 euros se convierten en polvo..</p>\
        <p class='transient'>Click para...<a href='start'>volver a pensar la elección.</a></p>"
    ),

    btc: new undum.SimpleSituation(
        "<p class='transient float-right'><img src='media/games/tutorial/btc.png' class='float_right'>\
        Pasa el tiempo y el Bitcoin, y gracias a que es una reserva de valor sigues teniendo la misma\
        cantidad de dinero. </p>\
       <p class='transient'>Click para...<a href='trama1'>continuar.</a></p>"
      
       
    ), 

    trama1: new undum.SimpleSituation(
        "<p class='transient float-right'>Este verano vienen varios artistas a ciudades cercanas a la\
        tuya, y con el dinero de tu cumpleaños decides ir a uno de sus conciertos. Escoge a uno: </p>\
       <p class='transient'><a href='nao'>C Tangana</a></p>\
       <p class='transient'><a href='aitana'>Aitana</a></p>\
       <p class='transient'><a href='nao'>Rauw Alejandro</a></p>"
    ),

    nao: new undum.SimpleSituation(
        "<p class='transient float-right'>¿Cómo va a ser ese tu artista favorito?\
        Anda, anda, escoge a otro..... </p>\
       <p class='transient'><a href='trama1'>Click para volver a la elección</a></p>"
    ),

   
    aitana: new undum.SimpleSituation(
        "<p class='transient float-right'>Buenísima elección, no esperaba menos de ti. \
        Con tus 200€ tienes total libertad para elegir el asiento que quieras. Elígelo! .\
   <img src='media/games/tutorial/asientos.png' class='float_right'></p>\
         <p class='transient'><a href='pagar'>Zona A</a></p>\
         <p class='transient'><a href='pagar'>Zona B</a></p>\
         <p class='transient'><a href='pagar'>Zona C</a></p>\
         <p class='transient'><a href='pagar'>Zona D</a></p>"     
    ),

    pagar: new undum.SimpleSituation(
        "<p>Entrada elegida, hora de pagar. \
        Verificando que no eres un bot! \
        Captcha: </p>\
    <img src='media/games/tutorial/bot.png'>\
    <p>¿Qué código es el correcto?</p>\
         <p class='sticky'><a href='fracaso'>rabited</a></p>\
         <p class='sticky'><a href='exito'>rabbited</a></p>\
         <p class='sticky'><a href='fracaso'>rabbted</a></p>\
         <p class='sticky'><a href='fracaso'>rabitd</a></p>"     
    ),

    fracaso: new undum.SimpleSituation(
        "<p>Se ha cancelado el proceso de compra y encima has perdido todo el dinero. \
        Para la próxima vez presta más atención.</p>"
    ),

    exito: new undum.SimpleSituation(
        "<p>Una vez conseguida la entrada, necesitas un medio de transporte. Para ir\
        te planteas ir andando o en bici, pero sabiendo que el evento está a varios cientos de kilómetros\
        casi mejor ir de otra manera. <a href='adelante'>Autobus</a>, <a href='carnet'>coche</a> o \
        <a href='adelante'>tren</a></p>"
    ),

    carnet: new undum.SimpleSituation(
        "<p class='transient >¿Pero como vas a ir en coche si no tienes ni el carnet?</p>\
        <p class='transient ><a href='exito'>Volver</a></p>"
    ),
   
    adelante: new undum.SimpleSituation(
        "<p>Todo está saliendo perfecto, estás ya en tu asiento esperando con ganas que empiece el\
        concierto. Te entran ganas de ir al baño y como queda todavía 30 minutos para que empiece\
        te levantas y vas. Resulta que de camino al baño Aitana pasa al lado tuyo, te pones nervioso\
        pero tienes que tomar una decisión.</p>\
        <p><a href='sigue'>sigues tu camino hacia el baño </a><p> o \
        <p><a href='pum'>te lanzas hacía ella para saludarla.</a></p>"
        
    ),

    pum: new undum.SimpleSituation(
        "<p>Resulta que los guardias de seguridad con los que iba tenían orden de aplacar\
        a cualquier persona que se acercase a ella de manera repentina. Directo al hospital y....\
        aquí acaba tu viaje.</p>"
    ),

    sigue: new undum.SimpleSituation(
        "<p>Vas al baño, vuelves a tu sitio y te lo pasas perfecto. Ya es hora de volver a casa,\
        vuelves por el mismo medio en el que fuiste. Estás reventado de\
        todo el viaje, por lo que te tumbas en la cama\
        y te quedas durmiendo.\
        ----FIN----\</p>"
    ),
   



   
    

};
// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

