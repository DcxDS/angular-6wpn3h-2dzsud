import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerPopup, NgbDateCustomParserFormatter } from './datepicker-popup';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdDatepickerPopup],
  exports: [NgbdDatepickerPopup],
  bootstrap: [NgbdDatepickerPopup],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
   ]
})
export class NgbdDatepickerPopupModule {}
