import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { mensPantsPage1 } from '../../../../../ecommerce-products-data-master/pants/men_page1';
import { filters, singleFilter } from './FilterData';
import { log } from 'console';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  constructor(private router:Router,private activatedRoute:ActivatedRoute){}

handleMultipleSelectFilter(value: any,sectionId: any) {

  const queryParams={...this.activatedRoute.snapshot.queryParams};
  const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];
  const valueIndex=filterValues.indexOf(value);
  

  if(valueIndex!=-1)
  {
    filterValues.splice(valueIndex,1)
  }
  else
  {
    filterValues.push(value);
  }

  if(filterValues.length>0)
  {
    queryParams[sectionId]=filterValues.join(",");
  }
  else
  {
    delete queryParams[sectionId];
  }

  this.router.navigate([],{queryParams})
}

  filterData:any;
  singleFilterData:any;
  menPants:any;

  ngOnInit(){
    this.filterData=filters;
    this.singleFilterData=singleFilter;
    this.menPants=mensPantsPage1;

    this.activatedRoute.paramMap.subscribe((params)=>{
      console.log("params ",params);
      var reqData={
        category:params.get('levelThree'),
        colors:[],
        sizes:[],
        minPrice:0,
        maxPrice:100,
        minDiscount:0,
        pageNumber:0,
        pageSize:0,
      }
      
    })
  }

  handleSingleSelectedFilter(value:string,sectionId:string)
  {
    const queryParams={...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId]=value;
    this.router.navigate([],queryParams);
  }



}
