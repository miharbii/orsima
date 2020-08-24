import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { SidenavService } from '../sidenav.service';


export interface StateGroup {
  names: string[];
  letter: string;
  // names: string[];
}
// tslint:disable-next-line:variable-name
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  stateForm: FormGroup = this.formBuilder.group({
    stateGroup: '',
    });

  myControl = new FormControl();

  filteredOptions: Observable<string[]>;

  stateGroups: StateGroup[] = [{
    letter: 'Interne',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'Externe',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(public sidenavService: SidenavService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // tslint:disable-next-line:no-non-null-assertion
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

}
