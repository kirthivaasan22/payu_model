export const METHOD = {
	POST: "POST",
	GET: "GET",
	DELETE: "DELETE",
	PATCH: "PATCH",
};

async function RestApi(url: string, { method, headers, payload = {} }) {
	const defaultHeader = { "Content-type": "application/json; charset=UTF-8" };

	let params = {
		method,
		headers: {
			...defaultHeader,
			...headers,
		},
	};

	if (method === METHOD.POST || method === METHOD.PATCH) {
		params = {
			...params,
			body: JSON.stringify(payload),
		};
	}

	const finalUrl = "https://test.payu.in/_payment";

	return fetch(finalUrl, params).then((res) => {
		try {
			return res && res.json ? res.json() : {};
		} catch {
			return {};
		}
	});
}

export default RestApi;
