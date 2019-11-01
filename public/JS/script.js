$('#searchButton').on('click', function(){
	// $.getJSON('http://www.imdb.com?apikey=d63d3161&')	
	$('#MovList').html('');

	
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
									<a href="#" class="btn btn-primary btn-sm">Baca Detail</a>
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
});