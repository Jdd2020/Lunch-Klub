export interface Room {
    id: string;
    name: string;
    description: string;
    user: string;
    code: string;
    max_players: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export class RoomClass implements Room {
    id: string;
    name: string;
    description: string;
    user: string;
    code: string;
    max_players: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;

    constructor(roomData: Room) {
        this.id = roomData.id;
        this.name = roomData.name;
        this.description = roomData.description;
        this.user = roomData.user;
        this.code = roomData.code;
        this.max_players = roomData.max_players;
        this.is_active = roomData.is_active;
        this.created_at = roomData.created_at;
        this.updated_at = roomData.updated_at;
    }
}