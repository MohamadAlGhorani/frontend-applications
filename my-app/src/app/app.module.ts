import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ImageComponent } from "./image/image.component";
import { ButtonComponent } from "./button/button.component";
import { HintComponent } from "./hint/hint.component";
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    ImageComponent,
    ButtonComponent,
    HintComponent,
    ScoreComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
