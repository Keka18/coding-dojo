package cl.coding.java.proyectoClass;

import java.util.ArrayList;

public class ProyectTest {

	public static void main(String[] args) {
	
		Project nd = new Project ();
		nd.setNombre("Jessica");
		
		ArrayList <Project> nomDes = new ArrayList <Project> ();
		nomDes.add (nd);
		nomDes.add(new Project ("Jessica", "enojona"));
		nomDes.add(new Project ("Jessica"));
		
		for (Project project : nomDes) {
			System.out.println(project.getNombre() + " " + project.getDescripcion() );
			
		}
		
	}

}
