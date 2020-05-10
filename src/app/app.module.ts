import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { GemsCalculatorContainerComponent } from './components/gems-calculator-container/gems-calculator-container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    GemsCalculatorContainerComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
