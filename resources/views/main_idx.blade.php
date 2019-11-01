<?php
	$djson = file_get_contents('json/techno.json');
	$mnu = json_decode($djson, true);
	// var_dump($mnu["Technology"][0]["Nama"]);
	$mnu = $mnu["Technology"];
	// echo $mnu[0]["Nama"];
?>
@extends('layout.main')

@section('title', 'Latihan API')

@section('content')

<div class="container">
	<div class="row ml-2 my-3 justify-content-center">
		<div class="col-md-8">
			<h1 class="text-center">Search Movie</h1>
			<div class="input-group mb-3">
			  <input type="text" class="form-control" placeholder="Enter Movie List" aria-label="Enter Movie List" aria-describedby="button-addon2" id="idSearch">
			  <div class="input-group-append">
			    <button class="btn btn-primary" type="button" id="searchButton">Find</button>
			  </div>
			</div>
		</div>
	</div>
	<hr>

	<div class="row ml-2" id="MovList">
		<!-- @foreach($mnu as $rowM)
			<div class="col-md-4">
				<div class="card">
				  <img src="img/{{ $rowM["Gambar"] }}" class="card-img-top" alt="" >
					  <div class="card-body">
					    <h5 class="card-title">{{$rowM["Nama"]}}</h5>
					    <p class="card-text">{{ $rowM["Deskripsi"]}}</p>
					    <a href="#" class="btn btn-primary">Baca Detail</a>
					  </div>
				</div>
			</div>
		@endforeach		 -->
	</div>

</div>

@endsection