var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let bigName = "";
friends.map((name) => {
  if (name.length > bigName.length) bigName = name;
});
console.log(bigName);
