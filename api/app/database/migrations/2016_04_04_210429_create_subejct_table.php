<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubejctTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('subject', function($table){

			$table->increments('id');
			$table->string('gender');
			$table->string('name');
			$table->integer('a_one');
			$table->integer('a_two');
			$table->integer('s_one');
			$table->integer('s_two');
			$table->integer('n_one');
			$table->integer('n_two');
			$table->timestamps();

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('subject');
	}

}
