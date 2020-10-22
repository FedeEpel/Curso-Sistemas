<?php 

	$connection = new PDO('mysql:host=192.168.0.18:3306;dbname=pruebaabm', 'root', '1234');

	$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	try
	{
		$connection = new PDO('mysql:host=192.168.0.18:3306;dbname=pruebaabm', 'root', '1234');
	}
	catch(PDOException $connectionException)
	{
		$status = array( status=>'Error!', description=>$connectionException->getMessage() );
		echo json_encode($status);
		die();
	};

	$json_body = file_get_contents('php://input');

	$object = json_decode($json_body);

	$action = $object->action;
	$data = $object->body;


	function createUser( $connection, $data )
	{
		$SQLCode = "INSERT INTO contact (id, first_name, last_name, address, cell_phone_number, 	landline_phone_number, email)
					VALUES('$data->id', '$data->first_name', '$data->last_name', '$data->address', '$data->cell_phone_number', '$data->landline_phone_number', '$data->email')";

	 $connection->query($SQLCode);
	};

	function editUser( $connection, $data )
	{
		$SQLCode = "UPDATE contact
					SET id='$data->id', first_name='$data->first_name', last_name='$data->last_name', address='$data->address', cell_phone_number='$data->cell_phone_number', landline_phone_number='$data->landline_phone_number', email='$data->email'
					WHERE id='$data->id'";

		$connection->query($SQLCode);
	};

	function deleteUser( $connection, $data )
	{
		$SQLCode = "DELETE FROM contact WHERE id='$data->id'";

		$connection->query($SQLCode);
	};

	function getUserById( $connection, $data )
	{
		$SQLCode = "SELECT * FROM contact WHERE id='$data->id'";

		$result = $connection->query($SQLCode)->fetchAll();

		return $result;
	};

	function getUsers( $connection )
	{
		$SQLCode = "SELECT * FROM contact ORDER BY first_name ASC LIMIT 1000";

		$result =$connection->query($SQLCode)->fetchAll();

		return $result;
	}

	function existingUserValidation( $connection, $data )
	{
		if ( empty( getUserById($connection, $data) ) )
			return false;
		else
			return true;
	};

	/*
	$response = array();

	array_push($response, array(id=>'6', name=>'Pancho', lastName=>'Villa', address=> 'estrada 1234', cellPhoneNumber=> '2233054334', email=> 'panchovilla@hotmail.com'));
	array_push($response, array(id=>'5', name=>'Lola', lastName=>'Mento', address=> 'valencia 4321', cellPhoneNumber=> '542091603468', email=> 'lolamento@gmail.com'));
	array_push($response, array(id=>'6', name=>'Pancho', lastName=>'Villa', address=> 'estrada 1234', cellPhoneNumber=> '2233054334', email=> 'panchovilla@hotmail.com'));
	array_push($response, array(id=>'5', name=>'Lola', lastName=>'Mento', address=> 'valencia 4321', cellPhoneNumber=> '542091603468', email=> 'lolamento@gmail.com'));



	echo json_encode($response);
	*/
	echo json_encode( $action( $connection, $data ) );

?>