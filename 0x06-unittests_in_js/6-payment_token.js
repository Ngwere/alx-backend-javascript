function getPaymentTokenFromAPI(success){
	if (success) {
		return new Promise((resolved) => {
			resolved({data: 'Successful response from the API' });
		}
}

module.exports = getPaymentTokenFromAPI;
