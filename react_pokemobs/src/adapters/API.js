const endpoint = `http://localhost:3000/api/v1`;

const signupURL = `${endpoint}/users`;
const loginURL = `${endpoint}/login`;
const validateURL = `${endpoint}/validate`;

const jsonify = resp => {
  if (resp.ok) return resp.json();
  else throw resp.json();
};

const saveToken = data => {
  localStorage.setItem("token", data.token);
  return data.user;
};

const handleServerError = response => {
  throw response
}

const createUser = user => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  };
  return fetch(signupURL, configObj)
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);
};

export default {
  createUser
};
