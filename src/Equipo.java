public class Equipo {

    private String ciudad;
    private String nombre;
    private Long fundacion;

    public Equipo(String c, String n, Long f) {
        this.ciudad = c;
        this.nombre = n;
        this.fundacion = f;
    }

    /**
     * @return the ciudad
     */
    public String getCiudad() {
        return ciudad;
    }

    /**
     * @param ciudad the ciudad to set
     */
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the fundacion
     */
    public Long getFundacion() {
        return fundacion;
    }

    /**
     * @param fundacion the fundacion to set
     */
    public void setFundacion(Long fundacion) {
        this.fundacion = fundacion;
    }

}
