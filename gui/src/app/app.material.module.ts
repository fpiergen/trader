import { NgModule } from '@angular/core';
import {MatTableModule, MatAutocompleteModule, MatListModule, MatExpansionModule, MatDividerModule, MatInputModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatRadioModule, MatTabsModule, MatMenuModule, MatCardModule, MatIconModule, MatToolbarModule, MatChipsModule, MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
      imports: [MatTableModule, MatAutocompleteModule, MatListModule, MatExpansionModule, MatDividerModule, MatInputModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatRadioModule, MatTabsModule, MatMenuModule, MatCardModule, MatIconModule, MatToolbarModule, MatChipsModule, MatButtonModule, MatCheckboxModule],
        exports: [MatTableModule, MatAutocompleteModule, MatListModule, MatExpansionModule, MatDividerModule, MatInputModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatRadioModule, MatTabsModule, MatMenuModule, MatCardModule, MatIconModule, MatToolbarModule, MatChipsModule, MatButtonModule, MatCheckboxModule],
})

export class AppMaterialModule { }
