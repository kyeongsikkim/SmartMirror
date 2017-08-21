package com.mycompany.myapp.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.scribe.builder.ServiceBuilder;
import org.scribe.builder.api.FlickrApi;
import org.scribe.model.Token;
import org.scribe.oauth.OAuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.zalando.stups.tokens.AccessToken;

import com.flickr4java.flickr.FlickrException;
import com.github.dvdme.ForecastIOLib.FIOCurrently;
import com.github.dvdme.ForecastIOLib.FIODaily;
import com.github.dvdme.ForecastIOLib.FIODataPoint;
import com.github.dvdme.ForecastIOLib.FIOHourly;
import com.github.dvdme.ForecastIOLib.ForecastIO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.errors.ApiException;
import com.google.maps.model.GeocodingResult;
import com.mycompany.myapp.util.Feed;
import com.mycompany.myapp.util.FeedMessage;
import com.mycompany.myapp.util.RSSFeedParser;

@Controller
public class HomeController {

	private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
	private List<FeedMessage> list;
<<<<<<< HEAD
	
=======
	private List<Music> musicList;
	//////////////////////////////////////////////////////////////////////
	private String fileName;
	private String filePath;
	/////////////////////////////////////////////////////////////////////////
<<<<<<< Updated upstream


	private String apiKey = "04af17713fb5285e5352234c38f805b1";
=======
>>>>>>> Stashed changes


>>>>>>> 5e5635d42212c89653e1de1ab0608f4ffb0949a9
	private String apiKey = "04af17713fb5285e5352234c38f805b1";
	
	GeoApiContext context = new GeoApiContext.Builder()
			.apiKey("AIzaSyDoP8zx7GCoyI0BQixAfm-HGzsMldgk6kY")
			.build();

	@RequestMapping("/")
	public String home() {
		return "main";
	}

	@RequestMapping("/calander")
	public String calander() {
		return "calander";
	}

	@RequestMapping("/map")
	public String map() {
		return "map";
	}

	@RequestMapping("/camera")
	public String camera() {
		return "camera";
	}
	
	@RequestMapping("/weatherDefault")
	public String weatherDefault() {
		return "weatherdefault";
	}
	
	@RequestMapping("/weather_View")
	public String weather_View() {
		return "weather";
	}

	@RequestMapping("/news")
	public void news(HttpServletResponse response) throws IOException {
		RSSFeedParser parser = new RSSFeedParser("https://news.google.com/news/rss/headlines?hl=ko&ned=kr");
		Feed feed = parser.readFeed();

		if (list != null) {
			list.clear();
		}
		list = feed.getMessages();

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("titleList", list);
		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
	}

