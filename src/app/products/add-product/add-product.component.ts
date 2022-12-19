import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/product.service';
import { RangeValidator } from 'src/app/shared/range.validator';
import { Product, products } from '../products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent implements OnInit {
  productList: Product[] = [];
  product?: Product;
  types: any[] = [];
  productForm!: FormGroup;
  tags: FormArray = this.fb.array([
    this.fb.group({
      id: 0,
      tag1: ""
    })
  ]);
  Addresses: FormArray = this.fb.array([
    this.fb.group({
      AddLine1: "",
      AddLine2: "",
      AddLine3: "",
      City: "",
      State: ""
    })
  ]);;
  constructor(private ps: ProductService, private fb: FormBuilder, private route: ActivatedRoute,
    private toast: MessageService, private router:Router) {
    // this.productList = this.ps.getProducts();
    // this.types = [...new Set(this.productList.map(m => m.type))];
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      typeid: ["", Validators.required],
      description: ["", Validators.maxLength(100)],
      availibility: false,
      safeFor: 0,
      qualityScore: 0,
      price: [0, RangeValidator(1, 95)],
      rating: 0,
      imageUrl: "",
      tags: this.tags,
      Addresses: this.Addresses
    });
    this.route.data.subscribe((data) => {
      this.product = data["prod"];
      this.types = data["types"];            
    });

    this.productForm.get("availibility")?.valueChanges.subscribe((v: any) => {
      let description = this.productForm.get("description") as FormControl;
      if (v) {
        description.setValidators(Validators.required);
      } else {
        description.clearValidators();
      }
      description.updateValueAndValidity();
    });

  }

  addTag() {
    let tagControls = this.productForm.get("tags") as FormArray;
    if (tagControls.controls.length < 4) {
      tagControls.push(this.fb.group({
        id: 0,
        tag1: ""
      }));
    } else {
      this.toast.add({
        severity: "warn",
        summary: "Limit Reached",
        detail: "Maximum 4 tags per Product to be added"
      });
    }

  }

  RemoveTag(index: number) {
    let tagControls = this.productForm.get("tags") as FormArray;
    tagControls.removeAt(index);
  }

  addAddress() {
    let addressesControls = this.productForm.get("Addresses") as FormArray;
    if (addressesControls.controls.length < 3) {
      addressesControls.push(this.fb.group({
        id:0,
        AddLine1: "",
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    } else {
      this.toast.add({
        severity: "warn",
        summary: "Limit Reached",
        detail: "Maximum 3 Seller Address per Product to be added"
      });
    }

  }

  RemoveAddress(index: number) {
    let addressesControls = this.productForm.get("Addresses") as FormArray;
    addressesControls.removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.ps.AddProduct(this.productForm.value).subscribe(data=>{
      this.ps.refreshData.emit(true);
      this.router.navigateByUrl(`/products`);
    });
  }

  formatLabel(value: number): string {
    return `${value}`;
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [13, 188] as const;

}
