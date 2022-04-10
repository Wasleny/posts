<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        Comment::create($request->all());
    }

    public function destroy($id)
    {
        Comment::where('id', $id)->delete();
    }
}
