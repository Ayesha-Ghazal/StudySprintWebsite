function welcomeMessage()
{
    alert("Welcome to StudySprint!");
}

let time = 1500;

function startTimer()
{
    let timer = setInterval(function ()
    {
        let minutes = Math.floor(time / 60);

        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").innerHTML =
            minutes + ":" + seconds;

        time--;

        if (time < 0)
        {
            clearInterval(timer);

            alert("Study Session Complete!");
        }

    }, 1000);
}