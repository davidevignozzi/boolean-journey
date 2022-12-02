<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="content">
        <button class="btn btn-light"> <a href="{{route('movies.index')}}"><i class="fas fa-arrow-left"></i> homepage</a></button>
        <h2>{{$movie->title}}</h2>
        <h3>{{$movie->author}}</h3>
        <h4>{{$movie->genre}}</h4>
        <p>{{$movie->plot}}</p>    
    </div>
</body>
</html> 