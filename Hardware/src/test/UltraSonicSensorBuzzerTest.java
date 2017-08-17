package test;

import hardware.buzzer.ActiveBuzzer;
import com.pi4j.io.gpio.RaspiPin;
import hardware.sensor.UltrasonicSensor;

public class UltraSonicSensorBuzzerTest {

	public static void main(String[] args) throws InterruptedException {
		UltrasonicSensor test = new UltrasonicSensor(RaspiPin.GPIO_00, RaspiPin.GPIO_01);
		ActiveBuzzer buzzer = new ActiveBuzzer(RaspiPin.GPIO_02);

		while (true) {
			int distance = test.getDistance();
			if (distance < 20) {
				buzzer.on();
			}
			System.out.println("distance(cm)" + distance);
			Thread.sleep(1000);
			buzzer.off();
		}
	}
}