	@RequestMapping("/weather")
	public void weather(HttpServletResponse response) throws IOException, ApiException, InterruptedException {
		
		JSONObject jsonObject = new JSONObject();

		GeocodingResult[] results = GeocodingApi.geocode(context, "서울").await();
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String latitude = gson.toJson(results[0].geometry.location.lat);
		String longitude = gson.toJson(results[0].geometry.location.lng);
		
		ForecastIO fio = new ForecastIO(apiKey);
		fio.setUnits(ForecastIO.UNITS_SI);
		fio.setLang(ForecastIO.LANG_ENGLISH);
		fio.getForecast(latitude, longitude);

		FIOCurrently currently = new FIOCurrently(fio);
		FIOHourly hourly = new FIOHourly(fio);
		FIODataPoint fdp = currently.get();
		double temp = fdp.temperature();
		String icon = fdp.icon();
		String summary = hourly.getSummary();
		String iconR = icon.substring(1, icon.length() - 1);

		FIODaily daily = new FIODaily(fio);
		double[] tempMax = new double[8];
		double[] tempMin = new double[8];
		String[] iconW = new String[8];

		Calendar cal = Calendar.getInstance();
		String[] weekList = new String[7];
		int now = cal.get(Calendar.DAY_OF_WEEK);
		switch (now) {
		case Calendar.MONDAY:
			weekList[0] = "Mon";
			weekList[1] = "Tue";
			weekList[2] = "Wed";
			weekList[3] = "Thu";
			weekList[4] = "Fri";
			weekList[5] = "Sat";
			weekList[6] = "Sun";
			break;
		case Calendar.TUESDAY:
			weekList[0] = "Tue";
			weekList[1] = "Wed";
			weekList[2] = "Thu";
			weekList[3] = "Fri";
			weekList[4] = "Sat";
			weekList[5] = "Sun";
			weekList[6] = "Mon";
			break;
		case Calendar.WEDNESDAY:
			weekList[0] = "Wed";
			weekList[1] = "Thu";
			weekList[2] = "Fri";
			weekList[3] = "Sat";
			weekList[4] = "Sun";
			weekList[5] = "Mon";
			weekList[6] = "Tue";
			break;
		case Calendar.THURSDAY:
			weekList[0] = "Thu";
			weekList[1] = "Fri";
			weekList[2] = "Sat";
			weekList[3] = "Sun";
			weekList[4] = "Mon";
			weekList[5] = "Tue";
			weekList[6] = "Wed";
			break;
		case Calendar.FRIDAY:
			weekList[0] = "Fri";
			weekList[1] = "Sat";
			weekList[2] = "Sun";
			weekList[3] = "Mon";
			weekList[4] = "Tue";
			weekList[5] = "Wed";
			weekList[6] = "Thu";
			break;
		case Calendar.SATURDAY:
			weekList[0] = "Sat";
			weekList[1] = "Sun";
			weekList[2] = "Mon";
			weekList[3] = "Tue";
			weekList[4] = "Wed";
			weekList[5] = "Thu";
			weekList[6] = "Fri";
			break;
		case Calendar.SUNDAY:
			weekList[0] = "Sun";
			weekList[1] = "Mon";
			weekList[2] = "Tue";
			weekList[3] = "Wed";
			weekList[4] = "Thu";
			weekList[5] = "Fri";
			weekList[6] = "Sat";
			break;
		}

		if (daily.days() < 0) {
			jsonObject.put("icon", "No data available");
		}
		for (int i = 0; i < daily.days(); i++) {
			daily.getDay(i).setTimezone("Asia/Seoul");
			tempMax[i] = daily.getDay(i).temperatureMax();
			tempMin[i] = daily.getDay(i).temperatureMin();
			iconW[i] = daily.getDay(i).icon().substring(1, daily.getDay(i).icon().length() - 1);
		}

		jsonObject.put("temp", (int)temp);
		jsonObject.put("icon",	iconR);
		jsonObject.put("summary", summary);

		for (int i = 1; i < 7; i++) {
			jsonObject.put("tempMax" + i, (int)tempMax[i]);
			jsonObject.put("tempMin" + i, (int)tempMin[i]);
			jsonObject.put("iconW" + i, iconW[i]);
			jsonObject.put("week" + i, weekList[i]);
		}

		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
	}
	
	@RequestMapping("/youtubevideolist")
	public String youtube() {
		return "youtubeplaylist";
	}

	@RequestMapping("/video")
	public String video() {
		return "video";
	}
	
