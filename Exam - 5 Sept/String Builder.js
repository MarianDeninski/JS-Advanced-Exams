describe(`UnitTesting`,()=>{
    let stringBuilder;


    describe(`Initialization`,()=>{
        beforeEach(()=>{
            stringBuilder = new StringBuilder();
        });
        it(`the class has his own property`,()=>{
            expect(stringBuilder.hasOwnProperty(`_stringArray`)).to.equal(true);
        });

        it(`initialization of the properties in the prototype`,()=>{
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty(`append`)).to.equal(true);
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty(`prepend`)).to.equal(true);
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty(`insertAt`)).to.equal(true);
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty(`remove`)).to.equal(true);
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty(`toString`)).to.equal(true);
        })
    });
    describe(`The functionality of the properties`,()=>{
        let string = 'hello';

        beforeEach(function () {
            stringBuilder = new StringBuilder(string);
        });
        describe(`Errors`,()=>{
           it(`should return TypeError`,()=>{
               expect(()=>stringBuilder.append(5)).to.throw(TypeError);
           });
            it(`should return TypeError`,()=>{
                expect(()=>stringBuilder.prepend(5)).to.throw(TypeError);
            });
            it(`should return TypeError`,()=>{
                expect(()=>stringBuilder.insertAt(3,1)).to.throw(TypeError);
            });
        });
        describe(`append`,()=>{

            it('appends correctly', function () {
                let str = ', world';
                stringBuilder.append(str);
                compareArrays(stringBuilder._stringArray, Array.from(string + str));
            });
        });
        describe(`prepend`,()=>{

            it('prepend correctly', function () {
                let str = ', world';
                stringBuilder.prepend(str);
                compareArrays(stringBuilder._stringArray, Array.from(str + string));
            });
        });
        describe(`insert at`,()=>{

            it('insert at', function () {
                let str = ', world';
                stringBuilder.insertAt(str,string);
                compareArrays(stringBuilder._stringArray, Array.from(str+string));
            });
        });
        describe(`remove`,()=>{

            it('remove', function () {
                stringBuilder.remove(1,2);
                compareArrays(stringBuilder._stringArray, Array.from(`hlo`));
            });
        });
        describe(`toString`,()=>{

            it('toString', function () {

                expect(stringBuilder.toString()).to.equal(string)
            });
        })

    });
    function compareArrays(source, expected) {
        expect(source.length).to.equal(expected.length);
        for (let i = 0; i < source.length; i++) {
            expect(source[i]).to.equal(expected[i]);
        }
    }
});