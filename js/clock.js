const reloj = document.querySelector(".reloj");

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
};

setInterval(getHora, 300);