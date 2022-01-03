describe('calc.js', function() {

    it('should add numbers to total', function() {
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5)
    });

    it('should subtract a number from the total', function() {
        const calculator = new Calculator();
        calculator.total = 11;
        calculator.subtract(5);

        expect(calculator.total).toEqual(6)
    });

    it('should multiply a number from the total', function() {
        const calculator = new Calculator();
        calculator.total=2;
        calculator.multiply(5)

        expect(calculator.total).toBe(10);
    });

    it('should divide a number from the total', function() {
        const calculator = new Calculator();
        calculator.total=100;
        calculator.divide(10)

        expect(calculator.total).toBe(10)
    });

    it('should instantiate the total', function() {
        const calculator = new Calculator();
        
        expect(calculator.total).toBeFalsy()
        expect(calculator.total).toBe(0)
    })

    it('can be instantiated', function() {
        const calculator1 = new Calculator();
        const calculator2 =  new Calculator();

        expect(calculator1).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator1).toEqual(calculator2);
        expect(calculator1.constructor.name).toContain("Cal")
    })

    it('instantiates unique object', function() {
        const calculator1 = new Calculator();
        const calculator2 =  new Calculator();

        expect(calculator1).not.toBe(calculator2);
    })

    it('has common operations', function() {
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined();
        expect(calculator.subtract).toBeDefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
    })

    it('can overwrite total', function() {
        const calculator = new Calculator();
        calculator.total = null;

        expect(calculator.total).toBeNull()
    })

    it('does not handle NaN', function() {
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a');

        expect(calculator.total).toBeNaN();
    })

    it('handles divide by zero', function() {
        const calculator = new Calculator();

        expect(function() {calculator.divide(0)}).toThrow();
        expect(function() {calculator.divide(0)}).toThrowError(Error);
        expect(function() {calculator.divide(0)}).toThrowError(Error,"Cannot divide by 0");
    })

     it('returns total', function() {
         const calculator = new Calculator();
         calculator.total = 20;

         expect(calculator.add(80)).toBe(100);
         expect(calculator.total).toMatch(/-?\d+/);
         expect(typeof calculator.total).toMatch('number');
         expect(calculator.total).toEqual(jasmine.anything());
     })
})