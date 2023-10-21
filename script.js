// переменные
body = document.querySelector(".body");
cbs = document.querySelector(".cbs")

// переменная для вставки изображения
sertifacete = "";

// кнопка закрытия открытого сертификата
document.querySelector(".close-png").addEventListener('click', function() { 
    body.style = "overflow: scroll;";
    document.querySelector('.cbs-container').style = "display:none";
    cbs.remove();
})

const btnCard = document.querySelectorAll('.btn-magnifier');
function os() {
    sertifacete = event.target.getAttribute('name');
    console.log(sertifacete);
    body.style = "overflow: hidden;";
    open_sertificate(sertifacete)
}
btnCard.forEach((button) => { button.addEventListener('click', os); });

// функция html кода открытого сертификата
function open_sertificate() {
    document.querySelector('.cbs-container').style = "display:block";
    cbs.innerHTML = `
    <div class="click-sertificate">
        <div class="container-background"></div>
        <div class="container-big_sertificate">
            <img class="big-sertificate" src="file/img/${sertifacete}.jpg" alt="">
        </div>
    </div>`;
    document.body.prepend(cbs);
}




Img = document.querySelectorAll('.img-width')
function sizeWidnow1430() { Img.forEach((img) => { img.style = `width: ${(window.innerWidth - 160)/4.2}px` }) } sizeWidnow1430()
function sizeWidnow1120() { Img.forEach((img) => { img.style = `width: ${(window.innerWidth - 100)/2.2}px` }) }
function sizeWiddowPhone() { Img.forEach((img) => { img.style = `width: 100%` }) }
if (window.innerWidth > 720 && window.innerWidth <1120) { sizeWidnow1120() }
if (window.innerWidth <= 720) { sizeWiddowPhone() }
// изменение размера наведения
blocksImg = document.querySelectorAll('.block-img')
blocksHover = document.querySelectorAll('.block-hover-img')

function sizeHover() {
    blocksHover.forEach((blockhover) => {
        blocksImg.forEach((blockimg) => {
            blockhover.style = `
                width: ${blockimg.offsetWidth}px; 
                height: ${blockimg.offsetHeight}px;`
            if (blockimg.offsetHeight == 14) { 
                blockhover.style = `
                    width: ${blockimg.offsetWidth}px;
                    height: ${blockimg.offsetWidth * 1.4144}px;` 
                }
            
        })
    })
}


window.addEventListener("resize", (event) => {
    if (window.innerWidth > 1120) { sizeWidnow1430() }
    if (window.innerWidth > 720 && window.innerWidth <1120) { sizeWidnow1120() }
    if (window.innerWidth < 720) { sizeWiddowPhone() }
    sizeHover()

})
sizeHover()