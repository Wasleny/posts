<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\DataResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return new DataResource(Post::with('comments')->orderByDesc('created_at')->get());
    }

    public function store(Request $request)
    {
        try {
            Post::create($request->all());
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function destroy($id)
    {
        Post::where('id', $id)->delete();
    }
}
