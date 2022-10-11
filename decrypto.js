const { Console } = require("console")
let fs = require("fs")
const { EOL } = require("os")

let prompt = require("prompt")

prompt.start()



prompt.get("arquivoDeInput", (err, resultado) => {
    prompt.get("senha", (err, senha) => {

        let texto = fs.readFileSync(resultado.arquivoDeInput, 'utf-8').toUpperCase().split('%')

        let descrypto = senha.senha.split('')

        let senhaChar = ""

        let textoOriginal = ""

        descrypto.forEach(element => {
            senhaChar += element.charCodeAt(0)
        });

        texto.map((parte, i) => {
            
            if(i % 2){
                if(senhaChar == parte){
                    textoOriginal += texto[i-1]
                }
            }
        })

        fs.writeFileSync('desencriptado.txt', textoOriginal)
    })
})




