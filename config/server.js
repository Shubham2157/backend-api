module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('BACK_URL'),
    admin: {
        url: "/",
        serverAdminPanel: false,
        auth: {
            secret: env('ADMIN_JWT_SECRET', ''),
        },
    },
});