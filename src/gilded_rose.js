function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));



function AgedBrie(cheese) {

    //console.log('Cheese: ' , '-', cheese , '-' , cheese.name , ' - ' cheese.sell_in, ' - ' , cheese.quality);

    if (cheese.quality < 50) {
        cheese.quality += 1
    }


}


function normal(item) {

    if(item.sell_in < 0){
        item.quality -= 1
    }

    if (item.quality < 50) {
        item.quality -= 1
    }

    if(item.quality < 0){
      item.quality = 0
    }


}

function backstage(pass) {

    if (pass.sell_in < 0) {
        pass.quality = 0
    }
    else if (pass.sell_in <= 5) {
        pass.quality += 3
    }
    else if (pass.sell_in <= 10) {
        pass.quality += 2
    } else {
        pass.quality += 1
    }

}






function update_quality() {

    //if(items[0].name)
    for (var i = 0; i < items.length; i++) {

        //'Sulfuras, Hand of Ragnaros' code
        if (items[i].name === 'Sulfuras, Hand of Ragnaros') {
            continue;
        }

        //decrease sell_in for all
        items[i].sell_in -= 1

        //Agedbrie function
        if (items[i].name === 'Aged Brie') {
            AgedBrie(items[i])
            continue;
        }

        // backstage pass function
        if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
            backstage(items[i])
            continue;
        }

        // normal items
        else {
            normal(items[i])
            continue
        }

    }
}
