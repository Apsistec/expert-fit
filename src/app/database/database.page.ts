import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  databaseObj: SQLiteObject;
  name_model = '';
  row_data: any = [];
  readonly database_name: string = 'expertfit.db';
  readonly table_name: string = 'myexpertfittable';

  // Handle Update Row Operation
  updateActive: boolean;
  to_update_item: any;

  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit(){}

  // Create DB if not there
  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        alert('expertfit_datatable Database Created!');
      })
      .catch(e => {
        alert('error ' + JSON.stringify(e));
      });
  }

  // Create table
  createTable() {
    this.databaseObj.executeSql(`
    CREATE TABLE IF NOT EXISTS ${this.table_name}  (pid INTEGER PRIMARY KEY, Name varchar(255))
    `, [])
      .then(() => {
        alert('Table Created!');
      })
      .catch(e => {
        alert('error ' + JSON.stringify(e));
      });
  }

  //Inset row in the table
  insertRow() {
    // Value should not be empty
    if (!this.name_model.length) {
      alert('Enter Name');
      return;
    }

    this.databaseObj.executeSql(`
      INSERT INTO ${this.table_name} (Name) VALUES ('${this.name_model}')
    `, [])
      .then(() => {
        alert('Row Inserted!');
        this.getRows();
      })
      .catch(e => {
        alert('error ' + JSON.stringify(e));
      });
  }

  // Retrieve rows from table
  getRows() {
    this.databaseObj.executeSql(`
    SELECT * FROM ${this.table_name}
    `
      , [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
      })
      .catch(e => {
        alert('error ' + JSON.stringify(e));
      });
  }

  // Delete single row
  deleteRow(item) {
    this.databaseObj.executeSql(`
      DELETE FROM ${this.table_name} WHERE pid = ${item.pid}
    `
      , [])
      .then((res) => {
        alert('Row Deleted!');
        this.getRows();
      })
      .catch(e => {
        alert('error ' + JSON.stringify(e));
      });
  }

  // Enable update mode and keep row data in a variable
  enableUpdate(item) {
    this.updateActive = true;
    this.to_update_item = item;
    this.name_model = item.Name;
  }

  // Update row with saved row id
  updateRow() {
    this.databaseObj.executeSql(`
      UPDATE ${this.table_name}
      SET Name = '${this.name_model}'
      WHERE pid = ${this.to_update_item.pid}
    `, [])
      .then(() => {
        alert('Row Updated!');
        this.updateActive = false;
        this.getRows();
      })
      .catch(e => {
        alert('error ' + JSON.stringify(e));
      });
  }

}
