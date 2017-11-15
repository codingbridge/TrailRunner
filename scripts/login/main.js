
const t = require('../../scripts/trailCrusher.js');

module.exports.Run = function(action){
  t.Click_Button(action);
  t.Wait();
}
module.exports.ChangeBankAccount = function(bankAccountName){
  t.Select_List('', bankAccountName);
  t.Wait();
}
