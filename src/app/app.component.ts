import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getRandomInt, getRandomObject } from "../lib/getRandoms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  url1 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-22/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fobj+%3FobjLabel+%3Flink+%3Ftitle+%3FplaceName++WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+edm%3AisRelatedTo+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+skos%3AprefLabel+%3FobjLabel+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster3%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%3Fobj+dct%3Aspatial+%3Fplace+.%0D%0A++%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`;
  url2 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-22/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fobj+%3FobjLabel+%3Flink+%3Ftitle+%3FplaceName++WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+edm%3AisRelatedTo+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+skos%3AprefLabel+%3FobjLabel+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster8161%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%3Fobj+dct%3Aspatial+%3Fplace+.%0D%0A++%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`;
  url3 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-22/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fobj+%3FobjLabel+%3Flink+%3Ftitle+%3FplaceName++WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+edm%3AisRelatedTo+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+skos%3AprefLabel+%3FobjLabel+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%3Fobj+dct%3Aspatial+%3Fplace+.%0D%0A++%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`;
  responseData: object[];
  loading =
    "https://cdn.dribbble.com/users/69182/screenshots/2151363/animated_loading__by__amiri.gif";
  srcImage = this.loading;
  herkomst = "";
  hintClassName = "";
  answerClassName = "";
  hintAantal = 10;
  buttonLabel = "Hints";
  title = "";
  thema = "";
  scoreCheck: any;
  scoreGetal: any;
  score: any;
  hint = true;
  allData = [];
  randomObject = "";
  randomGebied = "";
  reset(value: String) {
    this.srcImage = this.loading;
    localStorage.clear();
    if (localStorage.getItem("userScore") == null) {
      localStorage.setItem("userScore", "0");
      this.score = 0;
    } else {
      this.score = parseInt(localStorage.getItem("userScore"));
    }
    setTimeout(() => {
      this.hint = true;
      this.randomGebied = getRandomInt(0, 2);
      this.randomObject = getRandomObject(
        this.allData[this.randomGebied].results.bindings.length
      );
      console.log(this.randomGebied);
      this.srcImage = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].link.value;
      console.log("srcImage", this.srcImage);
      this.herkomst = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].placeName.value;
      console.log("herkomst", this.herkomst);
      this.title = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].title.value;
      console.log("title", this.title);
      this.hintClassName = "";
      this.answerClassName = "";
    }, 1000);
  }
  addingClassName(value: String) {
    console.log("adding class name");
    if (this.hintAantal > 1 && this.hint == true) {
      this.hintClassName = "has-display-block";
      this.hintAantal = this.hintAantal - 1;
      this.buttonLabel = "Hints";
      this.hint = false;
    } else if (this.hintAantal <= 0 && this.hint == true) {
      this.hintClassName = "";
      this.buttonLabel = "Hints";
      this.hintAantal = 0;
      this.hint = false;
    }
    if (this.hintAantal == 1) {
      this.buttonLabel = "Hint";
    }
  }
  onChecked(value: String) {
    if (value == this.herkomst) {
      this.scoreGetal = parseInt(localStorage.getItem("userScore"));
      this.scoreCheck = this.scoreGetal + 1;
      localStorage.setItem("userScore", this.scoreCheck);
      this.score = parseInt(localStorage.getItem("userScore"));

      this.srcImage = this.loading;
      this.hintClassName = "has-display-block";
      this.answerClassName = "has-display-block";
      setTimeout(() => {
        this.hint = true;
        this.randomGebied = getRandomInt(0, 2);
        this.randomObject = getRandomObject(
          this.allData[this.randomGebied].results.bindings.length
        );
        this.srcImage = this.allData[this.randomGebied].results.bindings[
          this.randomObject
        ].link.value;
        console.log("srcImage", this.srcImage);
        this.herkomst = this.allData[this.randomGebied].results.bindings[
          this.randomObject
        ].placeName.value;
        console.log("herkomst", this.herkomst);
        this.title = this.allData[this.randomGebied].results.bindings[
          this.randomObject
        ].title.value;
        console.log("title", this.title);
        this.hintClassName = "";
        this.answerClassName = "";
      }, 2000);
    } else {
      this.srcImage = this.loading;
      this.hintClassName = "has-display-block";
      this.answerClassName = "has-display-block-rong";
      setTimeout(() => {
        this.hint = true;
        this.randomGebied = getRandomInt(0, 2);
        this.randomObject = getRandomObject(
          this.allData[this.randomGebied].results.bindings.length
        );
        console.log(this.randomGebied);
        this.srcImage = this.allData[this.randomGebied].results.bindings[
          this.randomObject
        ].link.value;
        console.log("srcImage", this.srcImage);
        this.herkomst = this.allData[this.randomGebied].results.bindings[
          this.randomObject
        ].placeName.value;
        console.log("herkomst", this.herkomst);
        this.title = this.allData[this.randomGebied].results.bindings[
          this.randomObject
        ].title.value;
        console.log("title", this.title);
        this.hintClassName = "";
        this.answerClassName = "";
      }, 2000);
    }
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem("userScore") == null) {
      localStorage.setItem("userScore", "0");
      this.score = 0;
    } else {
      this.score = parseInt(localStorage.getItem("userScore"));
    }
    this.allData = [];
    this.http.get(this.url1).subscribe(response1 => {
      var responseData1 = response1;
      this.allData.push(responseData1);
      this.allData[0].results.bindings.forEach(item => {
        item.placeName.value = "Afrika";
      });
      // console.log(("b" + "a" + +"a" + "a" + "s").toLowerCase());
    });
    this.http.get(this.url2).subscribe(response2 => {
      var responseData2 = response2;
      this.allData.push(responseData2);
      this.allData[1].results.bindings.forEach(item => {
        item.placeName.value = "India";
      });
    });
    this.http.get(this.url3).subscribe(response3 => {
      var responseData3 = response3;
      this.allData.push(responseData3);
      this.allData[2].results.bindings.forEach(item => {
        item.placeName.value = "Indonesië";
      });
      this.randomGebied = getRandomInt(0, 2);
      this.randomObject = getRandomObject(
        this.allData[this.randomGebied].results.bindings.length
      );
      console.log(
        "randomObject",
        this.allData[this.randomGebied].results.bindings[this.randomObject]
      );
      this.thema = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].objLabel.value;
      console.log("thema", this.thema);
      this.srcImage = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].link.value;
      console.log("srcImage", this.srcImage);
      this.herkomst = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].placeName.value;
      console.log("herkomst", this.herkomst);
      this.title = this.allData[this.randomGebied].results.bindings[
        this.randomObject
      ].title.value;
      console.log("title", this.title);
    });
    console.log("allData", this.allData);
  }
}
