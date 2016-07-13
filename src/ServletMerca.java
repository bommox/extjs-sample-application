import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ServletMerca
 */
public class ServletMerca extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private String message;

    @Override
    public void init() throws ServletException {
        // Do required initialization
        message = "Hello World";
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String nombre = null;
        String apellido = null;
        Long telefono = null;

        PrintWriter out = response.getWriter();

        if (request.getParameter("nombre") != null && !request.getParameter("nombre").equals("")) {
            nombre = request.getParameter("nombre");
        }

        if (request.getParameter("apellido") != null && !request.getParameter("apellido").equals("")) {
            apellido = request.getParameter("apellido");
        }

        if (request.getParameter("telefono") != null && !request.getParameter("telefono").equals("")) {
            telefono = Long.parseLong(request.getParameter("telefono"));
        }

        if (nombre == null && apellido == null && telefono == null) {
            out.println(this.parseToJson(getPersonaAll()));
        } else {
            Persona p = new Persona(nombre, apellido, telefono);
            out.println(this.parseToJson(doFilter(p)));
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

    private List<Persona> doFilter(Persona p) {
        List<Persona> personas = getPersonaAll();
        List<Persona> resultado = new ArrayList<Persona>();

        for (Persona per : personas) {
            if (p.getNombre() != null) {
                if (per.getNombre().contains(p.getNombre())) {
                    resultado.add(per);
                }
            }

            if (p.getApellido() != null) {
                if (per.getApellido().contains(p.getApellido()) && resultado.indexOf(per) == -1) {
                    resultado.add(per);
                }
            }

            if (p.getTelefono() != null) {
                if (per.getTelefono().equals(p.getTelefono()) && resultado.indexOf(per) == -1) {
                    resultado.add(per);
                }
            }
        }

        return resultado;
    }

    private List<Persona> getPersonaAll() {

        List<Persona> personas = new ArrayList<Persona>();
        personas.add(new Persona("Homer", "Simpson", 555444333L));
        personas.add(new Persona("Marge", "Simpson", 555444333L));
        personas.add(new Persona("Lisa", "Simpson", 555444333L));
        personas.add(new Persona("Bart", "Simpson", 555444333L));
        personas.add(new Persona("Maggie", "Simpson", 555444333L));
        personas.add(new Persona("Montgomery", "Burns", 121222444L));
        personas.add(new Persona("Ned", "Flanders", 123123123L));
        personas.add(new Persona("Moe", "Szyslak", 987789654L));
        personas.add(new Persona("Waylon", "Smithers", 159753654L));
        personas.add(new Persona("Seymour", "Skinner", 789852145L));
        personas.add(new Persona("Clancy", "Wiggum", 963987967L));
        personas.add(new Persona("Hersel", "Krustofsky", 785896321L));
        personas.add(new Persona("Apu", "Nahasapeemapetilon", 246813962L));

        return personas;

    }

    private String parseToJson(List<Persona> personas) {
        StringBuilder json = new StringBuilder();
        json.append("{\"data\":[");

        for (int i = 0; i < personas.size(); i++) {
            json.append("{");
            json.append("\"nombre\":\"" + personas.get(i).getNombre() + "\",");
            json.append("\"apellido\":\"" + personas.get(i).getApellido() + "\",");
            json.append("\"telefono\":\"" + personas.get(i).getTelefono() + "\"");

            if (i + 1 >= personas.size()) {
                json.append("}");
            } else {
                json.append("},");
            }
        }

        json.append("]}");

        return json.toString();
    }
}
