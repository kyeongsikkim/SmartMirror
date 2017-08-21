package smartmirror;

import java.util.Scanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import smartmirror.coap.server.CoapResourceServer;

public class SmartMirror {
	//Field
	private static final Logger logger = LoggerFactory.getLogger(SmartMirror.class);
	private CoapResourceServer coapResourceServer;
	
	//Constructor
	public SmartMirror() throws Exception {
		coapResourceServer = new CoapResourceServer();
	}
	
	//Method
	public void start() {
		coapResourceServer.start();
		System.out.println("Smartmirror start");
	}
	
	public void stop() {
		coapResourceServer.stop();
		System.out.println("Smartmirror stop");
	}
	
	public static void main(String[] args) throws Exception {
		SmartMirror smartMirror = new SmartMirror();
		smartMirror.start();
		System.out.print("input command('q' to quit): ");
		Scanner scanner = new Scanner(System.in);
		String command = scanner.nextLine();
		if(command.equals("q")) {
			smartMirror.stop();
		}
	}	
}
