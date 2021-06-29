const reloj = document.querySelector(".reloj");
var horaGlobal = 0;

const getHora = () => 
{
    const fecha = new Date();

    const tiempo = 
    {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo: fecha.getSeconds(),
    };

    reloj.innerHTML = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo}`;
    if(`${tiempo.minuto}` < 10)
        tiempo.minuto = 0 + `${tiempo.minuto}`;
    if(`${tiempo.hora}` < 10)
        tiempo.hora = 0 + `${tiempo.hora}`;

    reloj.innerHTML = `${tiempo.hora} : ${tiempo.minuto}`;
    horaGlobal = `${tiempo.hora}`;
};

const changeSaludo = () =>
{
    const saludo = document.querySelector(".saludo");

    if(horaGlobal >= 0 && horaGlobal < 7)
        saludo.innerHTML = "Buenas Noches, Jesús";
    else if(horaGlobal >= 7 && horaGlobal < 12)
        saludo.innerHTML = "Buenos Dias, Jesús";
    else if(horaGlobal >= 12 && horaGlobal < 19)
        saludo.innerHTML = "Buenas Tardes, Jesús";
    else if(horaGlobal >= 19)
        saludo.innerHTML = "Buenas Noches, Jesús";
}

window.onload = function() 
{
    getHora();
    changeSaludo();
};

setInterval(getHora, 10000);
setInterval(changeSaludo, 3600000);