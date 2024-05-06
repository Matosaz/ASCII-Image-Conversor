let sourceText;
let poem;
let cat;
let startIndex = 0;

function preload(){
    cat = loadImage("cat48.jpg");
    sourceText = loadStrings("cat.txt");
}

function setup(){
    createCanvas(700, 700);
    poem = sourceText.join(' ');
}

function draw(){
    background(0);
    frameRate(10);

    cat.loadPixels();


    let charIndex = startIndex;
    let w = width / cat.width;
    let h = height / cat.height;
        
        for (let j = 0; j < cat.height; j++){
            for(let i = 0; i < cat.width; i++){
                const pixelIndex = (i + j * cat.width) * 4;
                const r = cat.pixels[pixelIndex + 0];
                const g = cat.pixels[pixelIndex + 1];
                const b = cat.pixels[pixelIndex + 2];
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