	@RequestMapping("/weather_detail")
	public void weather_detail(String address, HttpServletResponse response) throws URISyntaxException, FlickrException, ApiException, InterruptedException, IOException {
		
		JSONObject jsonObject = new JSONObject();
		GeocodingResult[] results = GeocodingApi.geocode(context, address).await();
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String lat = gson.toJson(results[0].geometry.location.lat);
		String lng = gson.toJson(results[0].geometry.location.lng);
		
		ForecastIO fio = new ForecastIO(apiKey);
		fio.setUnits(ForecastIO.UNITS_SI);
		fio.setLang(ForecastIO.LANG_ENGLISH);
		fio.getForecast(lat, lng);

		FIOCurrently currently = new FIOCurrently(fio);
		FIOHourly hourly = new FIOHourly(fio);
		FIODataPoint fdp = currently.get();
		double temp = fdp.temperature();
		String icon = fdp.icon();
		String summary = hourly.getSummary();
		double wind = fdp.windSpeed();
		double precip = fdp.precipProbability();
		
		String iconR = icon.substring(1, icon.length() - 1);

		FIODaily daily = new FIODaily(fio);
		double[] tempMax = new double[8];
		double[] tempMin = new double[8];
		String[] iconW = new String[8];

		Calendar cal = Calendar.getInstance();
		String[] weekList = new String[7];
		int now = cal.get(Calendar.DAY_OF_WEEK);
		switch (now) {
		case Calendar.MONDAY:
			weekList[0] = "Mon";
			weekList[1] = "Tue";
			weekList[2] = "Wed";
			weekList[3] = "Thu";
			weekList[4] = "Fri";
			weekList[5] = "Sat";
			weekList[6] = "Sun";
			break;
		case Calendar.TUESDAY:
			weekList[0] = "Tue";
			weekList[1] = "Wed";
			weekList[2] = "Thu";
			weekList[3] = "Fri";
			weekList[4] = "Sat";
			weekList[5] = "Sun";
			weekList[6] = "Mon";
			break;
		case Calendar.WEDNESDAY:
			weekList[0] = "Wed";
			weekList[1] = "Thu";
			weekList[2] = "Fri";
			weekList[3] = "Sat";
			weekList[4] = "Sun";
			weekList[5] = "Mon";
			weekList[6] = "Tue";
			break;
		case Calendar.THURSDAY:
			weekList[0] = "Thu";
			weekList[1] = "Fri";
			weekList[2] = "Sat";
			weekList[3] = "Sun";
			weekList[4] = "Mon";
			weekList[5] = "Tue";
			weekList[6] = "Wed";
			break;
		case Calendar.FRIDAY:
			weekList[0] = "Fri";
			weekList[1] = "Sat";
			weekList[2] = "Sun";
			weekList[3] = "Mon";
			weekList[4] = "Tue";
			weekList[5] = "Wed";
			weekList[6] = "Thu";
			break;
		case Calendar.SATURDAY:
			weekList[0] = "Sat";
			weekList[1] = "Sun";
			weekList[2] = "Mon";
			weekList[3] = "Tue";
			weekList[4] = "Wed";
			weekList[5] = "Thu";
			weekList[6] = "Fri";
			break;
		case Calendar.SUNDAY:
			weekList[0] = "Sun";
			weekList[1] = "Mon";
			weekList[2] = "Tue";
			weekList[3] = "Wed";
			weekList[4] = "Thu";
			weekList[5] = "Fri";
			weekList[6] = "Sat";
			break;
		}

		if (daily.days() < 0) {
			jsonObject.put("icon", "No data available");
		}
		
		for (int i = 0; i < daily.days(); i++) {
			daily.getDay(i).setTimezone("Asia/Seoul");
			tempMax[i] = daily.getDay(i).temperatureMax();
			tempMin[i] = daily.getDay(i).temperatureMin();
			iconW[i] = daily.getDay(i).icon().substring(1, daily.getDay(i).icon().length() - 1);
		}
		
		jsonObject.put("temp", (int)temp);
		jsonObject.put("icon", iconR);
		jsonObject.put("summary", summary);
		jsonObject.put("latitude", lat);
		jsonObject.put("longitude", lng);
		jsonObject.put("wind", wind);
		jsonObject.put("precip", precip*100);
		
		for (int i = 1; i < 7; i++) {
			jsonObject.put("tempMax" + i, (int)tempMax[i]);
			jsonObject.put("tempMin" + i, (int)tempMin[i]);
			jsonObject.put("iconW" + i, iconW[i]);
			jsonObject.put("week" + i, weekList[i]);
		}
		
		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
<<<<<<< HEAD
	}
=======

		LOGGER.info(lat);
		LOGGER.info(lng);

