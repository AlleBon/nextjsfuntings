export interface serverData{
    id: number,
    hostname: string,
    ip: string,
    port: number,
    players: number,
    bots: number,
    max_players: number,
    map: string,
    country_code: string,
    banned: boolean | null,
    updated_at: Date,
    ping: number,
    connect: string,
    map_image: string,
    url: string
}