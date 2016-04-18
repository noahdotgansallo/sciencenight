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

	public function avg(){

		$sum = $this->a_one + $this->a_two + $this->n_one + $this->n_two;

		$mean = round($sum/4, 2);

		return $mean;

	}

	public function percentile(){

		$subjects = Subject::all();

		$total = $subjects->count();

		$data = array();

		foreach($subjects as $subject){

			$data[$subject->id] = $subject->avg();

		}

		arsort($data);

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

	public static function arm($array = null){

		$data = array();

		foreach ($array as $subject) {

			$data[] = $subject->a_one + $subject->a_two;

		}

		return $data;


	}

	public static function neck($array = null){

		$data = array();

		foreach ($array as $subject) {

			$data[] = $subject->n_one + $subject->n_two;

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

	public static function deviate($array = null){

		$mean = Subject::stepOne($array);

		$squared = Subject::stepTwo($array, $mean);

		$newMean = Subject::stepThree($squared);

		$deviation = Subject::stepFour($newMean);

		return $deviation;

	}

	
	// 1. Work out the mean of all numbers in group
	private static function stepOne($array = null){

		$sum = 0;

		$counter = 0;

		foreach ($array as $a) {

			$sum = $sum + $a;

			$counter = $counter + 1;

		}

		$mean = $sum/$counter;

		return $mean;

	}

	// 2. Foreach number, subtract the mean and square the result
	private static function stepTwo($array = null, $mean = null){

		foreach($array as $a) {

			$number = $a - $mean;

			$data[] = $number*$number;

		}

		return $data;

	}

	// 3. Work out the mean of those squared numbers
	private static function stepThree($array = null){

		$sum = 0;

		$counter = 0;

		foreach($array as $a){

			$sum = $sum + $a;

			$counter = $counter + 1;

		}

		$mean = $sum/$counter;

		return $mean;

	}

	// 4. Take the square root
	private static function stepFour($mean = null){

		$data = sqrt($mean);

		return $data;

	}


}
