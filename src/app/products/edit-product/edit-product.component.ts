import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/product.service';
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
  productList: Product[];
  product?: Product;
  types: string[] = [];
  productForm: any;
  tags!:FormArray;
  constructor(private ps: ProductService, private fb: FormBuilder, private route: ActivatedRoute,
    private toast:MessageService) {
    this.productList = this.ps.getProducts();
    this.types = [...new Set(this.productList.map(m => m.type))];
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.product = this.ps.getProductDetails(p["pid"]);
      this.tags = this.fb.array(this.product.tags!);
      this.productForm = this.fb.group({
        title: this.product.title,
        type: this.product.type,
        description: this.product.description,
        availibility: this.product.availibility,
        safeFor: this.product.safeFor,
        qualityScore: this.product.qualityScore,
        price: this.product.price,
        rating: this.product.rating,
        imageUrl: this.product.imageurl,
        tags: this.tags
      });
    });

  }

  addTag(){
    let tagControls = this.productForm.get("tags") as FormArray;
    if (tagControls.controls.length <4) {
      tagControls.push(this.fb.control(""));  
    }else{
      this.toast.add({
        severity:"warn",
        summary:"Limit Reached",
        detail:"Maximum 4 tags per Product to be added"        
      });
    }
    
  }

  RemoveTag(index:number){
    let tagControls = this.productForm.get("tags") as FormArray;
    tagControls.removeAt(index);
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