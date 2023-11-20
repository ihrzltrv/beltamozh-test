import request from '@/services/request';

const getAll = () => request.get('');
const get = (filters) => {
    const queryString = Object.keys(filters)
        .map(key => `${key}=${filters[key]}`)
        .join('&');
    const url = `/?${queryString}`;

    return request.get(url);
};
const create = (params) => request.post('', params);
const update = (id, data) => request.put(`/${id}`, data);

const deletePersonProfile = (id) => request.delete(`/${id}`);

export default {
    getAll,
    get,
    create,
    update,
    delete: deletePersonProfile,
}