import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel  } from '../../models/user.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  user: UserModel = new UserModel();
  departamentos: any[]= [];
  ciudades: any[]= [];
  constructor(
    private http: HttpClient
  ) {

    this.http.get('./assets/colombia.json').subscribe( (resp: any) => this.departamentos = resp);

  }

  ngOnInit(): void {

  }

  onChange(departamento: string){
    this.ciudades = this.departamentos[departamento];
  }

  onSubmit(form: NgForm){
    if(form.invalid) { return }

   Swal.fire({
      allowOutsideClick: false,
      title: 'Guardando usuario',
      text: 'Espere por favor...',
      icon: 'info',
    });

    Swal.showLoading();
    const data = JSON.stringify(this.user);

 this.http.post('http://localhost/sigma/api/usuarios/create.json', data)
    .subscribe( resp => {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Usuario creado correctamente',
          text: 'Tu información ha sido recibida satisfactoriamente',
          icon: 'success',
        });
    }, (err) => {
        console.log(err);

        Swal.fire({
          allowOutsideClick: false,
          title: 'Usuario no creado',
          text: 'No se pudo crear el usuario.',
          icon: 'error',
        });
    });
  }
}
