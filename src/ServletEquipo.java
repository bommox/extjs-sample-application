import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ServletEquipo
 */
public class ServletEquipo extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    public void init() throws ServletException {
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String nombre = null;
        String ciudad = null;
        Long fundacion = null;

        PrintWriter out = response.getWriter();

        if (request.getParameter("nombre") != null && !request.getParameter("nombre").equals("")) {
            nombre = request.getParameter("nombre");
        }

        if (request.getParameter("ciudad") != null && !request.getParameter("ciudad").equals("")) {
            ciudad = request.getParameter("ciudad");
        }

        if (request.getParameter("fundacion") != null && !request.getParameter("fundacion").equals("")) {
            fundacion = Long.parseLong(request.getParameter("fundacion"));
        }

        if (nombre == null && ciudad == null && fundacion == null) {
            out.println(this.parseToJson(getEquipoAll()));
        } else {
            Equipo e = new Equipo(nombre, ciudad, fundacion);
            out.println(this.parseToJson(doFilter(e)));
        }

    }

    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doPost(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    public void destroy() {
        // do nothing.
    }

    private List<Equipo> doFilter(Equipo e) {
        List<Equipo> equipos = getEquipoAll();
        List<Equipo> resultado = new ArrayList<Equipo>();

        for (Equipo per : equipos) {
            if (e.getNombre() != null) {
                if (per.getNombre().contains(e.getNombre())) {
                    resultado.add(per);
                }
            }

            if (e.getCiudad() != null) {
                if (per.getCiudad().contains(e.getCiudad()) && resultado.indexOf(per) == -1) {
                    resultado.add(per);
                }
            }

            if (e.getFundacion() != null) {
                if (per.getFundacion().equals(e.getFundacion()) && resultado.indexOf(per) == -1) {
                    resultado.add(per);
                }
            }
        }

        return resultado;
    }

    private List<Equipo> getEquipoAll() {

        List<Equipo> equipos = new ArrayList<Equipo>();
        equipos.add(new Equipo("New York", "Knicks", 1958L));
        equipos.add(new Equipo("Los Angeles", "Lakers", 1960L));
        equipos.add(new Equipo("Los Angeles", "Clipers", 1970L));
        equipos.add(new Equipo("Golden State", "Warriors", 1970L));
        equipos.add(new Equipo("Miami", "Heat", 1991L));
        equipos.add(new Equipo("San Antonio", "Spurs", 1946L));
        equipos.add(new Equipo("Cleveland", "Cavaliers", 1965L));

        return equipos;

    }

    private String parseToJson(List<Equipo> equipos) {
        StringBuilder json = new StringBuilder();
        json.append("{\"data\":[");

        for (int i = 0; i < equipos.size(); i++) {
            json.append("{");
            json.append("\"ciudad\":\"" + equipos.get(i).getCiudad() + "\",");
            json.append("\"nombre\":\"" + equipos.get(i).getNombre() + "\",");
            json.append("\"fundacion\":\"" + equipos.get(i).getFundacion() + "\"");

            if (i + 1 >= equipos.size()) {
                json.append("}");
            } else {
                json.append("},");
            }
        }

        json.append("]}");

        return json.toString();
    }

}
