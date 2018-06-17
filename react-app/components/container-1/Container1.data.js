import { Factory } from 'rosie'
// define an object you want to build
Factory.define('account')
  .sequence('id')
  .attr('bal', '1000')

Factory.define('user')
  .sequence('id')
  .option('verified', false)
  .attr('fname', 'Sintu')
  .attr('lname', 'Singh')
  .attr('account', ['verified'], (verified) => {
    if (!verified) { return null }
    else { return Factory.build('account') }
 })

export default Factory