import {Component, View, bootstrap} from "angular2/angular2";
import {Quote} from "../quote/quote";
import {QuotesStore} from "../../stores/quotes";

// the @component annotation defines the HTML tag for the component
@Component({
    selector: 'app'
})

// the @view annotation defines the HTML that represents the component
@View({
    templateUrl: 'components/app/app.html',
    directives: [
        Quote
    ]
})

export class App {
    name: string;
    quote: any;

    constructor() {
        var quotesStore = new QuotesStore();

        this.name = 'Niels';
        this.quote = quotesStore.getRandom();
    }
}
