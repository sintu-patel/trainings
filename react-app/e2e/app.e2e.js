import { Selector } from 'testcafe';
import ReactSelector from 'testcafe-react-selectors';

fixture `App initial`
	.page `http://localhost:9091/`;

test('App', async t => {
    await t
        .click('.button')
        .expect(Selector('.button').innerText).eql('Button updated');
});

test('App with React Selectors', async t => {
    await t
        .click('.button')
        .expect(ReactSelector('Button').innerText).eql('Button updated');
});
