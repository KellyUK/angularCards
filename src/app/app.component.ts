import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      imageUrl: "/assets/tree.jpeg",
      username: "nature",
      content: "I saw a tree"
    },
    {
      title: "Snowy",
      imageUrl: "assets/mountain.jpeg",
      username: "snow",
      content: "I saw a mountain"
    },
    {
      title: "Biking",
      imageUrl: "assets/biking.jpeg",
      username: "nature",
      content: "I saw a bike"
    },
    {
      title: "Biking",
      imageUrl: "assets/biking.jpeg",
      username: "nature",
      content: "I saw a bike"
    }
  ];
}
