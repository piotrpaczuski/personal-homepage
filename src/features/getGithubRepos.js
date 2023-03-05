import axios from "axios";

export const getGithubRepos = async () => {
  return axios
    .get("https://api.github.com/users/piotrpaczuski/repos")
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      new Error(response.Error);
    });
};
