import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.scss'],
})
export class SearchAddressComponent implements OnInit {
  cep: string = '';
  rua: string;
  constructor(private addressService: AddressService) {
    this.rua = '';
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    if (this.cep === '') {
      return '';
    } else {
      console.log(typeof this.cep);
      return this.addressService.fetchData(this.cep).subscribe((response) => {
        console.log(response);
        this.rua = response.logradouro;
      });
    }
  }
}
