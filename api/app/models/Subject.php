<?php

class Subject extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'subject';

	public static function male(){

		$subjects = Subject::all();

		$data = array();

		foreach($subjects as $subject){

			if($subject->gender == 'm'){

				$data[] = $subject;

			}

		}

		return $data;

	}

	public static function female(){

		$subjects = Subject::all();

		$data = array();

		foreach($subjects as $subject){

			if($subject->gender == 'f'){

				$data[] = $subject;

			}

		}

		return $data;

	}

}
