const { Console } = require("console")
let fs = require("fs")
const { EOL } = require("os")

let prompt = require("prompt")

prompt.start()


prompt.get("arquivoDeInput", (err, resultado) => {


    let texto = fs.readFileSync(resultado.arquivoDeInput, 'utf-8').toUpperCase()

    console.log(texto)

    let separado = texto.split('')

    console.log(separado)

    prompt.get("senha", (err, result) => {
        let senha = result.senha.split('')
        let soma = ""

        senha.forEach(element => {
            soma += element.charCodeAt(0)
        });

        let enumerado = []

        separado.forEach(letra => {
            enumerado.push(letra + "%" + soma + "%")
        })


        let letraAleatoria = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]

        let letraAtual = ""

        let extra = []

        let count = 0

        enumerado.forEach(letra => {
            
            extra.push(enumerado[count]);

            for (let letrasPorBloco = 0; letrasPorBloco < 4; letrasPorBloco++) {


                letraAtual = letraAleatoria[Math.floor(Math.random() * 26)] + "%"

                for (let tamanho = 0; tamanho < soma.length; tamanho++) {

                    let offset = (Math.random() * 10).toFixed(0).toString()
                    letraAtual += offset
                }
                    

                extra.push(letraAtual + "%")
            }

            count++;

        })

        console.log(extra)

        extra.forEach(letra => {
            fs.appendFileSync('resultado.txt', letra)
        })

    })






})

