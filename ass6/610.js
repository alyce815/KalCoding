// to build a URL shortener, we'll map and encode 
// ids in alphanumeric characters a-Z and 0-9 which shortens 
// the length of the id
// we can simply store full urls in a hash with the id as a key

function idToShortURL(n){
	let map = "abcdefghijklmnopqrstuvwxyz0123456789";
	let shortURL;

	while (n){
		shortURL.push(map[%62]); //check on pushback
		n = n/62;
	}

	shortURL = reverse(shortURL);
	return shortURL;
}

function shortURLtoID(shortURL){
	let id = 0;

	for (let i = 0; i < shortURL.length; i++){
		if ('a' <= shortURL[i] && shortURL[i] <= 'z')
			id = id*62 + shortURL[i] - 'a';
		if ('A' <= shortURL[i] && shortURL[i] <= 'Z')
			id = id*62 + shortURL[i] - 'a' + 26;
		if ('0' <= shortURL[i] && shortURL[i] <= '9')
			id = id*62 + shortURL[i] - '0' + 52;

	}

}

//conversion takes linear time with constant space.