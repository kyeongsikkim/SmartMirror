/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RaspiPin;
import hardware.button.Button;
import hardware.motor.SG90Servo;
import java.io.IOException;

/**
 *
 * @author kang
 */
public class SG90ServoButtonTest {

	public static void main(String[] args) throws IOException {
		SG90Servo servo = new SG90Servo(RaspiPin.GPIO_01, 8, 27);
		Button btn0 = new Button(RaspiPin.GPIO_23);
		Button btn90 = new Button(RaspiPin.GPIO_24);
		Button btn180 = new Button(RaspiPin.GPIO_25);

		btn0.setGpioPinListenerDigital(e -> {
			if (e.getState() == PinState.HIGH) {
				//System.out.println("High"); // 때을때
			} else {
				servo.setAngle(0); // 눌렀을때 
			}
		});
		btn90.setGpioPinListenerDigital(e -> {
			if (e.getState() == PinState.HIGH) {
				//System.out.println("High"); // 때을때
			} else {
				servo.setAngle(90); // 눌렀을때 
			}
		});
		btn180.setGpioPinListenerDigital(e -> {
			if (e.getState() == PinState.HIGH) {
				//System.out.println("High"); // 때을때
			} else {
				servo.setAngle(180); // 눌렀을때 
			}
		});
		
		System.out.println("ready....");
		System.in.read();
	}

}
