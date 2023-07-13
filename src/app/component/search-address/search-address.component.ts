import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.scss'],
})
export class SearchAddressComponent {
  cep: string = '';
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  IBGE: string;

  constructor(private addressService: AddressService) {
    this.street = '';
    this.neighborhood = '';
    this.city = '';
    this.state = '';
    this.IBGE = '';
  }

  getData() {
    if (this.cep === '') {
      alert('digite um número de cep');
      return;
    } else {
      console.log(typeof this.cep);
      return this.addressService.fetchData(this.cep).subscribe((response) => {
        this.street = response.logradouro;
        this.neighborhood = response.bairro;
        this.city = response.localidade;
        this.state = response.uf;
        this.IBGE = response.ibge;
      });
    }
  }
}
