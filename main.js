let texts = document.querySelector('.tes')

const recognition = new webkitSpeechRecognition();
recognition.lang = 'th-TH'
recognition.continuous = true;
recognition.interimResults = true;

let p = document.createElement('p')

var word = ['กล้วยหอมการบ้าน'];



recognition.addEventListener("result", function(event)  {
    const text = Array.from(event.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join(' ')
    
    console.log(text)
    p.innerText = text
    texts.appendChild(p)
   
});

recognition.start()

