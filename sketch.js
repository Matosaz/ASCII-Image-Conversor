let sourceText;
let poem;
let img;
let startIndex = 0;
let imgReady = false; // Variável para controlar se a imagem está pronta

function preload() {
  sourceText = loadStrings("cat.txt");
}

function setup() {
  createCanvas(700, 700);
  poem = sourceText.join(' ');

  // Cria um input para o upload de imagens
  let fileInput = createFileInput(handleFile);
  fileInput.position(0, height + 10); // Posiciona o input logo abaixo do canvas
}

function draw() {
  background(0);
  
  if (imgReady) {  // Só desenha se a imagem estiver pronta
    img.loadPixels();

    let charIndex = startIndex;
    let w = width / img.width;  // Largura de cada célula no canvas
    let h = height / img.height; // Altura de cada célula no canvas

    for (let j = 0; j < img.height; j++) {
      for (let i = 0; i < img.width; i++) {
        const pixelIndex = (i + j * img.width) * 4;
        const r = img.pixels[pixelIndex + 0];
        const g = img.pixels[pixelIndex + 1];
        const b = img.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;

        noStroke();
        fill(avg);
        textSize(w * 1.3);
        textAlign(CENTER, CENTER);

        text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
        charIndex++;
      }
    }

    startIndex++;
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    // Carrega a imagem e, quando carregada, redimensiona e define imgReady como true
    loadImage(file.data, (loadedImg) => {
      img = loadedImg;
      img.resize(48, 48);
      imgReady = true;  // Marca que a imagem está pronta
    });
  } else {
    console.log("O arquivo carregado não é uma imagem.");
  }
}
