package com.mycompany.myapp.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapResponse;
import org.eclipse.californium.core.coap.MediaTypeRegistry;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ActuatorController {

	@RequestMapping("/rgbled")
	public void rgbled(String command, String red, String green, String blue, HttpServletResponse response)
			throws IOException {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("command", command);
		jsonObject.put("red", red);
		jsonObject.put("green", green);
		jsonObject.put("blue", blue);
		String reqJson = jsonObject.toString();

		CoapClient coapClient = new CoapClient();
		coapClient.setURI("coap://192.168.3.44/rgbled");
		CoapResponse coapResponse = coapClient.post(reqJson, MediaTypeRegistry.APPLICATION_JSON);
		String resJson = coapResponse.getResponseText();
		coapClient.shutdown();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(resJson);
		pw.flush();
		pw.close();
	}
}
