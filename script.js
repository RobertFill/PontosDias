function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('image');
    let img2 = window.document.getElementById('image2')
    let msg2 = window.document.getElementById('hi');

    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()


    msg.innerHTML = `Agora são  exatamente <strong>${hora}</strong> horas e <strong>${min}</strong> minutos.`

    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = 'Bom dia'
        img.src = './assets/imagemanhã.jpg'
        img2.src = './assets/fundoSol.png'
        document.body.style.background = 'orange'
        


    } else if (hora >= 12 && hora < 18) {
        msg2.innerHTML = 'Boa tarde'
        img.src = './assets/imagetarde.jpg'
        img2.src = './assets/fundoSolTarde.png'
        document.body.style.background = 'rgba(255, 68, 0, 0.925)'
    } else {
        msg2.innerHTML = 'Boa noite'
        img.src = './assets/imagenoite.jpg'
        img2.src = './assets/fundoLua.png'
        document.body.style.background = ' rgb(53, 0, 53)'
    }

}