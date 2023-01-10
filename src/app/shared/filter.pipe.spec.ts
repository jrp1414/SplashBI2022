import { Product } from "../products/products";
import { FilterTempPipe } from "./filter.pipe";


const products: Product[] = [
    {
        "id": 1,
        "title": "Brown eggs",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "availibility": true,
        "safeFor": 1,
        "qualityScore": 1,
        "Tags": [],
        "Addresses": [
            {
                "AddLine1": "Pune",
                "AddLine2": "Pune",
                "AddLine3": "Pune",
                "City": "Pune",
                "State": "Pune"
            },
            {
                "AddLine1": "Hyderabad",
                "AddLine2": "Hyderabad",
                "AddLine3": "Hyderabad",
                "City": "Hyderabad",
                "State": "Telengana"
            }
        ],
        "price": 2.1,
        "rating": 4,
        "imageurl": "https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"
    },
    {
        "id": 2,
        "title": "Sweet fresh stawberry",
        "type": "fruit",
        "description": "Sweet fresh stawberry on the wooden table",
        "availibility": false,
        "safeFor": 1,
        "qualityScore": 1,
        "Tags": [],
        "Addresses": [
            {
                "AddLine1": "",
                "AddLine2": "",
                "AddLine3": "",
                "City": "",
                "State": ""
            }
        ],
        "price": 29.45585,
        "rating": 4,
        "imageurl": "https://image.freepik.com/free-photo/sweet-fresh-strawberry-wooden-table_221774-7430.jpg"
    },
    {
        "id": 3,
        "title": "Asparagus",
        "type": "vegetable",
        "description": "Asparagus with ham on the wooden table",
        "availibility": false,
        "safeFor": 1,
        "qualityScore": 1,
        "Tags": [],
        "Addresses": [
            {
                "AddLine1": "",
                "AddLine2": "",
                "AddLine3": "",
                "City": "",
                "State": ""
            }
        ],
        "price": 18.95,
        "rating": 3,
        "imageurl": "https://image.shutterstock.com/image-photo/asparagus-ham-on-tray-wooden-600w-325536839.jpg"
    }
];

describe("Filter Pipe Test", () => {
    let filterPipe:FilterTempPipe;    
    beforeAll(()=>{
        filterPipe = new FilterTempPipe();
    });

    it("Should return 1 expected Product", ()=>{
        // let filterPipe = new FilterTempPipe();
        expect(filterPipe.transform(products,"brow","title").length).toEqual(1);
    });

    it("Should return 3 of the filtered product id", ()=>{
        // let filterPipe = new FilterTempPipe();
        expect((filterPipe.transform(products,"Aspa","title") as Product[])[0].id).toEqual(3);
    });
});