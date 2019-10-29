"use strict";

app.component("frageKomponente", {
    templateUrl: "components/frage-komponente.html",
    controller: "FrageKomponenteController",
    bindings: {
        frageText: '@',
        ausGewaehlt: "&"
    }
});


app.controller("FrageKomponenteController", function ($log) {

    $log.debug("FrageKomponenteController()");
    this.chosen = () => {
        this.ausGewaehlt({w: this.auswahl});
    }
    this.antwortmoeglichkeiten = ['Ganz richtig', 'Finde ich auch', 'Kann man auch anders sehen...', 'Eher nicht', 'Ganz und gar nicht'];

});
