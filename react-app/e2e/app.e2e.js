import { Selector } from 'testcafe';

fixture `App initial`
	.page `http://localhost:9091/`;

test('App', async t => {
    await t
        .click('.button')
        .expect(Selector('.button').innerText).eql('Button updated');
});
