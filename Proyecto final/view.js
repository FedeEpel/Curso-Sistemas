import { UserController } from './controller.js';

class UserView
{
	constructor( id, model )
	{
		this.innerModel = model;
		this.id = id;

		this.innerController = new UserController(model, this);

		this.update();
	};

	update()
	{
		this.innerModel.getUsers().then( response => this.tableUpdate(response.json()) );
	}

	tableUpdate( userArrayPromise )
	{
		userArrayPromise.then( userArray =>
		{
			let innerHTML = 
			`<nav class="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large" style="z-index:3;width:250px;font-weight:bold;display:none;left:0;" id="${this.id}mySidebar">
			  <a href="javascript:void()" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a> 
			  <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">INFO</a> 
			  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">ABOUT US</a> 
			  <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">CONTACT</a>
			</nav>

			<header class="w3-container w3-top w3-white w3-xlarge w3-padding-16">
			  <span class="w3-rigth w3-padding">My Contacts</span>
			  <a href="javascript:void(0)" id="${this.id}open" class="w3-left w3-button w3-white" >☰</a>
			</header>

			<div class="w3-overlay w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="${this.id}myOverlay"></div>

			<div class="w3-main w3-content" style="max-width:1600px;margin-top:83px">

			<div class="w3-row w3-grayscale-min">
			<table id="${this.id}userTable" class="w3-table-all">
				<tr class="w3-blue">
					<th>First Name</th>
					<th>Last Name</th>
					<th>Address</th>
					<th>Cell Phone Number</th>
					<th>Landline Phone Number</th>
					<th>Email</th>
					<th>Actions</th>
				<tr>`;

			if ( userArray.length > 0 )
			{
				for (let user of userArray )
				{
					innerHTML +=
					`<tr>
						<td>${user.name}</td>
						<td>${user.lastName}</td>
						<td>${user.address}</td>
						<td>${user.cellPhoneNumber}</td>
						<td>${user.landlinePhoneNumber}</td>
						<td>${user.email}</td>
						<td>
							<button class="w3-button w3-black" editButton>Edit</button>
							<button class="w3-button w3-teal" deleteButton>Delete</button>
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
			</div>
			<br>
			<div class="w3-bar">
			<button class="w3-bar-item w3-button w3-teal w3-hover-black id="${this.id}newUserButton">New Contact</button>
			<button class="w3-bar-item w3-button w3-red w3-hover-black" id="${this.id}deleteUserButton">Delete Contact</button>
			</div>
			<br>

			<footer class="w3-container w3-padding-32 w3-grey">  
		    <div class="w3-row-padding">
		      <div class="w3-third">
		        <h3>INFO</h3>
		        <p>La mejor agenda vitrual para guardar tus contactos, pudiendo agregar, editar y eliminar los mismos!</p>      
		      </div>
		    
		      <div class="w3-third">
		        <h3>Our Products</h3>
		        <p>--Nada por el momento--</p>
		      </div>

		      <div class="w3-third">
		        <h3>Contact Us</h3>
		        <p>Nuestro Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScWFSrTDVmjGFGprJWbsdSMVjBCxrXGZnbsnZRlbwmBbdpgJZKTPCXRGNMwtBjGvNzbkB" target="_blank"> superAgenda@gmail.com</a></p>
		      </div>
		    </div>
		    </footer>`;

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

			document.getElementById(this.id + "open").addEventListener('click', event => this.innerController.w3_open(event));
		    document.getElementById(this.id + "open").addEventListener('click', event => this.innerController.w3_open(event)) 

		    document.getElementById(this.id + "mySidebar").addEventListener('click', event => this.innerController.w3_close(event));
		    document.getElementById(this.id + "myOverlay").addEventListener('click', event => this.innerController.w3_close(event));
		});
	};
};

export { UserView };