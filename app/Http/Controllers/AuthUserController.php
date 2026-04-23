<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthLoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthUserController extends Controller
{
    public function login(AuthLoginRequest $request)
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
}
