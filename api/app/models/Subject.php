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

	public static function getMaleArmAvg(){

		$male = Subject::male();

		$avg = 0;

		$counter = 0;

		foreach($male as $male){

			$avg = $avg + $male->a_one;

			$avg = $avg + $male->a_two;

			$counter = $counter + 1;

		}

		$avg = round($avg/$counter, 2);

		return $avg;

	}

	public static function getMaleNeckAvg(){

		$male = Subject::male();

		$avg = 0;

		$counter = 0;

		foreach($male as $male){

			$avg = $avg + $male->n_one;

			$avg = $avg + $male->n_two;

			$counter = $counter + 1;

		}

		$avg = round($avg/$counter, 2);

		return $avg;

	}

	public static function getFemaleArmAvg(){

		$female = Subject::female();

		$avg = 0;

		$counter = 0;

		foreach($female as $female){

			$avg = $avg + $female->a_one;

			$avg = $avg + $female->a_two;

			$counter = $counter + 1;

		}

		$avg = round($avg/$counter, 2);

		return $avg;

	}

	public static function getFemaleNeckAvg(){

		$female = Subject::female();

		$avg = 0;

		$counter = 0;

		foreach($female as $female){

			$avg = $avg + $female->n_one;

			$avg = $avg + $female->n_two;

			$counter = $counter + 1;

		}

		$avg = round($avg/$counter, 2);

		return $avg;

	}

}
