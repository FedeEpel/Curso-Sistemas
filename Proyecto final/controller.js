class UserController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;

		this.innerView.tableUpdate();
	}

	newUserButton() 
	{
		let newId = window.prompt("Ingrese el id para el nuevo usuario");

		if ( !this.innerModel.existingUserValidation(newId))
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
		window.prompt('Desea eliminar un contacto? Bueno, sentate y programalo salame');
	};
};

export {UserController};