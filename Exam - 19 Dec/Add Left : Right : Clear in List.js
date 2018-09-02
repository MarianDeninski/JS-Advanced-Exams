describe(`Test makeList`,()=>{
    let list;
    beforeEach(()=>{
        list = makeList();
    });

    describe(`addLeft tests`,()=>{
        it(`adding one item should work properly`,()=>{
            list.addLeft(1);
            expect(list.toString()).to.equal(`1`);
        });
        it(`adding multiple items in the area`,()=>{
            list.addLeft(1);
            list.addLeft({bjs:'asd'});
            list.addLeft('asd');
            list.addLeft(['asd','dsa']);
            expect(list.toString()).to.equal(`asd,dsa, asd, [object Object], 1`);
        })
    });
    describe(`addRight`,()=>{
        it(`adding one item should work properly`,()=>{
            list.addRight(1);
            expect(list.toString()).to.equal(`1`);
        });
        it(`adding multiple items in the area`,()=>{
            list.addRight(1);
            list.addRight({bjs:'asd'});
            list.addRight('asd');
            list.addRight(['asd','dsa']);
            expect(list.toString()).to.equal(`1, [object Object], asd, asd,dsa`);
        })
    });
    describe(`clear`,()=>{
        it(`clear all items`,()=>{
            list.addRight(1);
            list.addRight({bjs:'asd'});
            list.addRight('asd');
            list.addRight(['asd','dsa']);
            list.clear();
            expect(list.toString()).to.equal(``);
        })
    })
});