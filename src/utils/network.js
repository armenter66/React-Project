import { HTTP, HTTPS } from '@constans/api';

/**
 * Изменяем URL с HTTP to HTTPS
 * @param {String} url для изменений
 * @returns {String} url c HTTPS
 */

export const changeHTTP = (url) => {
	const result = url ? url.replace(HTTP, HTTPS) : url;
	return result;
};

/**
 * Обрабатываем запрос Fetch
 * @param {String} url для запроса
 * @returns {Promise} Promise c результатом запроса
 */

export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Could not fetch', res.status);
			return false;
		}

		return await res.json();
	} catch (error) {
		console.log('Could not fetch', error.message);
		return false;
	}
};

//getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body)); PROMISE FUNCTION

// (async () => {
// 	const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
// })();

export const makeConcurrentReq = async (url) => {
	const res = await Promise.all(
		url.map((res) => {
			return fetch(res).then((res) => res.json());
		})
	);

	return res;
};
