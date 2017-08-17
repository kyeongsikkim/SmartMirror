package test;

import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RaspiPin;
import com.pi4j.io.gpio.event.GpioPinDigitalStateChangeEvent;
import com.pi4j.io.gpio.event.GpioPinListenerDigital;
import hardware.buzzer.ActiveBuzzer;
import hardware.converter.PCF8591;
import hardware.led.DualColorLed;
import hardware.motor.SG90Servo;
import hardware.sensor.FlameSensor;
import hardware.sensor.GasSensor;

public class GasSensorBuzzerDualLedServoMotorTest {
	public static void main(String[] args) throws Exception {
		ActiveBuzzer activeBuzzer = new ActiveBuzzer(RaspiPin.GPIO_02);
		PCF8591 pcf8591= new PCF8591(0x48, PCF8591.AIN0);
		GasSensor gasSensor = new GasSensor(pcf8591, RaspiPin.GPIO_00);
		DualColorLed dualColorLed= new DualColorLed(RaspiPin.GPIO_04, RaspiPin.GPIO_05);
		SG90Servo sg90Servo = new SG90Servo(RaspiPin.GPIO_01);
		
		gasSensor.setGpioPinListenerDigital(new GpioPinListenerDigital() {
			@Override
			public void handleGpioPinDigitalStateChangeEvent(GpioPinDigitalStateChangeEvent event) {
				if(event.getState()==PinState.LOW){
						System.out.println("********** 가스발생");
					activeBuzzer.on();
					dualColorLed.red();
					sg90Servo.setAngle(90);
				}else{
					System.out.println("********** 정상상태");
					activeBuzzer.off();
					dualColorLed.green();
					sg90Servo.setAngle(0);
				}
			}
		});
		while (true) {
			double value = gasSensor.getValue();
			System.out.println(value);
			if (value > 100) {
//				analog값을 이용해서 처리.
			}
			Thread.sleep(1000);
		}
	}
}
