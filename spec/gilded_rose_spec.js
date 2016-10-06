function update(){
  items = []
  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Cake', 3, 6));
}


describe("Gilded Rose", function() {
    describe("testing the item set", function() {


            it("creates an item and add to items array", function() {

                items.push(new Item('Pen', 5, 10))
                expect(items.length).toBe(7)

            })

            it("creates a new Aged Brie and assign both sell_in and quailty to 0", function() {
                update()
                items.push(new Item('Aged Brie', -5, 57))
                update_quality()
                expect(items[6].quality).toBe(57)


            })

            it("access the new items properties of all items", function() {
                update()
                expect (items[0].sell_in).toBe(10)
                expect(items[0].quality).toBe(20)
                expect(items[2].sell_in).toBe(5)
                expect(items[2].quality).toBe(7)



            })

            describe("testing the updater function", function() {

              it("all normal items sell_in decrease by 1", function() {
                  update()
                  update_quality()
                  expect (items[0].sell_in).toBe(9)
                  expect(items[2].sell_in).toBe(4)
                  expect(items[4].sell_in).toBe(14)
                  expect(items[5].sell_in).toBe(2)



              })


                it('quality of an item is never negative', function() {

                    update()
                    update_quality()
                    update_quality()
                    update_quality()
                    update_quality()
                    update_quality()
                    update_quality()

                    expect(items[5].quality).toBe(0)

                })

                it('checking that the sell_in and quality decreases by 1 for a normal item', function() {

                    update()
                    update_quality()
                    expect(items[5].sell_in).toBe(2)
                    expect(items[5].quality).toBe(5)

                })

                it('checking that a sell_in below 0, qualtiy decreases twice as fast', function() {

                    items[6] = new Item('Pen', 2, 10)
                    update_quality()
                    update_quality()
                    update_quality()

                    expect(items[6].quality).toBe(6)
                })

                it('checking Aged Brie increases with quailty daily', function() {


                    update()
                    update_quality()
                    expect(items[1].quality).toBe(1)
                    expect(items[1].sell_in).toBe(1)

                })
                it('checking quality of item is never greater than 50', function() {

                    update()
                    items[5] = new Item('Aged Brie', 3, 50)
                    console.log("Before update ", items[5])
                    update_quality()
                    console.log("After update ", items[5])
                    expect(items[5].quality).toBe(50)

                })


                it('checking Sulfuras, Hand of Ragnaro\'s quality does not increase', function() {
                    update()
                    expect(items[3].quality).toBe(80)
                    expect(items[3].sell_in).toBe(0)
                })

                it('checking Sulfuras, Hand of Ragnaro\'s boundry conditions (sell_in = -1)', function() {
                    update()
                    items.push(new Item('Sulfuras, Hand of Ragnaros', -1, -80));
                    expect(items[6].sell_in).toBe(-1)
                    expect(items[6].quality).toBe(-80)

                })




            })

            describe('Backstage Passes Tests',
                function() {
                    it('check when sell_in is greater than 10 that quality inscrease by 1', function() {
                        update()
                        update_quality()
                        expect(items[4].sell_in).toBe(14)
                        expect(items[4].quality).toBe(21)

                    })
                    it('check when sell_in is less than 10 that quality inscrease by 2', function() {
                        update()
                        items[4] = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20)
                        update_quality()
                        expect(items[4].sell_in).toBe(8)
                        expect(items[4].quality).toBe(22)

                    })

                    it('check when sell_in is less than 5 that quality inscrease by 3', function() {
                        update()
                        items[4] = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20)
                        update_quality()
                        expect(items[4].sell_in).toBe(3)
                        expect(items[4].quality).toBe(23)

                    })
                    it('check when sell_in is 0 that quality drops to 0', function() {
                        update()
                        items[4] = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
                        update_quality()
                        expect(items[4].sell_in).toBe(-1)
                        expect(items[4].quality).toBe(0)

                    })
                    it('check when sell_in and quality start at 0', function() {
                        update()
                        items[4] = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
                        update_quality()
                        expect(items[4].sell_in).toBe(-2)
                        expect(items[4].quality).toBe(0)

                    })
                })


    })
});
