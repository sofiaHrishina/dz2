export class ConfigService {
    private readonly config: ConfigDto;

    public constructor() {
        this.config = {
            api: {
                jokesApi: {
                    baseUrl: process.env.JOKES_API_URL || 'http://localhost:3005'
                }
            }
        };
    }

    public getConfig(): ConfigDto {
        return this.config;
    }
}
export interface ConfigDto {
    api: ApiConfigDto;
}

export interface ApiConfigDto {
    jokesApi: JokesApiConfigDto;
}

export interface JokesApiConfigDto {
    baseUrl: string;
}
