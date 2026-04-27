<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthLoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthUserController extends Controller
{
    public function apiLogin(AuthLoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            return response()->json(['message' => 'Неверный логин или пароль'], 401);
        }

        /**
         * @var User
         */

        $user = Auth::user();

        return response()->json(['token' => $user->createToken('api')], 200);
    }

    public function login()
    {
        return Inertia::render('Login');
    }

    public function postLogin(AuthLoginRequest $request)
    {
        if (!Auth::attempt($request->validated(), $request->remember)) {
            return back()->withErrors(['email' => 'Неверный email или пароль']);
        }

        $request->session()->regenerate();
        return redirect()->intended('/admin');
    }
}
