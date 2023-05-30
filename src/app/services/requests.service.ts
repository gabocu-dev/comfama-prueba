import { Injectable } from '@angular/core';
import { ConnectionsService } from "./connections.service";
import { CharacterResponseModel } from "src/app/models";]
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class RequestsService {
    constructor(private conexion: ConnectionsService) { }

    getAnimeRecommendations() {
        return this.conexion.getRequest('recommendations/anime').pipe(
            map((data: any) => data.data),
            map((data: any) => data.map((shows: any) => shows.entry))
        )
    }

}
