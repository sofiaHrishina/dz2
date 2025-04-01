import { IApiService } from '../services/interfaces/i-api.service';
import { JokeDto } from '../dto/joke.dto';
import { JokeType } from '../dto/joke.dto';
export class JokesApi {
    public constructor(private apiService: IApiService) {}

    public async getRandomJoke(): Promise<[any, JokeDto]> {
        const response = await this.apiService.get('/jokes/random');
        return [response, response.data];
    }


    public async getTenRandomJokes(): Promise<[any, JokeDto[]]> {
        const response = await this.apiService.get('/jokes/ten');
        return [response, response.data];
    }

    public async getJokeById(id: number): Promise<[any, JokeDto]> {
        const response = await this.apiService.get(`/jokes/${id}`);
        return [response, response.data];
    }

    public async getRandomProgrammingJoke(): Promise<[any, JokeDto]> {
        const response = await this.apiService.get('/jokes/programming/random');
        return [response, response.data];
    }

    public async getTenRandomProgrammingJokes(): Promise<[any, JokeDto[]]> {
        const response = await this.apiService.get('/jokes/programming/ten');
        return [response, response.data];
    }

    public async getJokeTypes(): Promise<[any, JokeType[]]> {
        const response = await this.apiService.get('/types');
        return [response, response.data];
    }
}
