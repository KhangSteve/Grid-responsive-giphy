/**
 * Created by Khang @Author on 15/01/18.
 */

import axios from 'axios';

const REQ_DATA = 'REQ_DATA';
const RECV_DATA = 'RECV_DATA';
const RECV_ERROR = 'RECV_ERROR';

function requestData() {
	return {type: REQ_DATA}
};

function receiveData(json) {
	return{
		type: RECV_DATA,
		data: json
	}
};

function receiveError(json) {
	return {
		type: RECV_ERROR,
		data: json
	}
};

export function fetchData() {
	return function(dispatch) {
		dispatch(requestData());
		return axios({
			url: 'http://api.giphy.com/v1/stickers/trending?api_key=NAYLSmLVicJU093K0EsRWC5MY077DgeH&limit=20&ratinng=a',
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(receiveData(response.data));
			})
			.catch(function(response){
				dispatch(receiveError(response.data));
			})
	}
};