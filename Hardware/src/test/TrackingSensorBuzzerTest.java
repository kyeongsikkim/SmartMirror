package test;

import com.pi4j.io.gpio.PinState;
import hardware.buzzer.ActiveBuzzer;
import com.pi4j.io.gpio.RaspiPin;
import hardware.sensor.TrackingSensor;
import java.io.IOException;

public class TrackingSensorBuzzerTest {
	public static void main(String[] args) throws InterruptedException, IOException {
		TrackingSensor test = new TrackingSensor(RaspiPin.GPIO_00);
		ActiveBuzzer buzzer = new ActiveBuzzer(RaspiPin.GPIO_02);

		test.setGpioPinListenerDigital(event -> {
			if (event.getState() == PinState.HIGH) {
				System.out.println("black");
				buzzer.off();
			} else {
				System.out.println("White");
				buzzer.on();
			}
		});
		System.out.println("Ready...");
		System.in.read();
	}
}
