// don't do it that way. Its only for demo purposes
const HARDCODED_DEMO_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtaWNoYWxjenVrbS54eXoiLCJpYXQiOjE1MzEzNDY1MjEsImV4c' +
    'CI6MTU5NDUwNDkyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiYWRtaW4uYWRtaW5AZXhhbXBsZS5jb20iLCJOYW1lIjoiQW' +
    'RtaW4iLCJTdXJuYW1lIjoiQWRtaW4iLCJFbWFpbCI6ImFkbWluLmFkbWluQGV4YW1wbGUuY29tIiwiUm9sZSI6IlN5c3RlbSBBZG1pbnN0' +
    'cmF0b3IifQ.q14fIWoyZsvkDmDDtE6Hi34zpmSJLNmtueFaHSd82YM';

/**
 * Returns hardcoded token for demo purposes
 * @returns {string}
 */
const generateJWTToken = () => {
    return HARDCODED_DEMO_TOKEN;
};

/**
 * Only admin allowed ;) for demo purposes
 * @param username
 * @param password
 * @returns {boolean}
 */
const isAuthenticated = (username, password) => username === 'admin' && password === 'admin';

const isAuthorized = (request) => request.get('Authorization') === `Bearer ${HARDCODED_DEMO_TOKEN}`;

module.exports = {
    generateJWTToken,
    isAuthorized,
    isAuthenticated
};