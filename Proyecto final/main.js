import {UserModel} from './model.js';
import {UserView} from './view.js';

let model = new UserModel();
let view = new UserView('crud', model );

model.createUser({ id: "1", name: "Juan", lastName: "Perez", address: "Estrada 123", cellPhoneNumber: "2233056246", landlinePhoneNumber: "44142", email: "juan@hotmail.com" } );
model.createUser({ id: "2", name: "Fede", lastName: "Gomez", address: "Consti 123", cellPhoneNumber: "2232228833", landlinePhoneNumber: "44257839", email: "fede@hotmail.com" } );


