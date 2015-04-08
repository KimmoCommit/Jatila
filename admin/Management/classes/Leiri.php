<?php

class Leiri implements 	JsonSerializable {

	private static $errorcodes = array(

		-1 => "",
		0 => "",
		1 => "Kenttä ei saa olla tyhjä",
		11 => "Nimessä ei saa olla erikoismerkkejä",
		12 => "Nimessä tulee olla vähintään neljä (4) merkkiä",
		13 => "Nimessä tulee olla enintään kolmekymmentä (30) merkkiä",
		21 => "Puhelinnumerossa saa olla vain numeroita",
		22 => "Puhelinnumerossa on liian vähän numeroita - kentässä tulee olla täsmälleen 10 numeroa",
		23 => "Puhelinnumerossa on liian paljon numeroita - kentässä tulee olla täsmälleen 10 numeroa",
		51 => "Sähköposti on muotoiltu väärin - kentän tiedon tulee olla muotoa Matti@Meikalainen.fi",
		52 => "Sähköpostissa on liian vähän merkkejä - kentässä tulee olla vähintään kuusi (6) merkkiä",
		53 => "Sähköpostissa on liian paljon merkkejä - kentässä tulee olla enintään kolmekymmentä (30) merkkiä",
		61 => "Salasanassa tulee olla kaksi (2) pientä ja  yksi (1) iso kirjain sekä kaksi numeroa",
		71 => "Salasanat eivät täsmää"

		);

	public static function getError($errorcodes) {
		if (isset(self::$errorcodes[$errorcodes]))
			return self::$errorcodes[$errorcodes];

		return self::$errorcodes[-1];
	}


	private $id;
	private $name;
	private $startTime;
	private $endTime;
	private $price;
	private $teacher_fname;
	private $teacher_lname;
	private $isFull;





	function __construct($name = "", $startTime = "", $endTime = "", $price = "" , $teacher_fname = "", $teacher_lname = "",  $isFull = false, $id = 0) {
		$this->id = $id;
		$this->name = trim($name);
		$this->startTime = $startTime;
		$this->phone = $endTime;
		$this->email = $price;
		$this->teacher_fname =  $teacher_fname;
		$this->teacher_lname =  $teacher_lname;
		$this->isFull =  $isFull;



	}

	public function setTeacherFname($teacher_fname) {
		$this->teacher_fname = trim($teacher_fname);
	}

	public function getTeacherFname($teacher_fname) {
		return $this->teacher_fname;
	}


	public function setTeacherLname($teacher_lname) {
		$this->teacher_lname = trim($teacher_lname);
	}

	public function getTeacherLname($teacher_lname) {
		return $this->teacher_lname;
	}


	public function getIsFull($isFull) {
		$this->isFull = $isFull;
	}

	public function setIsFull($isFull) {
		return $this->isFull;
	}

	public function setId($id) {
		$this->id = trim($id);
	}


	public function getId() {
		return $this->id;
	}


	public function setName($name) {
		$this->name = trim($name);
	}

	public function getName() {
		return $this->name;
	}


	public function setStartTime($startTime) {
		$this->startTime = $startTime;
	}

	public function getStartTime() {
		return $this->starTime;
	}

	public function setEndTime($endTime) {
		$this->endTime = $endTime;
	}

	public function getEndTime() {
		return $this->endTime;
	}

	public function setPrice($price) {
		$this->price = $price;
	}

	public function getPrice() {
		return $this->price;
	}
	public function jsonSerialize()
	{
		return [
		'leiri' => [
		'name' => $this->name,
		'startTime' => $this->startTime,
		'endTime' => $this->endTime,
		'price' => $this->price,
		'teacherFname' => $this->teacher_fname,
		'teacherLname' => $this->teacher_lname,
		'isFull' => $this->isFull
		]
		];
	}



}
?>