<?php

namespace App\Providers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share('user',function(){
            if(Auth::user()){
                return [
                    'isLoggedIn' => true,
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                    'email' => Auth::user()->email
                ];
            } else{
                return [
                    'isLoggedIn' => false,
                ];
            }
        });
    }
}
