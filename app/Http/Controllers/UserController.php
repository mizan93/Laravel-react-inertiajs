<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('User/List', [
            'users' => User::all()->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'edit_url' => URL::route('user.edit', $user->id),
                    'delete_url' => URL::route('user.destroy', $user->id),
                ];
            }),
            'create_url' => URL::route('user.create'),
        ])->withViewData(['title'=>'User Crud Operations']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $this->validate($request,[
            'name'=>['required'],
            'email'=>['required','email','unique:users'],
            'image'=>['image','mimes:png,jpg'],
            'password'=>['required'],
            'password_confirmation'=>['required'],
        ]);
        if ($request->hasFile('image')) {
           $image=$request->image->store('images','public');
        }
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'image'=>$image ?? '',
            'password'=>bcrypt($request->password)
        ]);
        
       return Redirect::route('user.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user=User::find($id);
        return Inertia::render('User/Edit', [
            'id'=>$user->id,
            'name'=>$user->name,
            'email'=>$user->email,
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name'=>['required'],
            'email'=>['required','email','unique:users,email,'.$id.',id'],
        ]);
        User::find($id)->update($request->all());
        return Redirect::route('user.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return Redirect::route('user.index');

    }
}
