const {Circle, Square, Triangle} = require("./shapes");

describe('Shapes', () => {
  
    describe('Circle', () => {
      it('should return true for circle', () => {
        const circle = new Circle("ABC", "red", "green");
  
        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><circle cx="150" cy="100" r="80" fill="${circle.colorOfShape}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.colorOfText}">${circle.text}</text></svg>`);
      });
    });
  
    describe('Square', () => {
      it('should return true for square', () => {
        const square = new Circle("ABC", "red", "green");

        expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><rect x="10" y="10" width="300" height="200" fill="${this.colorOfShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorOfText}">${this.text}</text></svg>)`);
      });
    });

    describe('Triangle', () => {
      it('should return true for triangle', () => {
          const triangle = new Triangle("ABC", "red", "green");

        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.colorOfShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorOfText}">${this.text}</text></svg>`);
      });
    });
  });
  