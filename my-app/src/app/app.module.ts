import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ImageComponent } from './image/image.component';
import { ButtonComponent } from './button/button.component';
import { HintComponent } from './hint/hint.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, CheckboxComponent, ImageComponent, ButtonComponent, HintComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
