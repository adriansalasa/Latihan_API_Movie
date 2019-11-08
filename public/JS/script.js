function findMovie(){

	$('#MovList').html(''); /* => fungsi untuk kosongin input text*/

	
	$.ajax({
		url:'http://omdbapi.com',
		type: 'get',
		dataType:'json',
		data:{
				'apikey': 'd63d3161',
				's': $('#idSearch').val()
		},

		success:function(hasil){
			 console.log(hasil)
			 if(hasil.Response == "True"){
				let film = hasil.Search;

				$.each(film, function(i, data){
					$('#MovList').append(`						
						<div class="col-md-4">
							<div class="card mb-3"><img src="`+ data.Poster +`" class="card-img-top " alt="" >
								<div class="card-body">
									<h5 class="card-title">`+ data.Title +`</h5>
									<h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
									<a href="#" class="btn btn-primary btn-sm lht_Detail" data-toggle="modal" data-target="#exampleModal" data-ID="`+data.imdbID+`" >Baca Detail</a>
								</div>
							</div>
						</div>
						`)

				});				

				$('#idSearch').val('');
			 }else{
				$('#MovList').html(`
					<div class = "col">
						<h1 class = "text-center"> ` + hasil.Error +` </h1>
					</div>
					`)
			}
		}

	})

}


$('#searchButton').on('click', function(){
	// $.getJSON('http://www.imdb.com?apikey=d63d3161&')	
	findMovie();
});

$('#idSearch').on('keyup', function(e){
	if(e.keyCode === 13){
		findMovie();
	}
});

$('#MovList').on('click','.lht_Detail', function(){
	
	$.ajax({
		url: 'http://omdbapi.com',
		dataType:'json',
		type:'get',
		data: {
				'apikey' : 'd63d3161',
				'i' : $(this).data('id')
		},
	success:function(movDet){
		if(movDet.Response === "True"){
			$('.modal-body').html(`
				<div class = "container-fluid">
					<div class = "row">			
					
						<div class = "col-md-4">		
							<img src="`+ movDet.Poster + `"  class="img-fluid">			
						</div>

						<div class = "col-md-8">
							<ul class="list-group">
							  <li class="list-group-item"><h3>`+movDet.Title+`</h3></li>				
							  <li class="list-group-item">`+movDet.Genre+`</li>				
							  <li class="list-group-item">`+movDet.Rated+`</li>				
							  <li class="list-group-item">`+movDet.Released+`</li>				
							  <li class="list-group-item">`+movDet.Director+`</li>				
							  <li class="list-group-item">`+movDet.Runtime+`</li>							 
							</ul>
						</div>

					</div>
				</div>
			`);
		}
	}
	});
});