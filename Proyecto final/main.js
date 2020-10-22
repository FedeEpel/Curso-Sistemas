import {UserModel} from './model.js';
import {RemoteModel} from './remoteModel.js';
import {UserView} from './view.js';

let model = new UserModel();
let remoteModel = new RemoteModel('./remoteModel.php');
let view = new UserView('crud', remoteModel );





