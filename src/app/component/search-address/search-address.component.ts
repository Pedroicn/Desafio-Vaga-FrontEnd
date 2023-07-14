import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.scss'],
})
export class SearchAddressComponent {
  cep: string = '';
  validateCep: RegExp = /^[0-9]{8}$/;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  IBGE: string;
  error: string;
  isCepValid: boolean = false;

  constructor(private addressService: AddressService) {
    this.street = '';
    this.neighborhood = '';
    this.city = '';
    this.state = '';
    this.IBGE = '';
    this.error = '';
  }

  getData(): void {
    if (this.validateCep.test(this.cep))
      this.addressService.fetchData(this.cep).subscribe((response) => {
        if (response.erro) {
          this.isCepValid = true;
          this.error = 'Digite um cep válido';
        }
        this.isCepValid = false;
        this.street = response.logradouro;
        this.neighborhood = response.bairro;
        this.city = response.localidade;
        this.state = response.uf;
        this.IBGE = response.ibge;
        console.log(response);
      });
    else {
      this.isCepValid = true;
      this.error = 'Digite um cep válido';
    }
  }

  cepValidation() {
    if (this.cep.length === 8) {
      this.getData();
    }
  }

  isButtonDisabled() {
    if (
      this.street === '' ||
      this.neighborhood === '' ||
      this.city === '' ||
      this.state === '' ||
      this.IBGE === '' ||
      this.cep.length < 8
    ) {
      return true;
    }
    return false;
  }

  onsubmit(): void {
    alert('Enviado com sucesso');
    this.cep = '';
    this.street = '';
    this.neighborhood = '';
    this.city = '';
    this.state = '';
    this.IBGE = '';
  }

  cleanFields() {
    this.cep = '';
    this.street = '';
    this.neighborhood = '';
    this.city = '';
    this.state = '';
    this.IBGE = '';
  }
}
