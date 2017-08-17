package test;

import com.pi4j.io.gpio.RaspiPin;
import hardware.converter.PCF8591;
import hardware.led.RgbLedDigital;
import hardware.sensor.PhotoresistorSensor;

public class PhotoresistorSensorRgbLedTest {
	public static void main(String[] args) throws Exception {
		RgbLedDigital rgbLedDigital= new RgbLedDigital(RaspiPin.GPIO_00, RaspiPin.GPIO_02, RaspiPin.GPIO_03);
		PCF8591 pcf8591= new PCF8591(0x48, PCF8591.AIN0);
		PhotoresistorSensor photoresistorSensor= new PhotoresistorSensor(pcf8591);
		
		while(true){
			double value=photoresistorSensor.getValue();
	
			if(value>100){
				rgbLedDigital.green(true);
			}else if(value<=100){
				rgbLedDigital.green(false);
				rgbLedDigital.red(true);
			}
			System.out.println(value + "도");
			Thread.sleep(1000);
		}
		
	}
}
