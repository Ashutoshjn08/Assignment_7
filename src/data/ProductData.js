import ProductApi from './ProductApi';

export default class ProductData{
 static getAllData () {
     return ProductApi.data;
 }
}

