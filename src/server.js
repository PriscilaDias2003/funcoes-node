const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
    const { operationType, valueA, valueB, valueC, valueD, valueE } = req.body;

    let result;
    switch (operationType) {
        case 'ruleOfThree':
            // Regra de três: valorC (novo valor base) para encontrar o valor correspondente à proporção de valorA e valorB
            result = (valueC * valueB) / valueA;
            break;
        case 'highestValue':
            // Encontrar o maior valor entre cinco números
            result = Math.max(valueA, valueB, valueC, valueD, valueE);
            break;
        case 'lowestValue':
            // Encontrar o menor valor entre cinco números
            result = Math.min(valueA, valueB, valueC, valueD, valueE);
            break;
        default:
            result = 'Operação desconhecida';
    }
    res.send(`Resultado: ${result}`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
