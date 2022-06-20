import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Эхлээд одоогийн маршрутаас бүтээгдэхүүний ID-г авна уу.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Маршрут дээр өгөгдсөн ID-тай тохирох бүтээгдэхүүнийг ол.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}