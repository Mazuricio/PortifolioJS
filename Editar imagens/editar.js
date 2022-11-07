const Jimp = require("jimp")

async function editar(imagem){
    const texto = "@saturdayrandom"
    //ler imagem
    const Imagem = await Jimp.read(imagem)
    //const fonte = await Jimp.loadFont("fonte_16.fnt")
    const fonte = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE)
    Imagem.print(fonte, 5, 2, texto)
    Imagem.write("new_fausto.jpg")
}
const arquivo = "fausto.jpg"
editar(arquivo)