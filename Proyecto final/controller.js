class UserController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;

		this.innerModel.addEventListener("change", event => this.innerView.tableUpdate() );
		this.innerView.tableUpdate();
	}

	newUserButton() 
	{
		let newId = window.prompt("Ingrese el id para el nuevo usuario");

		if ( !this.innerModel.existingUserValidation(id))
		{
		this.innerModel.createUser({ id: newId, name: "Fede", lastName: "Gomez", address: "Consti 123", cellPhoneNumber: "2232228833", landlinePhoneNumber: "44257839", email: "fede@hotmail.com" } );
		}
		else
		{
			window.alert("El id del contacto que desea agregar, ya existe.")
		}
	};

	editUserButton()
	{
		window.alert('Hola');
	};

	deleteUserButton()
	{
		window.prompt('Seguro que desea eliminar un contacto?)';
	};
};

export {UserController};