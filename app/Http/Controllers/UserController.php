<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index($id){
     $users = User::active()
            ->orderByName()
            ->get(['id', 'name', 'email']);

        return Inertia::render('Users', [
            'users' => $users
        ]);
    }
}




// public function getFields($id)
//     {
//         $category = Category::findOrFail($id);

//         return response()->json([
//             'fields' => json_decode($category->extra_fields),
//             'size_guide' => $category->size_guide,
//         ]);
//     }
