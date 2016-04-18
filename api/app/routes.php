<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::post('create/', 'HomeController@create');

Route::get('view/', 'HomeController@view');

Route::get('avg/', 'HomeController@avg');

Route::get('amt/', 'HomeController@getAmount');

Route::get('deviation', 'HomeController@deviation');

Route::get('subject/{id}', 'HomeController@subject');
