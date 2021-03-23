import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any;
  selectedContact: any;
  edicao = false;
  excluir =false;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.dataService.getContacts().subscribe(resposta => {
      this.contacts = resposta;
    });
  }

  public selectContact(contact: any) {
    this.selectedContact = contact;
  }
  public deleteContact(contact: any) {
    this.dataService.deleteContact(contact.id).subscribe(r => {
      this.listar();
      this.excluir=false;
    });
  }
  public salvar() {
    this.dataService.saveContact(this.selectedContact).subscribe(r => {
      this.edicao = false;
      this.listar;
    });
  }

  public editar() {
    this.edicao = true;
  }
  public cancelar() {
    this.edicao = false;
  }


}
