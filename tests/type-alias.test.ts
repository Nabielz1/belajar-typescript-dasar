import { Category } from "../src/type-alias";

describe('type-alias', function() {
    it('should support type alias', function() {

        const category: Category = {
            id: 1,
            name: "Handphone"
        }

        const product = {
            id: 1,
            name: "Samsung Galaxy S23",
            price: 15000000,
            category: category
        }

        console.info(category);
        console.info(product);

    });
});