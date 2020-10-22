class UserController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;

		this.innerView.update();
	}

	newUserButton() 
	{
		let newId = window.prompt("Ingrese el id para el nuevo usuario");

		if ( !this.innerModel.existingUserValidation(newId))
		{
		this.innerModel.createUser({ id: newId, name: "Fede", lastName: "Gomez", address: "Consti 123", cellPhoneNumber: "2232228833", landlinePhoneNumber:"", email: "fede@hotmail.com" } );
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
		let newId = window.prompt('Desea eliminar un contacto?');

		if ( this.innerModel.existingUserValidation(newId))
		{
			if ( window.confirm("Esta seguro que desea borrar el contacto?"))
			{
				this.innerModel.deleteUser(newId);
			}

		}
		else
		{
			window.alert("El contacto que desea eliminar no existe")
		}
	};
	w3_open() {
	  document.getElementById("open").style.display = "block";
	  
	}

	w3_close() {
	  document.getElementById(this.id + "mySidebar").style.display = "none";
	  document.getElementById(this.id + "myOverlay").style.display = "none";
	}
};

export {UserController};