<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/server-render', function () {
    return view('server');
});

Route::get('/{any}', [SpaController::class, 'index'])
    ->where('any', '^(?!api|js|css|media|storage|nova|manifest|service-worker).*$');
