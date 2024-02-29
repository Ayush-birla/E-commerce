import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mensPantsPage1 } from '../../../../../ecommerce-products-data-master/pants/men_page1';
import { filters, singleFilter } from './FilterData';
import { ProduceService } from '../../../../State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProduceService,
    private store: Store<AppState>
  ) {}

  levelThree: any;
  handleMultipleSelectFilter(value: any, sectionId: any) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], { queryParams });
  }

  filterData: any;
  singleFilterData: any;
  products: any;
  menPants: any;

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;

    this.activatedRoute.paramMap.subscribe((params) => {
      console.log('params ', params);
      this.levelThree = params.get('levelThree');
      var reqData = {
        category: this.levelThree,
        colors: [],
        sizes: [],
        minPrice: 100,
        maxPrice: 50000,
        minDiscount: 0,
        pageNumber: 0,
        pageSize: 0,
        stock: null,
      };
      this.productService.findProductsByCategory(reqData);
      // this.productService.findProductsById(55);
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      const color = params['color'];
      const size = params['size'];
      const price = params['price'];
      const discount = params['discount'];
      const stock = params['stock'];
      const sort = params['sort'];
      const pageNumber = params['pageNumber'];
      const minPrice = price ? price.split('-')[0] : null;
      const maxPrice = price ? price.split('-')[1] : null;

      var reqData = {
        category: this.levelThree,
        colors: color ? [color].join(',') : [],
        sizes: size,
        minPrice: minPrice ? minPrice : 0,
        maxPrice: maxPrice ? maxPrice : 10000,
        minDiscount: discount ? discount : 0,
        pageNumber: pageNumber ? pageNumber : 0,
        pageSize: 10,
        stock: null,
        sort: sort ? sort : 'price_low',
      };
      this.productService.findProductsByCategory(reqData);
    });

    this.store.pipe(select((store) => store.product)).subscribe((prduct) => {
      this.products = prduct.products.content;
      console.log('store data', this.products);
    });
  }

  handleSingleSelectedFilter(value: string, sectionId: string) {
    console.log(value + ':' + sectionId);

    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    /*queryParams[sectionId] = value;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
    }); */
    const currentValue = queryParams[sectionId];

    if (currentValue === value) {
      // If the current value is the same as the clicked value, unselect it
      delete queryParams[sectionId];
    } else {
      // Otherwise, select the clicked value
      queryParams[sectionId] = value;
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
    });
  }
}
