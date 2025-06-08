package com.lunchklub.api.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class User extends Base {
    private String username;
    private String email;
    private String password;
    private boolean isAdmin;
    private String[] rooms;

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String[] getRooms() {
        return rooms;
    }

    public void setRooms(String[] rooms) {
        this.rooms = rooms;
    }

    public void addRoom(String roomId, Room room) {
        if (this.rooms == null) {
            this.rooms = new String[1];
            this.rooms[0] = roomId;
        } else {
            String[] newRooms = new String[this.rooms.length + 1];
            System.arraycopy(this.rooms, 0, newRooms, 0, this.rooms.length);
            newRooms[this.rooms.length] = roomId;
            this.rooms = newRooms;
        }
    }

    public void removeRoom(String roomId) {
        if (this.rooms != null) {
            List<String> roomList = new ArrayList<>(Arrays.asList(this.rooms));
            roomList.remove(roomId);
            this.rooms = roomList.toArray(new String[0]);
        }
    }

}
