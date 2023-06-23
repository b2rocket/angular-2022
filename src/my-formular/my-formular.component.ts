import { Component } from '@angular/core';

@Component({
  selector: 'app-my-formular',
  templateUrl: './my-formular.component.html',
  styleUrls: ['./my-formular.component.css'],
})
export class MeinFormular1Component {}

export class MyFormularComponent {
  data = {
    field1: 'w',
    field2: '',
    field3: 'w',
    field4: 'ww',
    field5: 'w',
  };

  saveData() {
    console.log(this.data); // Hier können Sie die Formulardaten verarbeiten und speichern
  }
}
