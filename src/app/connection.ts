import { DatePipe } from "@angular/common";

export class Connection {
    connectionId : number =0;
    consumerNumber : number =0;
    flatOrHouseNumber : number =0;
    buildingName : string="";
    landmark : string="";
    villageName : string="";
    taluka : string="";
    districtName : string="";
    state : string="";
    pincode : number = 0;
    connectionType : string="";
    applicationDate!: DatePipe;
    connectionDate: any;  
    connectionStatus : string="";
              
    
}