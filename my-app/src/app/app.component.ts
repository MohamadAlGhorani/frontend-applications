import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  url1 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-22/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fobj+%3FobjLabel+%3Flink+%3Ftitle+%3FplaceName++WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+skos%3AprefLabel+%3FobjLabel+.%0D%0A%23+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Abroader*+%3Fplace+.%0D%0A%23+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster8161%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster3%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%3Fobj+dct%3Aspatial+%3Fplace+.%0D%0A++%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`;
  url2 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-22/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fobj+%3FobjLabel+%3Flink+%3Ftitle+%3FplaceName++WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+skos%3AprefLabel+%3FobjLabel+.%0D%0A%23+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster8161%3E+skos%3Abroader*+%3Fplace+.%0D%0A%23+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster3%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%3Fobj+dct%3Aspatial+%3Fplace+.%0D%0A++%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`;
  url3 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-22/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fobj+%3FobjLabel+%3Flink+%3Ftitle+%3FplaceName++WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster2706%3E+skos%3AprefLabel+%3FobjLabel+.%0D%0A++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Abroader*+%3Fplace+.%0D%0A%23+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster8161%3E+skos%3Abroader*+%3Fplace+.%0D%0A%23+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster3%3E+skos%3Abroader*+%3Fplace+.%0D%0A++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%3Fobj+dct%3Aspatial+%3Fplace+.%0D%0A++%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`;
  responseData: object[];
  loading =
    "https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif";
  srcImage = this.loading;
  herkomst = "";
  title = "";
  score = 0;
  onChecked(value: String) {
    if (value == this.herkomst) {
      this.score = this.score + 1;
      alert("score omhoog goed gedaan");
      setTimeout(function() {
        alert("opnieuw");
      }, 500);
    } else {
      alert("niet goed geraden nog een object");
      setTimeout(function() {
        alert("opnieuw");
      }, 500);
    }
  }
  addingClassName(value: String) {
    console.log("adding class name");
  }
  constructor(private http: HttpClient) {
    var allData = [];
    this.http.get(this.url1).subscribe(response1 => {
      var responseData1 = response1;
      allData.push(responseData1);
      // console.log(("b" + "a" + +"a" + "a" + "s").toLowerCase());
    });
    this.http.get(this.url2).subscribe(response2 => {
      var responseData2 = response2;
      allData.push(responseData2);
    });
    this.http.get(this.url3).subscribe(response3 => {
      var responseData3 = response3;
      allData.push(responseData3);
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var randomGebied = getRandomInt(0, 2);
      var randomObject = getRandomInt(
        0,
        allData[randomGebied].results.bindings.length
      );
      console.log(
        "randomObject",
        allData[randomGebied].results.bindings[randomObject]
      );
      this.srcImage =
        allData[randomGebied].results.bindings[randomObject].link.value;
      console.log("srcImage", this.srcImage);
      this.herkomst =
        allData[randomGebied].results.bindings[randomObject].placeName.value;
      console.log("herkomst", this.herkomst);
      this.title =
        allData[randomGebied].results.bindings[randomObject].title.value;
      console.log("title", this.title);
    });
    console.log("allData", allData);
  }
}
