package smartmirror.coap.server.resource;

import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RaspiPin;
import hardware.sensor.PirSensor;
import org.eclipse.californium.core.CoapResource;
import org.eclipse.californium.core.coap.CoAP;
import org.eclipse.californium.core.server.resources.CoapExchange;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PirSensorResource extends CoapResource {
	//Field
	private static final Logger logger = LoggerFactory.getLogger(PirSensorResource.class);
	private PirSensor pirSensor;
	private String currStatus;
	
	
	//Constructor
	public PirSensorResource() throws Exception {
		super("pirsensor");
		setObservable(true);
		getAttributes().setObservable();
		setObserveType(CoAP.Type.NON);
		pirSensor=new PirSensor(RaspiPin.GPIO_00);
		Thread thread = new Thread() {
			@Override
			public void run() {
			
				while(true) {
					try {
						PinState pinState = pirSensor.getStatus();
						if(pinState==PinState.HIGH)
							currStatus="here";
						else currStatus="no";
						changed();
						Thread.sleep(2000);
					} catch(Exception e) {
						logger.info(e.toString());
					}
				}
			}
		};
		thread.start();
//		trackingSensor.setGpioPinlistenerDigtal(new GpioPinListenerDigital() {
//			@Override
//			public void handleGpioPinDigitalStateChangeEvent(GpioPinDigitalStateChangeEvent event) {
//				PinState pinState=event.getState();
//				if(pinState==PinState.HIGH){
//					BuzzerResource.getInstance().off();
//				}else{
//					BuzzerResource.getInstance().on();
//				}
//			}
//		});
	}
	
	//Method

	
	@Override
	public void handleGET(CoapExchange exchange) {
		JSONObject responseJsonObject = new JSONObject();
		responseJsonObject.put("pir", (currStatus));
		String responseJson = responseJsonObject.toString();
		exchange.respond(responseJson);
	}

	@Override
	public void handlePOST(CoapExchange exchange) {
		//{ "command":"status" }
		try {
			String requestJson = exchange.getRequestText();
			JSONObject requestJsonObject = new JSONObject(requestJson);
			String command = requestJsonObject.getString("command");
			 if(command.equals("status")) {
			}
			JSONObject responseJsonObject = new JSONObject();
			responseJsonObject.put("result", "success");
			responseJsonObject.put("pir",(currStatus));
			String responseJson = responseJsonObject.toString();
			exchange.respond(responseJson);
		} catch(Exception e) {
			logger.info(e.toString());
			JSONObject responseJsonObject = new JSONObject();
			responseJsonObject.put("result", "fail");
			String responseJson = responseJsonObject.toString();
			exchange.respond(responseJson);
		}		
	}
}
