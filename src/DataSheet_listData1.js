import DataSheetBase from './DataSheetBase.js';
import datasheet_listData1_row0_picture from './images/datasheet_listData1_row0_picture.png';
import datasheet_listData1_row1_picture from './images/datasheet_listData1_row1_picture.png';
import datasheet_listData1_row2_picture from './images/datasheet_listData1_row2_picture.png';
import datasheet_listData1_row3_picture from './images/datasheet_listData1_row3_picture.png';
import datasheet_listData1_row4_picture from './images/datasheet_listData1_row4_picture.png';
import datasheet_listData1_row5_picture from './images/datasheet_listData1_row5_picture.png';
import datasheet_listData1_row6_picture from './images/datasheet_listData1_row6_picture.png';
import datasheet_listData1_row7_picture from './images/datasheet_listData1_row7_picture.png';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['Long2'] = "";
    item['Lat2'] = "";
    item['title'] = "Salvation Army";
    item['picture'] = datasheet_listData1_row0_picture;
    item['Long1'] = "";
    item['description'] = "The Salvation Army is a Protestant Christian church and an international charitable organisation.";
    item['Lat1'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Red Cross";
    item['picture'] = datasheet_listData1_row1_picture;
    item['description'] = "The International Committee of the Red Cross is a humanitarian institution.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "United Way";
    item['picture'] = datasheet_listData1_row2_picture;
    item['description'] = "United Way of America based in Alexandria, Virginia, is a nonprofit organization.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Catholic Charities";
    item['picture'] = datasheet_listData1_row3_picture;
    item['description'] = "Catholic Charities is a network of charities with headquarters in Alexandria, Virginia.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Habitat for Humanity";
    item['picture'] = datasheet_listData1_row4_picture;
    item['description'] = "Habitat for Humanity International is an international, non-governmental, and nonprofit organization.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "UNICEF";
    item['picture'] = datasheet_listData1_row5_picture;
    item['description'] = "The United Nations Children's Fund was created by the UN to provide emergency food and healthcare to children and mothers.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Oxfam";
    item['picture'] = datasheet_listData1_row6_picture;
    item['description'] = "Oxfam is a confederation of 20 independent charitable organizations.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Test";
    item['picture'] = datasheet_listData1_row7_picture;
    item['description'] = "Sairam";
    item.key = key++;
  }

}
