const priya = "Asif Akbar";
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`;

const multiline =
  "This is my first line. \n" +
  "this is my second line. \n" +
  "this is my third line. \n" +
  "this is my fourth line. \n" +
  "this is my fifth. \n" +
  "this is my sixth line. \n" +
  "this is my seventh line. \n";
console.log(multiline);

const multilineNew = `
this is backtic first line.
this is backtic second line.
this is backtic third line.
this is backtic fourth line.
this is backtic fifth line.
`;
console.log(multilineNew);

const friends = ["abul", "babul", "kabul", "sabul"];
const first = "Mamun";
const last = "chowdhury";
const fullNameOld ='This person name is' + first + " " + last;
const fullNameNew = `This person name is${first} ${last} Has money ${friends.length * 500}. He lives in dhaka ` ;
console.log(fullNameNew);

const count = 5;
const old = '<h3 class="friend-name">Friend</h3>';
const old2 = '<h3 class="friend-name">Friend- ' + count + "</h3>";
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

