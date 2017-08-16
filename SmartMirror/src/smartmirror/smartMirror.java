package smartmirror;

import java.util.Scanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import smartmirror.coap.server.CoapResourceServer;

public class smartMirror {
	//Field
	private static final Logger logger = LoggerFactory.getLogger(smartMirror.class);
	private CoapResourceServer coapResourceServer;
	
	//Constructor
	public smartMirror() throws Exception {
		coapResourceServer = new CoapResourceServer();
	}
	
	//Method
	public void start() {
		logger.info("실행");
		coapResourceServer.start();
		System.out.println("SensingCar start");
	}
	
	public void stop() {
		logger.info("실행");
		coapResourceServer.stop();
		System.out.println("SensingCar stop");
	}
	
	public static void main(String[] args) throws Exception {
		smartMirror sensingCar = new smartMirror();
		sensingCar.start();
		System.out.print("input command('q' to quit): ");
		Scanner scanner = new Scanner(System.in);
		String command = scanner.nextLine();
		if(command.equals("q")) {
			sensingCar.stop();
		}
	}	
}
