describe(`Unit Testing`,()=>{

    let sumator;
    beforeEach(()=>{
        sumator = new Sumator();
    });
    describe(`Inicialization`,()=>{
        it(`should return the correct answer`,()=>{
            expect(sumator.hasOwnProperty(`data`)).to.be.equal(true);
        });
        it(`should return the correct answer`,()=>{
            expect(Object.getPrototypeOf(sumator).hasOwnProperty(`add`)).to.be.equal(true);
            expect(Object.getPrototypeOf(sumator).hasOwnProperty(`sumNums`)).to.be.equal(true);
            expect(Object.getPrototypeOf(sumator).hasOwnProperty(`removeByFilter`)).to.be.equal(true);
            expect(Object.getPrototypeOf(sumator).hasOwnProperty(`toString`)).to.be.equal(true);
        })
    });
    describe(`add`,()=>{
        it(`should return correct answer`,()=>{
            sumator.add('Marian');
            sumator.add({obj:'asd'});
            sumator.add([`asd`,`dsa`]);
            sumator.add(5);
            expect(sumator.toString()).to.be.equal(`Marian, [object Object], asd,dsa, 5`)
        })
    });
    describe(`sumNums`,()=>{
        it(`should return correct answer`,()=>{
            sumator.add('Marian');
            sumator.add({obj:'asd'});
            sumator.add([`asd`,`dsa`]);
            sumator.add(5);
            sumator.add(10);
            expect(sumator.sumNums()).to.be.equal(15)
        });
        it(`should return correct answer`,()=>{
            sumator.add('Marian');
            sumator.add({obj:'asd'});
            sumator.add([`asd`,`dsa`]);
            expect(sumator.sumNums()).to.be.equal(0)
        })
    });
    describe(`removeByFilter`,()=>{
        it(`should return correct answer`,()=>{
            sumator.add(5);
            sumator.add(10);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.be.equal(`5`)
        });
    });
    describe(`toString`,()=>{
        it(`should return correct answer`,()=>{
            expect(sumator.toString()).to.be.equal('(empty)')
        });
    })
});