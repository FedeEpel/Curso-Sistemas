import { UserController } from './controller.js';

class UserView
{
	constructor( id, model )
	{
		this.innerModel = model;
		this.id = id;

		this.innerController = new UserController(model, this);
		
		this.innerModel.addEventListener("change", event => this.tableUpdate() );
	};

	tableUpdate()
	{
		let innerHTML = 
		`<table id="${this.id}userTable">
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Address</th>
				<th>Cell Phone Number</th>
				<th>Landline Phone Number</th>
				<th>Email</th>
				<th>Actions</th>
			<tr>`;

		let userArray = this.innerModel.getUsers();

		if ( userArray.length > 0 )
		{
			for (let user of userArray )
			{
				innerHTML +=
				`<tr>
					<td>${user.id}</td>
					<td>${user.name}</td>
					<td>${user.lastName}</td>
					<td>${user.address}</td>
					<td>${user.cellPhoneNumber}</td>
					<td>${user.landlinePhoneNumber}</td>
					<td>${user.email}</td>
					<td>
						<button editButton>Edit</button>
						<button deleteButton>Delete</button>
					</td>
				</td>`
			}
		}
		else
		{
			innerHTML += `<tr><td colspan="7"> No se han agregado contactos</td></tr>`;
		}

		innerHTML += 
		`</table>
		<br>
		<button id="${this.id}newUserButton">New Contact</button>
		<button id="${this.id}deleteUserButton">Delete Contact</button>`;

		document.getElementById(this.id).innerHTML = innerHTML;

		document.getElementById(this.id + "newUserButton").addEventListener('click', event => this.innerController.newUserButton(event));
		document.getElementById(this.id + "deleteUserButton").addEventListener('click', event => this.innerController.deleteUserButton(event));
		document.getElementById(this.id + "userTable").addEventListener('click', event =>
		{
			if ( event.target.hasAtribute("editButton") )
				this.innerController.editUserButton(event);

			if ( event.target.hasAtribute("deleteButton") )
				this.innerController.deleteUserButton(event);
		});
	};
};

export { UserView };