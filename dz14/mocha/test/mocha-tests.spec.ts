import { describe, before, it } from 'mocha';
import { expect } from 'chai';
import { ApiWorld } from '../src/api/api-world';
import { JokesApi } from '../src/api/jokes.api';

describe('Jokes API tests', () => {
    let apiWorld: ApiWorld;
    let jokesApi: JokesApi;
    const context: Record<string, unknown> = {};

    before(() => {
        apiWorld = new ApiWorld();
        jokesApi = apiWorld.jokesApi;
    });

    describe('General Jokes', () => {
        it('Should return a random joke', async () => {
            const [response, joke] = await jokesApi.getRandomJoke();
            expect(response.status).to.equal(200);
            expect(joke).to.have.property('setup');
            expect(joke).to.have.property('punchline');
        });

        it('Should return 10 random jokes', async () => {
            const [response, jokes] = await jokesApi.getTenRandomJokes();
            expect(response.status).to.equal(200);
            expect(jokes).to.be.an('array').that.has.lengthOf(10);
        });

        it('Should return a joke by ID', async () => {
            const randomJokeId = Math.floor(Math.random() * 100) + 1;
            const [response, joke] = await jokesApi.getJokeById(randomJokeId);
            expect(response.status).to.equal(200);
            expect(joke).to.have.all.keys('id', 'type', 'setup', 'punchline');
            context.jokeId = joke.id;
        });
    });

    describe('Programming Jokes', () => {
        it('Should return a random programming joke', async () => {
            const [response, jokes] = await jokesApi.getRandomProgrammingJoke();

            expect(response.status).to.equal(200);
            if (Array.isArray(jokes)) {
                jokes.forEach(joke => expect(joke.type).to.equal('programming'));
            } else {
                expect(jokes.type).to.equal('programming');
            }
        });

        it('Should return 10 random programming jokes', async () => {
            const [response, jokes] = await jokesApi.getTenRandomProgrammingJokes();
            expect(response.status).to.equal(200);
            expect(jokes).to.be.an('array');
            jokes.forEach(joke => expect(joke.type).to.equal('programming'));
        });
    });

    it('Should return joke types', async () => {
        const [response, types] = await jokesApi.getJokeTypes();

        expect(response.status).to.equal(200);
        expect(types).to.be.an('array');
    });
});
