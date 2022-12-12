import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  productList: Product[]=[];
  product?: Product;
  types: string[] = [];
  productForm!: FormGroup;
  tags!: FormArray;
  sellersGroup: FormArray = this.fb.array([
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
    this.route.params.subscribe((p) => {
      this.product = this.ps.getProductDetails(p["pid"]);
      this.tags = this.fb.array(this.product.tags!);
      if (this.product.sellers && this.product.sellers?.length > 0) {
        this.sellersGroup.removeAt(0);
        for (const sel of this.product.sellers!) {
          this.sellersGroup.push(this.fb.group({
            AddLine1: sel.AddLine1,
            AddLine2: sel.AddLine2,
            AddLine3: sel.AddLine3,
            City: sel.City,
            State: sel.State
          }));
        }
      }
      this.productForm = this.fb.group({
        title: [this.product.title,[Validators.required,Validators.minLength(3)]],
        type: [this.product.type,Validators.required],
        description: [this.product.description,Validators.maxLength(100)],
        availibility: this.product.availibility,
        safeFor: this.product.safeFor,
        qualityScore: this.product.qualityScore,
        price: [this.product.price,RangeValidator(1,95)],
        rating: this.product.rating,
        imageUrl: this.product.imageurl,
        tags: this.tags,
        sellers: this.sellersGroup
      });
    });

    this.productForm.get("availibility")?.valueChanges.subscribe((v:any)=>{
      let description = this.productForm.get("description") as FormControl;
      if(v){
        description.setValidators(Validators.required);
      }else{
        description.clearValidators();
      }
      description.updateValueAndValidity();
    });
  }

  addTag() {
    let tagControls = this.productForm.get("tags") as FormArray;
    if (tagControls.controls.length < 4) {
      tagControls.push(this.fb.control(""));
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

  addSeller() {
    let sellerControls = this.productForm.get("sellers") as FormArray;
    if (sellerControls.controls.length < 3) {
      sellerControls.push(this.fb.group({
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

  RemoveSeller(index: number) {
    let sellerControls = this.productForm.get("sellers") as FormArray;
    sellerControls.removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
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


export class Tag {
  name?: string;
}