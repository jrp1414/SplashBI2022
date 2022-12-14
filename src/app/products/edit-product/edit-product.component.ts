import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/product.service';
import { RangeValidator } from 'src/app/shared/range.validator';
import { Product } from '../products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: [
    `
    mat-slider {
      width: 300px;
    }

    .example-chip-list {
      width: 100%;
    }
    `
  ]
})
export class EditProductComponent implements OnInit {
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
    private toast: MessageService) {
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

      console.log(this.product);
      if (this.product?.Tags && this.product?.Tags?.length > 0) {
        this.tags.removeAt(0);
        for (const tag of this.product.Tags!) {
          this.tags.push(this.fb.group({
            id: tag?.id,
            tag1: tag?.tag1
          }));
        }
      }      
      if (this.product?.Addresses && this.product?.Addresses?.length > 0) {
        this.Addresses.removeAt(0);
        for (const sel of this.product.Addresses!) {
          this.Addresses.push(this.fb.group({
            id:sel.id,
            AddLine1: sel.AddLine1,
            AddLine2: sel.AddLine2,
            AddLine3: sel.AddLine3,
            City: sel.City,
            State: sel.State
          }));
        }
      }
      this.productForm.patchValue(this.product!);
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
    this.ps.UpdateProductDetails({...this.productForm.value,id:this.product?.id}).subscribe(data=>{
      console.log(data);
    });
  }

  formatLabel(value: number): string {
    return `${value}`;
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [13, 188] as const;


  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.tags.push({ name: value });
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(tag: Tag): void {
  //   const index = this.tags.indexOf(tag);

  //   if (index >= 0) {
  //     this.tags.splice(index, 1);
  //   }
  // }

  // edit(tag: Tag, event: MatChipEditedEvent) {
  //   const value = event.value.trim();

  //   // Remove fruit if it no longer has a name
  //   if (!value) {
  //     this.remove(tag);
  //     return;
  //   }

  //   // Edit existing fruit
  //   const index = this.tags.indexOf(tag);
  //   if (index > 0) {
  //     this.tags[index].name = value;
  //   }
  // }

}
