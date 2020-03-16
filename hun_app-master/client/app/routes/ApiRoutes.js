// let endPoint = "https://api.hearusnowproject.org/v1/";
let endPoint = "http://localhost:3200/v1/";

let apiRoutes = {};

apiRoutes.signup = endPoint + "auth/register";
apiRoutes.login = endPoint + "auth/login";
apiRoutes.contact = endPoint + 'contact-form';
apiRoutes.donate = endPoint + 'donation';

export default apiRoutes;
