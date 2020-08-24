export class Stagiare {
    nom: string;
    prenom: string;
    compagnie: string;
    nomPrenom: string;
}
export class Formateur {
    nom: string;
    prenom: string;
    nomPrenom: string;
    typeInterne: boolean;
}
export class Reservation {
    date: string;
    heureDebut: string;
    heureFin: string;
    typeFormateur: string;
    nomFormateur: string;
    supportDeCours: string;
    nomDesStagiaires: string[];
    pauseDejeuner: string;
}
