package com.lunchklub.api.models;

public class Nomination extends Base {
    private String name;
    private Participant nominator;
    private boolean isEliminated;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Participant getNominator() {
        return nominator;
    }

    public void setNominator(Participant nominator) {
        this.nominator = nominator;
    }

    public boolean isEliminated() {
        return isEliminated;
    }

    public void setEliminated(boolean isEliminated) {
        this.isEliminated = isEliminated;
    }

}
