import { JokesApi } from './jokes.api';
import { ConfigService } from '../config/config';
import { AxiosApiService } from '../services/axious-api.service';
import { IApiService } from '../services/interfaces/i-api.service';

export class ApiWorld {
    public testContext: Record<string, unknown> = {};

    public get jokesApi(): JokesApi {
        if (!this._jokesApi) {
            this._jokesApi = new JokesApi(this._jokesApiService);
        }
        return this._jokesApi;
    }
    private _jokesApi?: JokesApi;

    private _jokesApiService: IApiService;
    private _configService: ConfigService;

    public constructor() {
        this._configService = new ConfigService();
        const config = this._configService.getConfig();

        this._jokesApiService = new AxiosApiService(config.api.jokesApi.baseUrl);
    }
}
