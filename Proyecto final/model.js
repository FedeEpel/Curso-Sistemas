class UserModel extends EventTarget
{
	constructor()
	{
		super();
		this.innerData = new Array();
	};

	createUser ( newUserData )
	{	
		if ( this.userDataValidation(newUserData) && !this.existingUserValidation(newUserData.id) )
		{
			this.innerData.push( newUserData );
			this.dispatchEvent( new CustomEvent("change") );
			console.log(newUserData);
		}
	};

	editUser ( id, newUserData )
	{
		let index = this.innerData.findIndex( user => user.id === id );

		if ( index >= 0 && this.userDataValidation(newUserData) && !this.existingUserValidation(newUserData.id) )
		{
			Object.assign(this.innerData[index], newUserData)
			this.dispatchEvent( new CustomEvent("change") );
		}
	};

	deleteUser ( id )
	{
		let index = this.innerData.findIndex( user => user.id === id );

		if ( index >= 0 )
		{
			this.innerData.splice(index, 1);
			this.dispatchEvent( new CustomEvent("change") );
		}
	};
	
	getUsers()
	{
		return this.innerData;
	};

	getUserById ( id )
	{
		if ( typeof(id) === 'string' )
		{
			let index = this.innerData.findIndex( user => user.id === id );

			return ( index >= 0 )? this.innerData[index] : null;
		}
		else 
		{
			return null;
		}
	};

	existingUserValidation ( id )
	{
		return ( this.getUserById( id ) == null)? false : true;
	};
	/*
	userDataValidation ( userData )
	{
		let success = true;

		
		let argNumberRegex = new RegExp('/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/')

		success = ( success && userData.hasOwnProperty('id') && userData.id != null );
		success = ( success && userData.hasOwnProperty('name') && userData.name != null );
		success = ( success && userData.hasOwnProperty('cellPhoneNumber') && userData.cellPhoneNumber.match(argNumberRegex) );
		success = ( success && userData.hasOwnProperty('email') && userData.email != null );
		
	
		
		return success;
	};
	*/
};

export { UserModel };