describe(`Unit Test`,()=>{
    let builder;

    beforeEach(()=>{
        builder = new PaymentPackage(`Pesho`, 20);
    });

    describe(`Errors in name`,()=>{
        it(`should return Errors`,()=>{
            expect(()=>builder.name = 4).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.name = []).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.name = {}).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.name = ``).to.throw(Error);
        })
    });
    describe(`Errors in value`,()=>{
        it(`should return Errors`,()=>{
            expect(()=>builder.value = -1).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.value = []).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.value = {}).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.value = `sdcsdc`).to.throw(Error);
        })
    });
    describe(`Errors in Vat`,()=>{
        it(`should return Errors`,()=>{
            expect(()=>builder.VAT = -1).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.VAT = []).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.VAT = {}).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.VAT = `sdcsdc`).to.throw(Error);
        })
    });
    describe(`Errors in active`,()=>{
        it(`should return Errors`,()=>{
            expect(()=>builder.active = 23).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.active = []).to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.active = 'asda').to.throw(Error);
        });
        it(`should return Errors`,()=>{
            expect(()=>builder.active = {}).to.throw(Error);
        })
    });


    describe(`Functionality`,()=>{
        it(`should return correct name`,()=>{
            expect(builder.name).to.equal(`Pesho`)
        });
        it(`should return correct name`,()=>{
            builder.name = `p`;
            expect(builder.name).to.equal(`p`)
        });
        it(`should return correct value`,()=>{
            expect(builder.value).to.equal(20)
        });
        it(`should return correct value`,()=>{
            builder.value = 0;
            expect(builder.value).to.equal(0)
        });
        it(`should return correct Vat`,()=>{
            expect(builder.VAT).to.equal(20)
        });
        it(`should return correct Vat`,()=>{
            builder.VAT = 0;
            expect(builder.VAT).to.equal(0)
        });
        it(`should return correct active`,()=>{
            expect(builder.active).to.equal(true)
        });
        it(`should return correct active`,()=>{
            builder.active = false;
            expect(builder.active).to.equal(false)
        })
    });
    describe(`ToString functionality`,()=>{

        it(`ToString with active true`,()=>{
            builder.name = `Marian`;
            builder.value = 10;

            expect(builder.toString()).to.equal('Package: Marian\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12')
        });
        it(`ToString with active false`,()=>{
            builder.name = `Marian`;
            builder.value = 10;
            builder.active = false;

            expect(builder.toString()).to.equal('Package: Marian (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12')
        });
    })

});