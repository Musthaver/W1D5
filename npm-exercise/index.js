var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// console.log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
// console.log(chalk.keyword('orange')('Yay for orange colored text!'));
// console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// console.log(chalk.hex('#DEADED').bold('Bold gray!'));

var error = chalk.bold.red;
console.log(error("Oh no! An error!"));
var correct = chalk.keyword('green');
console.log(correct('Yay! No mistakes!'));
