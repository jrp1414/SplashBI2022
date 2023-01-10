import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Product } from "../products/products";
import { FilterTempPipe } from "./filter.pipe";
import { LocalStorageService } from "./localstorage.service";
import { LoggerService } from "./logger.service";
import { ProductService } from "./product.service";


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

describe("Product Service Test", () => {
    let httpClientSpy: { get: jasmine.Spy };
    let ps: ProductService; 
    let logger: LoggerService;
    let ls: LocalStorageService;
    beforeAll(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        TestBed.configureTestingModule({ providers: [LoggerService, LocalStorageService] });
        logger = TestBed.inject(LoggerService);
        ls = TestBed.inject(LocalStorageService);
        ps = new ProductService(logger, httpClientSpy as any, ls);
    });
 
    it("GetProducts Should return 3 Products", () => {
        httpClientSpy.get.and.returnValue(of(products));

        ps.getProducts().subscribe((data => {
            expect(data.length).toEqual(3);
        }));
    });

    
});