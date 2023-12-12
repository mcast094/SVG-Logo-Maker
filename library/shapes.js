class shape {
    constructor(text, colorOfText, colorOfShape) {
        this.colorOfText = colorOfText;
        this.text = text;
        this.colorOfShape = colorOfShape;
    }
    render(){
        return;
    }
}

class Circle extends shape {
    constructor(text, colorOfText, colorOfShape){
        super(text, colorOfText, colorOfShape);
    }
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><circle cx="150" cy="100" r="80" fill="${this.colorOfShape}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorOfText}">${this.text}</text></svg>`;
    }
}

class Square extends shape {
    constructor(text, colorOfText, colorOfShape){
        super(text, colorOfText, colorOfShape);
    }
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><rect x="10" y="10" width="300" height="200" fill="${this.colorOfShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorOfText}">${this.text}</text></svg>`;
    }
}

class Triangle extends shape {
    constructor(text, colorOfText, colorOfShape){
        super(text, colorOfText, colorOfShape);
    }
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.colorOfShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorOfText}">${this.text}</text></svg>`;
    }
}
module.exports = {Circle, Square, Triangle};