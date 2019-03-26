const TOKEN = "a563435158e660517fb17dbca440ec52fa7eda38";

export const getUser = async username => {
  console.log("test");
  console.log(username);
  const result = await fetch(
    `https://api.github.com/users/${username}?access_token=${TOKEN}`
  );
  const json = await result.json();
  return json;
};

export const getRepos = async username => {
  const result = await fetch(
    `https://api.github.com/users/${username}/repos?access_token=${TOKEN}`
  );
  const json = await result.json();
  return json;
};
