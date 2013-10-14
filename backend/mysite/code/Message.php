<?php

class Message extends DataObject {
	static $db = array(
		'Author' => 'Varchar(255)',
		'Body' => 'Varchar(140)',
		'Posted' => 'Datetime'
	);
}

class Message_Controller extends Controller {
	private static $allowed_actions = array(
		'get'
	);

	function get($request) {
		$start = (int)$request->getVar('start');
		$pagesize = (int)$request->getVar('pagesize');

		$results = Message::get()->sort('Posted DESC')->limit($pagesize, $start);

		foreach ($results as $row) {
			$resultArray[] = array(
				'Author' => $row->Author,
				'Body' => $row->Body,
				'Posted' => date('c', time($row->Posted)) // Convert to ISO8601
			);
		}

		return json_encode($resultArray);
	}
}
