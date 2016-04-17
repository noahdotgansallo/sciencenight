<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('hello');
	}

	public function view(){

		try {

			$subjects = Subject::all();

			foreach($subjects as $subject){

				$jawn = $subject->a_one + $subject->a_two + $subject->n_one + $subject->n_two;

				$jawn = ($jawn/20)*100;

				$jawn = round($jawn);

				$subject->average = $jawn;

			}

			$subjects = $subjects->reverse();

			$data = Citrus::response('data', $subjects);
			
		} catch (Exception $e) {

			$data = Citrus::response('error', $e);
			
		}

		return $data;

	}

	public function avg(){

		$male = Subject::male();

		$female = Subject::female();

		$counter = 0;

		$maleAvg = 0;
		$femaleAvg = 0;

		$data = array();

		foreach($male as $male){

			$maleAvg = $maleAvg + $male->a_one;

			$maleAvg = $maleAvg + $male->a_two;

			$counter = $counter + 1;

		}

		$data['male'] = $maleAvg/$counter;

		$counter = 0;

		foreach($female as $female){

			$femaleAvg = $femaleAvg + $female->a_one;

			$femaleAvg = $femaleAvg + $female->a_two;

			$counter = $counter + 1;

		}

		$femaleAvg = $femaleAvg/$counter;

		$data['female'] = $femaleAvg; 

		return $data;
	}

	public function create(){

		$input = Input::all();

		try {
			$subject = new Subject;

			$subject->gender = $input['gender'];

			$subject->name = $input['name'];

			$subject->a_one = $input['a_one'];

			$subject->a_two = $input['a_two'];

			$subject->n_one = $input['n_one'];

			$subject->n_two = $input['n_two'];

			$subject->save();

			$data = Citrus::response('data', 1);
			
		} catch (Exception $e) {

			$data = Citrus::response('error', $e);
			
		}


		return $data;

	}

}
