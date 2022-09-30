const confictionaryShop = {
    name: 'varity Confectionary LTD.',
    shopNo: 10014,
    productTypes: ['dailyNeeds', 'chips', 'cokes', 'equipments'],
    dailyNeedsPricesPerKG: {chaal:50, daal: 110, suger: 90, solt: 30, masala: 500},
    iceCreamPirce: 30.5,

    homeDelelvary: function( dailyNeedsInputs, weight){
        if(dailyNeedsInputs == 'chaal'){
            return (50 * weight);
        }
        if(dailyNeedsInputs == 'daal'){
            return (110 * weight);
        }
    },

    chipsCal: quntatity => {
        let vat = 10;
        const chipsPrice = quntatity * 10;
        const totalPrice = vat + chipsPrice;
        return totalPrice;
    },
    
    petrolPrice: function() {
        const price = 89;
        // return price;
        this.shopNo = this.shopNo - price;
        return this.shopNo;
    },

    getProductTypes: function() {
        const products = this.productTypes;
        const items = products.forEach(element => console.log(element));
        // return items;
    }
    
    
}

const homeDelelvaryProduct = confictionaryShop.homeDelelvary('chaal', 20);
const chipsPrice = confictionaryShop.chipsCal(20);
const petrolPrice = confictionaryShop.petrolPrice();
const products = confictionaryShop.getProductTypes();
// console.log(homeDelelvaryProduct);
// console.log(chipsPrice);
// console.log(petrolPrice);
// console.log(products);


