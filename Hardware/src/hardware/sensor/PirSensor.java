package hardware.sensor;

import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalInput;
import com.pi4j.io.gpio.Pin;
import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RaspiPin;
import com.pi4j.io.gpio.event.GpioPinListenerDigital;
import java.io.IOException;

public class PirSensor {
	//Field
	private GpioPinDigitalInput pirPin;
	
	//Constructor
	public PirSensor(Pin pirPinNo) {
		GpioController gpioController = GpioFactory.getInstance();
		pirPin = gpioController.provisionDigitalInputPin(pirPinNo);
		pirPin.setShutdownOptions(true, PinState.LOW);
	}
	
	public void setGpioPinListenerDigital(GpioPinListenerDigital gpioPinListenerDigital) {
		pirPin.addListener(gpioPinListenerDigital);
	}
	
	public PinState getStatus() {
		return pirPin.getState();
	}
	
	//Method
	public static void main(String[] args) throws IOException {
		PirSensor test = new PirSensor(RaspiPin.GPIO_00);
		test.setGpioPinListenerDigital(event -> {
			if(event.getState() == PinState.HIGH) {
				System.out.println("here");
			} else {
				System.out.println("no");
			}
		});
		
		System.out.println("Ready...");
		System.in.read();
	}
}
