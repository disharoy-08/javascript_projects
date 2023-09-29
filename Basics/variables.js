const accountId = 10032
let accountEmail = "disha@gmail.com"
var accountPassword = "10987"
acountCity = "WestBengal"
let accountState

//accountId = 2  // not allowed when variable type is const

accountEmail = "roy@gmail.com"
accountPassword = "abekm"
acountCity = "Bangaluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, acountCity, accountState])

