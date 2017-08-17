package hardware.sensor;

import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.Pin;
import com.pi4j.io.gpio.RaspiPin;
import com.pi4j.wiringpi.Gpio;
import com.pi4j.wiringpi.GpioUtil;

public class HumitureSensor {

	private final int MAXTIMINGS = 85;
	private int[] dht11_dat = new int[5];
	private int pinNo;

	public HumitureSensor(Pin pinNo) {
		GpioFactory.getInstance();
		this.pinNo = pinNo.getAddress();
		GpioUtil.export(this.pinNo, GpioUtil.DIRECTION_OUT);
	}

	public double[] getValue() {
		int laststate = Gpio.HIGH;
		int j = 0;
		dht11_dat[0] = dht11_dat[1] = dht11_dat[2] = dht11_dat[3] = dht11_dat[4] = 0;

		Gpio.pinMode(pinNo, Gpio.OUTPUT);
		Gpio.digitalWrite(pinNo, Gpio.LOW);
		Gpio.delay(18);

		Gpio.digitalWrite(pinNo, Gpio.HIGH);
		Gpio.pinMode(pinNo, Gpio.INPUT);

		for (int i = 0; i < MAXTIMINGS; i++) {
			int counter = 0;
			while (Gpio.digitalRead(pinNo) == laststate) {
				counter++;
				Gpio.delayMicroseconds(1);
				if (counter == 255) {
					break;
				}
			}

			laststate = Gpio.digitalRead(pinNo);

			if (counter == 255) {
				break;
			}

			/* ignore first 3 transitions */
			if ((i >= 4) && (i % 2 == 0)) {
				/* shove each bit into the storage bytes */
				dht11_dat[j / 8] <<= 1;
				if (counter > 16) {
					dht11_dat[j / 8] |= 1;
				}
				j++;
			}
		}
		// check we read 40 bits (8bit x 5 ) + verify checksum in the last byte
		if ((j >= 40) && checkParity()) {
			float h = (float) ((dht11_dat[0] << 8) + dht11_dat[1]) / 10;
			if (h > 100) {
				h = dht11_dat[0];   // for DHT11
			}
			float c = (float) (((dht11_dat[2] & 0x7F) << 8) + dht11_dat[3]) / 10;
			if (c > 125) {
				c = dht11_dat[2];   // for DHT11
			}
			if ((dht11_dat[2] & 0x80) != 0) {
				c = -c;
			}
			float f = c * 1.8f + 32;

			return new double[]{c, h};
		} else {
			return getValue();
		}
	}

	private boolean checkParity() {
		return (dht11_dat[4] == ((dht11_dat[0] + dht11_dat[1] + dht11_dat[2] + dht11_dat[3]) & 0xFF));
	}

	public static void main(String ars[]) throws Exception {
		HumitureSensor humitureSensor = new HumitureSensor(RaspiPin.GPIO_00);
		while (true) {
			double[] value = humitureSensor.getValue();
			System.out.println("Temperature = " + value[0] + " Humidity = " + value[1]);
			Thread.sleep(1000);
		}
	}
}
