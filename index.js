function hndlr(res) {
    try {
        document.getElementById('content').innerHTML += `<div style='color:grey;'> About${res.searchInformation.formattedTotalResults} 
        results(${res.searchInformation.formattedSearchTime} seconds)`;
        for (var i = 0; i < res.items.length; i++) {
            document.getElementById('content').innerHTML += `<br> <a class="heading" "href=${res.items[i].link}target="_blank">${res.items[i].link}</a><a target='_blank'href=${res.items[i].link} class="search_heading"><h2 class="inner_heading">${res.items[i].title}</h2></a><div class="search_bottom" >${res.items[i].htmlSnippet}</div><hr style="color:grey; opacity:0.2; width:60%;"/>`
        }
    } catch (error) {
        document.getElementById('content').innerHtml = error;
    }
}
// style="color:grey; font-size:12px; margin: 0px 0px;

// style="text-decoration:none; margin: 20px 0px;"

// style="margin:20px 0 0"

// style="margin-bottom:10px;"