/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smartmirror.coap.server.resource;

import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RaspiPin;
import hardware.sensor.HumitureSensor;
import hardware.sensor.PirSensor;
import org.eclipse.californium.core.CoapResource;
import org.eclipse.californium.core.coap.CoAP;
import org.eclipse.californium.core.server.resources.CoapExchange;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author KIM
 */
public class HumitureSensorResource extends CoapResource{
	//field
	private static final Logger logger=LoggerFactory.getLogger(HumitureSensorResource.class);
	private HumitureSensor humitureSensor;
	private double temperature;
	private double humid;
	//constructor

	public HumitureSensorResource() {
		super("humituresensor");
		setObservable(true);
		getAttributes().setObservable();
		setObserveType(CoAP.Type.NON);
		humitureSensor=new HumitureSensor(RaspiPin.GPIO_01);
		Thread thread = new Thread() {
			@Override
			public void run() {
			
				while(true) {
					try {
						double[] value = humitureSensor.getValue();
						temperature=value[0];
						humid=value[1];
						changed();
						Thread.sleep(1000);
					} catch(Exception e) {
						logger.info(e.toString());
					}
				}
			}
		};
		thread.start();
	}
	@Override
	public void handleGET(CoapExchange exchange) {
		JSONObject responseJsonObject = new JSONObject();
		responseJsonObject.put("temperature", String.valueOf(temperature));
		responseJsonObject.put("humid", String.valueOf(humid));
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
			responseJsonObject.put("temperature", String.valueOf(temperature));
			responseJsonObject.put("humid", String.valueOf(humid));
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
