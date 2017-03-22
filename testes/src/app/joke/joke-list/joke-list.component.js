"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var joke_1 = require("../joke");
var JokeListComponent = (function () {
    function JokeListComponent() {
        this.jokes = [
            new joke_1.Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
            new joke_1.Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new joke_1.Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
        ];
    }
    JokeListComponent.prototype.addJoke = function (joke) {
        this.jokes.unshift(joke);
    };
    JokeListComponent.prototype.ngOnInit = function () {
    };
    JokeListComponent = __decorate([
        core_1.Component({
            selector: 'app-joke-list',
            templateUrl: './joke-list.component.html',
            styleUrls: ['./joke-list.component.css']
        })
    ], JokeListComponent);
    return JokeListComponent;
}());
exports.JokeListComponent = JokeListComponent;