		return "weather";
	}

	// @RequestMapping("/movie")
	// public String movie(Model model) {
	// String key = "fce26a7debd17e9ccb600c2274cff463";
	// KobisOpenAPIRestService service = new KobisOpenAPIRestService(key);
	//
	// SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	// SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy / MM / dd");
	// Calendar calendar = new GregorianCalendar();
	// calendar.add(Calendar.DATE, -1);
	// String strDate = sdf.format(calendar.getTime());
	// String realDate = sdf2.format(new Date());
	//
	// model.addAttribute("date", realDate);
	//
	// try {
	// String dailyBoxOffice = service.getDailyBoxOffice(true, strDate, "10",
	// "", "", "");
	// JSONObject jsonObject = new JSONObject(dailyBoxOffice);
	// jsonObject = (JSONObject) jsonObject.get("boxOfficeResult");
	// JSONArray jsonArray = (JSONArray) jsonObject.get("dailyBoxOfficeList");
	//
	// for(int i=0; i<10; i++) {
	// jsonObject = jsonArray.getJSONObject(i);
	//
	// String rank = jsonObject.getString("rank");
	// String movieName = jsonObject.getString("movieNm");
	// String audiCnt = jsonObject.getString("audiCnt");
	// String audiAcc = jsonObject.getString("audiAcc");
	//
	// model.addAttribute("rank"+i, rank);
	// model.addAttribute("movieName"+i, movieName);
	// model.addAttribute("audiCnt"+i, audiCnt);
	// model.addAttribute("audiAcc"+i, audiAcc);
	// }
	//
	// } catch (Exception e) {
	// e.printStackTrace();
	// }
	//
	// return "movie";
	// }

	@RequestMapping("/subway")
	public String subway() {
		return "subway";
	}

	@RequestMapping("/subwaySearch")
	public String subwaySearch(String station, String line, Model model) {
		/////////////////////////////////////// 요일
		/////////////////////////////////////// ////////////////////////////////////////////////////////
		Calendar today = Calendar.getInstance();
		int day = today.get(Calendar.DAY_OF_WEEK);
		String subwayday;
		if (day == 1) {
			subwayday = "3";
		} else if (day == 7) {
			subwayday = "2";
		} else {
			subwayday = "1";
		}
		////////////////////////////////////////////////////////////////////////////////////////////////////
		List<String> SBNS;
		List<String> lineNm = new ArrayList<>();
		List<String> upperTime = new ArrayList<>();
		List<String> downTime = new ArrayList<>();
		String[] findStation;
		List<String> location = new ArrayList<>();
		String currLine = line;

		SBNS = service.SearchInfoBySubwayNameService(station);

		for (int i = 1; i < SBNS.size(); i += 2) {
			if (SBNS.get(i).equals("A")) {
				lineNm.add("공항철도");
			} else if (SBNS.get(i).equals("B")) {
				lineNm.add("분당");
			} else if (SBNS.get(i).equals("E")) {
				lineNm.add("에버라인");
			} else if (SBNS.get(i).equals("G")) {
				lineNm.add("경춘");
			} else if (SBNS.get(i).equals("I")) {
				lineNm.add("인천1");
			} else if (SBNS.get(i).equals("I2")) {
				lineNm.add("인천2");
			} else if (SBNS.get(i).equals("K")) {
				lineNm.add("경의중앙");
			} else if (SBNS.get(i).equals("KK")) {
				lineNm.add("경강");
			} else if (SBNS.get(i).equals("S")) {
				lineNm.add("신분당");
			} else if (SBNS.get(i).equals("SU")) {
				lineNm.add("수인");
			} else if (SBNS.get(i).equals("U")) {
				lineNm.add("의정부");
			} else {
				lineNm.add(SBNS.get(i));
			}
		}

		if (currLine == null) {
			currLine = SBNS.get(1);
		} else {
			if (currLine.equals("공항철도")) {
				currLine = "A";
			} else if (currLine.equals("분당")) {
				currLine = "B";
			} else if (currLine.equals("에버라인")) {
				currLine = "E";
			} else if (currLine.equals("경춘")) {
				currLine = "G";
			} else if (currLine.equals("인천1")) {
				currLine = "I";
			} else if (currLine.equals("인천1")) {
				currLine = "I2";
			} else if (currLine.equals("경의중앙")) {
				currLine = "K";
			} else if (currLine.equals("경강")) {
				currLine = "KK";
			} else if (currLine.equals("신분당")) {
				currLine = "S";
			} else if (currLine.equals("수인")) {
				currLine = "SU";
			} else if (currLine.equals("의정부")) {
				currLine = "U";
			}
		}
		String currColor = "";
		String code = null;
		for (int i = 1; i < SBNS.size(); i++) {
			if (currLine.equals(SBNS.get(i)) && currLine.equals("1")) {
				currColor = "#0d3692";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("2")) {
				currColor = "#33a23d";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("3")) {
				currColor = "#fe5b10";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("4")) {
				currColor = "#32a1c8";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("5")) {
				currColor = "#8b50a4";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("6")) {
				currColor = "#c55c1d";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("7")) {
				currColor = "#54640d";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("8")) {
				currColor = "#f51361";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("9")) {
				currColor = "#aa9872";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("A")) {
				currColor = "#3681b7";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("B")) {
				currColor = "#ffb300";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("E")) {
				currColor = "#4ea346";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("G")) {
				currColor = "#73c7a6";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("I")) {
				currColor = "#8cadcb";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("I2")) {
				currColor = ":#f06a00";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("K")) {
				currColor = "#73c7a6";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("KK")) {
				currColor = "#4169e1";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("S")) {
				currColor = "#c82127";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("SU")) {
				currColor = "#ffb300";
				code = SBNS.get(i - 1);
			} else if (currLine.equals(SBNS.get(i)) && currLine.equals("U")) {
				currColor = "#fda600";
				code = SBNS.get(i - 1);
			}
		}
		upperTime = service.upperLine(code, subwayday);
		for (int i = 0; i < upperTime.size(); i++) {
			System.out.println(upperTime.get(i));
		}
		downTime = service.downLine(code, subwayday);

		for (int i = 0; i < upperTime.size(); i++) {
			System.out.println(downTime.get(i));
		}
		if (currLine.equals("9") || currLine.equals("2")) {
			List<String> temp = upperTime;
			upperTime = downTime;
			downTime = temp;
		}
		System.out.println(code);
		location = service.location(code);
		System.out.println(location.get(0));
		System.out.println(location.get(1));

		findStation = service.findStation(currLine, station);
		System.out.println(findStation[0]);
		System.out.println(findStation[1]);
		for (int i = 0; i < upperTime.size(); i++) {
			if (upperTime.get(i).indexOf("99") > -1) {
				upperTime.set(i, "--");
			}
			if (downTime.get(i).indexOf("99") > -1) {
				downTime.set(i, "--");
			}

		}
		if (upperTime.size() > 0) {
			model.addAttribute("upperTime1", upperTime.get(0));
			model.addAttribute("upperTime2", upperTime.get(1));
			model.addAttribute("upperTime3", upperTime.get(2));
		}
		if (downTime.size() > 0) {
			model.addAttribute("downTime1", downTime.get(0));
			model.addAttribute("downTime2", downTime.get(1));
			model.addAttribute("downTime3", downTime.get(2));
		}

		model.addAttribute("lineNm", lineNm);
		model.addAttribute("currColor", currColor);
		if (findStation[0] != null) {
			model.addAttribute("beforeStation", "< " + " " + findStation[0]);
		} else {
			model.addAttribute("beforeStation", "--");
		}
		if (findStation[1] != null) {
			model.addAttribute("afterStation", findStation[1] + " " + " >");
		} else {
			model.addAttribute("afterStation", "--");
		}
		model.addAttribute("currStation", station);
		model.addAttribute("x", location.get(0));
		model.addAttribute("y", location.get(1));
		return "subwaySearch";
	}


<<<<<<< Updated upstream
=======
>>>>>>> 5e5635d42212c89653e1de1ab0608f4ffb0949a9
>>>>>>> Stashed changes
}
