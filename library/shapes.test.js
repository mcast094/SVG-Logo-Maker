const {Circle, Square, Triangle} = require("./shapes");


describe('Shapes', () => {
    // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  
    describe('Circle', () => {
      it('should return false for password less than 8 characters long', () => {
        const circle = new Circle("ABC", "red", "green");
  
        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" data-arp-injected="true"><circle cx="150" cy="100" r="80" fill="${circle.colorOfShape}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.colorOfText}">${circle.text}</text></svg>`);
      });
    });
  
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  
    
  });
  