import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MEDECIN, PATIENT, ADMIN } from 'src/app/data/dummy';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private router: ActivatedRoute,private route: Router) { }

  @ViewChild('identifiant') identifiant!: ElementRef<HTMLInputElement>;
  @ViewChild('password') password!: ElementRef<HTMLInputElement>;

  user: string = "";
  message: string = "";

  ngOnInit(): void {

    this.router.params.subscribe(s => {
      this.user = s['id'];
    })
  }

  onSubmit () {

    switch (this.user) {
      
      case "admin": 
        let res = ADMIN.filter((ad: any) => (ad.identifiant === this.identifiant.nativeElement.value && ad.password === this.password.nativeElement.value))
        if (res.length === 1) {
          this.route.navigate(["/admin"]);
        } else {
          this.message = "Veuillez ressayer";
        }
        break;
      case "medecin":
        let resm = MEDECIN.filter((ad: any) => (ad.identifiant === this.identifiant.nativeElement.value && ad.password === this.password.nativeElement.value))
        if (res.length === 1) {
          this.route.navigate(["/medecin"]);
        } else {
          this.message = "Veuillez ressayer";
        }
        break;
      case "patient":
        let resP = PATIENT.filter((ad: any) => (ad.identifiant === this.identifiant.nativeElement.value && ad.password === this.password.nativeElement.value))
        if (res.length === 1) {
          this.route.navigate(["/patient"]);
        } else {
          this.message = "Veuillez ressayer";
        }
        break;
      default : break;
    }
  }


}
