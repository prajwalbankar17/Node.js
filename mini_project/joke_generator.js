import https from "https";
import chalk from "chalk";

const getJocke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, (response) => {
        response.on('end', () =>  {
            console.log(`Here is a random ${getJocke.type} joke: `);
            console.log(chalk.red(`${getJocke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${getJocke.punchline}`));
        })
        response.on ('error', (err) => {
            console.log(`Error fetching the joke, ${err.message}`);
        });
    })
}

getJocke();










