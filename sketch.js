let sourceText;
let poem;
let gloria;
let startIndex = 0;

function preload(){
    gloria = loadImage("cat48.jpg");
    sourceText = loadStrings("cat.txt");
}

function setup(){
    createCanvas(700, 700);
    poem = sourceText.join(' ');
    textFont("Courier-Bound");
    text
    
}

function draw(){
    background(0);
    frameRate(10);


    let charIndex = startIndex;
    let w = width / gloria.width;
    let h = height / gloria.height;
    gloria.loadPixels();
        
        for (let j = 0; j < gloria.height; j++){
            for(let i = 0; i < gloria.width; i++){
                const pixelIndex = (i + j * gloria.width) * 4;
                const r = gloria.pixels[pixelIndex + 0];
                const g = gloria.pixels[pixelIndex + 1];
                const b = gloria.pixels[pixelIndex + 2];
                const avg = (r + g + b) / 3;

                noStroke();
                fill(avg);
                textSize(w*1.3);
                textAlign(CENTER, CENTER);

                text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
                charIndex++;

            }
        }
        startIndex++;
}