package com.mycompany.myapp.websocket;

import java.util.List;
import java.util.Vector;
import javax.annotation.PostConstruct;
import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapHandler;
import org.eclipse.californium.core.CoapObserveRelation;
import org.eclipse.californium.core.CoapResponse;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class HumitureSensorHandler extends TextWebSocketHandler implements ApplicationListener {
	private static final Logger logger = LoggerFactory.getLogger(HumitureSensorHandler.class);
	private List<WebSocketSession> list = new Vector<>();
	private CoapClient coapClient;
	private CoapObserveRelation coapObserveRelation;
	
	@PostConstruct
	public void init() {
		coapClient = new CoapClient();
		coapClient.setURI("coap://192.168.3.41/humituresensor");
		coapObserveRelation = coapClient.observe(new CoapHandler() {			
			@Override
			public void onLoad(CoapResponse response) {
				String json = response.getResponseText();
				JSONObject jsonObject = new JSONObject(json);
				double doubleT = Double.parseDouble(jsonObject.getString("temperature"));
				double doubleH =Double.parseDouble(jsonObject.getString("humid"));
				double temperature = ((int)(doubleT*10))/10.0;
				double humid=((int)(doubleH*10))/10.0;
				jsonObject = new JSONObject();
				jsonObject.put("temperature", temperature);
				jsonObject.put("humid", humid);
				json = jsonObject.toString();
				try {
					for(WebSocketSession session : list) {
						Thread.sleep(100);
						session.sendMessage(new TextMessage(json));
					}
				} catch(Exception e) {}
			}
			
			@Override
			public void onError() {
			}
		});
	}
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		logger.info("");
		list.add(session);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		logger.info("");
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		logger.info("");
		list.remove(session);		
	}
	
	@Override
	public void onApplicationEvent(ApplicationEvent event) {
		if(event instanceof ContextClosedEvent) {
			coapObserveRelation.proactiveCancel();
			coapClient.shutdown();
		}
	}
}




