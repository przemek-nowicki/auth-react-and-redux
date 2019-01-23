import 'isomorphic-fetch';
import invariant from 'invariant';

export default class Api {

  static url = '';

  async checkResponse(response) {
    if (response.ok) {
      return response;
    }
    const err = new Error(response.status);
    err.code = response.status;
    err.response = response;
    const body = await response.text();
    try {
      err.body = JSON.parse(body);
    } catch (e) {
      err.body = body;
    }
    throw err;
  }

  createHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  async request(method, uri = '', body = '') {
    method = method.toUpperCase();
    const allowedMethods = [
      'DELETE',
      'PATCH',
      'POST',
      'PUT',
    ];
    invariant(allowedMethods.indexOf(method) !== -1, 'HTTP Method uknown');
    const headers = this.createHeaders();
    const apiUrl = `${ Api.url }${ uri }`;
    var resp;
    if (body === '') {
      resp = await fetch(apiUrl, {
        headers,
        method,
        mode: 'cors',
      });
    } else {
      resp = await fetch(apiUrl, {
        body: JSON.stringify(body),
        headers,
        method,
        mode: 'cors',
      });
    }

    return this.checkResponse(resp);
  }

  async get(uri) {
    const headers = this.createHeaders();
    const apiUrl = `${ Api.url }${ uri }`;
    const response = await fetch(apiUrl, {
      headers,
      method: 'GET',
      mode: 'cors',
    });
    return this.checkResponse(response);
  }

  async getJSON(uri) {
    const response = await this.get(uri);
    return response.json();
  }

  async post(uri, body = '') {
    return this.request('POST', uri, body);
  }

  async postJSON(uri, body) {
    const response = await this.post(uri, body);
    return await response.json();
  }

  async put(uri, body = '') {
    return this.request('PUT', uri, body);
  }

  async putJSON(uri, body) {
    const response = await this.put(uri, body);
    return await response.json();
  }

  async delete(uri, body = '') {
    return this.request('DELETE', uri, body);
  }

  async deleteJSON(uri, body) {
    const response = await this.delete(uri, body);
    return await response.json();
  }

  async patch(uri, body = '') {
    return this.request('PATCH', uri, body);
  }

  async patchJSON(uri, body = '') {
    const response = await this.patch(uri, body);
    return await response.json();
  }
}