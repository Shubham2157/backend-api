module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: "https://strapi-backnd.herokuapp.com/",
    admin: {
        url: "/",
        serverAdminPanel: false,
        auth: {
            secret: env('ADMIN_JWT_SECRET', ''),
        },
    },
});