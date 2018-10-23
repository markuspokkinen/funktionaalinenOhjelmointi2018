package omenat;

public class Omena{
    
    private final String vari;
    private final int paino;
    
    public Omena(String vari, int paino){
        this.vari = vari;
        this.paino = paino;
    }
    
    public int getPaino(){
        return paino;
    }
    
        public String getVari(){
        return vari;
    }
    
    
    public String toString(){
        return "Omena: " + vari + ":" + paino + " g";
    }
    
}
