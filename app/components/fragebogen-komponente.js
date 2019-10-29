"use strict";

app.component("fragebogenKomponente", {
    templateUrl: "components/fragebogen-komponente.html",
    controller: "FragebogenKomponenteController",
    bindings: {}
});


app.controller("FragebogenKomponenteController", function ($log) {

    $log.debug("FragebogenKomponenteController()");
    this.gegebeneAntworten = {};
    this.gewaehlt = (args) => {
        this.gegebeneAntworten[args] = true;
    }
    this.fragen = ['Finden Sie das auch?', 'Und wie denken Sie darüber?', 'Wie sollte es so sein?'];
    this.offen = () => {
        return Object.keys(this.gegebeneAntworten).length;
    }
});

