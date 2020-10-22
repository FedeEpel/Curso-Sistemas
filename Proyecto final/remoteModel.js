class RemoteModel extends EventTarget
{
	constructor()
	{
		super();
	}

	createUser( userData )
	{
		let message =
		{
			action:'createUser',
			body: userData
		};

		return fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	}

	editUser( newUserData )
	{
		let message =
		{
			action:'editUser',
			body: newUserData
		};

		return fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	deleteUser( id )
	{
		let message =
		{
			action:'deleteUser',
			body: { id:id }
		};

		return fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	getUserById( id )
	{
		let message =
		{
			action:'getUserById',
			body: id
		};

		return fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	getUsers()
	{
		let message =
		{
			action:'getUsers',
			body: null
		};

		return fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	existingUserValidation( id )
	{
		let message =
		{
			action:'existingUserValidation',
			body: { id:id }
		};

		return fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

}

export {RemoteModel};