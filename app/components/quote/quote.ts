import {Component, View, bootstrap} from "angular2/angular2";

@Component({
    selector: 'quote',
    bind: {
        quote: 'quote',
        author: 'author'
    }
})

@View({
    templateUrl: 'components/quote/quote.html'
})

export class Quote {

}
