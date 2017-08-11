package com.mycompany.myapp.controller;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

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
import com.mycompany.myapp.dto.Music;
import com.mycompany.myapp.dto.Photo;
import com.mycompany.myapp.service.Service;
import com.mycompany.myapp.util.Feed;
import com.mycompany.myapp.util.FeedMessage;
import com.mycompany.myapp.util.RSSFeedParser;

@Controller
public class HomeController {

	private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
	private List<FeedMessage> list;
	private List<Music> musicList;
	/////////////////////////////////////////////////////////////////////////
	BufferedReader in;
	URL url;
	JSONArray jArray;
	String json;
	HttpURLConnection con;
	String encodingName;
	Scanner scanner = new Scanner(System.in);
	JSONObject jsonObject;
	///////////////////////////////////////////////////////////////////////

	private String apiKey = "04af17713fb5285e5352234c38f805b1";

	GeoApiContext context = new GeoApiContext.Builder().apiKey("AIzaSyDoP8zx7GCoyI0BQixAfm-HGzsMldgk6kY").build();

	@Autowired
	private Service service;
	@Autowired
	private ServletContext servletContext;

	@RequestMapping("/")
	public String home() throws IOException {
		return "main";
	}

	@RequestMapping("/calendar")
	public String calendar() {
		return "calendar";
	}

	@RequestMapping("/map")
	public String map() {
		return "map";
	}

	@RequestMapping("/command")
	public String command() {
		return "command";
	}

	@RequestMapping("/camera")
	public String camera() {
		return "camera";
	}

	@RequestMapping("/snapshot")
	public void snapshot(HttpServletResponse response) throws Exception {
		URL url = new URL("http://192.168.3.221:50001/?action=snapshot");
		String filePath = servletContext.getRealPath("/resources/photo/");
		String fileName = new Date().toString() + ".jpg";
		
		Photo photo = new Photo();
		photo.setPfilename(fileName);
		photo.setPfilepath("/SmartMirrorWebProject/resources/photo/" + fileName);
		
		InputStream is = new BufferedInputStream(url.openStream());
		FileOutputStream fos = new FileOutputStream(filePath + "/" + fileName);
		
		int readBytes = -1;
		byte[] cbuf = new byte[1024];
		while(true) {
			readBytes = is.read(cbuf);
			if(readBytes == -1) break;
			fos.write(cbuf, 0, readBytes);
		}
		
		is.close();
		fos.close();
		
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("filename", fileName);
		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
		
		service.photoUpload(photo);
	}


	@RequestMapping("/audio")
	public String audio() {
		return "audio";
	}

	@RequestMapping("/musicfile")
	public void musicFile(MultipartFile attach, HttpServletResponse response) throws Exception {
		Music music = new Music();

		String filename = attach.getOriginalFilename();
		music.setMfilename(filename);
		music.setMfilepath("/SmartMirrorWebProject/resources/music/" + filename);

		String realPath = servletContext.getRealPath("/resources/music/");
		File file = new File(realPath + "/" + filename);

		attach.transferTo(file);

		service.musicUpload(music);
	}

	@RequestMapping("/musiclist")
	public void musicList(HttpServletResponse response) throws Exception {
		if (musicList != null) {
			musicList.clear();
		}

		musicList = service.getMusicList();

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("musicList", musicList);
		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
	}
	
	@RequestMapping("/getid")
	public void getId(String name, String id, HttpServletResponse response) throws IOException {
		LOGGER.info(name);
		LOGGER.info(id);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name", name);
		jsonObject.put("id", id);
		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
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

		jsonObject.put("temp", temp);
		jsonObject.put("icon", iconR);
		jsonObject.put("summary", summary);

		for (int i = 1; i < 7; i++) {
			jsonObject.put("tempMax" + i, tempMax[i]);
			jsonObject.put("tempMin" + i, tempMin[i]);
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

	@RequestMapping("/weather_View")
	public String weather_View() {
		return "weather";
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
	public String weather_detail(String address, HttpServletResponse response)
			throws URISyntaxException, FlickrException, ApiException, InterruptedException, IOException {

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
		String iconR = icon.substring(1, icon.length() - 1);
		// double tempMax = fdp.temperatureMax();
		// double tempMin = fdp.temperatureMin();

		jsonObject.put("temp", temp);
		jsonObject.put("icon", iconR);
		jsonObject.put("summary", summary);
		// jsonObject.put("tempMax", String.valueOf(tempMax));
		// jsonObject.put("tempMin", String.valueOf(tempMin));
		jsonObject.put("latitude", lat);
		jsonObject.put("longitude", lng);

		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();

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

		SBNS = SearchInfoBySubwayNameService(station);

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
		upperTime = upperLine(code, subwayday);
		for (int i = 0; i < upperTime.size(); i++) {
			System.out.println(upperTime.get(i));
		}
		downTime = downLine(code, subwayday);

		for (int i = 0; i < upperTime.size(); i++) {
			System.out.println(downTime.get(i));
		}
		if (currLine.equals("9") || currLine.equals("2")) {
			List<String> temp = upperTime;
			upperTime = downTime;
			downTime = temp;
		}
		System.out.println(code);
		location = location(code);
		System.out.println(location.get(0));
		System.out.println(location.get(1));

		findStation = findStation(currLine, station);
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

	////////////////////////////////////////// 이름으로 검색하기 ////////////////
	public List<String> SearchInfoBySubwayNameService(String inputStation) {
		List<String> Line = new ArrayList<>();
		List<String> code = new ArrayList<>();
		try {
			encodingName = URLEncoder.encode(inputStation, "UTF-8");
			url = new URL(
					"http://openapi.seoul.go.kr:8088/63745056506b696d31303654706b5476/json/SearchInfoBySubwayNameService/1/5/"
							+ encodingName + "/");
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			json = in.readLine();
			jsonObject = new JSONObject(json);
			if (jsonObject.isNull("SearchInfoBySubwayNameService") != true) {
				jsonObject = jsonObject.getJSONObject("SearchInfoBySubwayNameService");
				jArray = jsonObject.getJSONArray("row");
				for (int i = 0; i < jArray.length(); i++) {
					Line.add(jArray.getJSONObject(i).getString("STATION_CD"));
					Line.add(jArray.getJSONObject(i).getString("LINE_NUM"));
					System.out.println(Line.size());
				}
			} else {
				Line.add("해당하는 역이 없습니다.");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (in != null)
				try {
					in.close();
				} catch (Exception e) {
					e.printStackTrace();
				}

		}
		return Line;
	}

	//////////////// 앞뒤 전역 찾아내기////////////////////////////
	public String[] findStation(String lineNum, String inputStation) {
		String[] station = new String[2];
		try {
			url = new URL(
					"http://openAPI.seoul.go.kr:8088/63745056506b696d31303654706b5476/json/SearchSTNBySubwayLineService/1/101/"
							+ lineNum + "/");
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			json = in.readLine();
			jsonObject = new JSONObject(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (in != null)
				try {
					in.close();
				} catch (Exception e) {
					e.printStackTrace();
				}

		}
		if (jsonObject.isNull("SearchSTNBySubwayLineService") != true) {
			jsonObject = jsonObject.getJSONObject("SearchSTNBySubwayLineService");
			JSONArray findStation = jsonObject.getJSONArray("row");
			for (int k = 0; k < findStation.length(); k++) {
				if (findStation.getJSONObject(k).getString("STATION_NM").equals(inputStation)) {
					if (Character.isDigit(findStation.getJSONObject(k).getString("FR_CODE").charAt(0))
							&& findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") <= -1) {

						for (int i = 0; i < findStation.length(); i++) {
							if (findStation.getJSONObject(i).getString("LINE_NUM").equals("2")
									&& findStation.getJSONObject(0).getString("FR_CODE")
											.equals(findStation.getJSONObject(k).getString("FR_CODE"))) {
								station[0] = findStation.getJSONObject(findStation.length() - 1)
										.getString("STATION_NM");
							}

							if (findStation.getJSONObject(i).getString("LINE_NUM").equals("2")
									&& findStation.getJSONObject(findStation.length() - 1).getString("FR_CODE")
											.equals(findStation.getJSONObject(k).getString("FR_CODE"))) {
								station[1] = findStation.getJSONObject(0).getString("STATION_NM");
							}

							if (findStation.getJSONObject(i).getString("FR_CODE").equals(String.valueOf(
									Integer.parseInt(findStation.getJSONObject(k).getString("FR_CODE")) - 1))) {
								station[0] = findStation.getJSONObject(i).getString("STATION_NM");

							}
							if (findStation.getJSONObject(i).getString("FR_CODE").equals(String.valueOf(
									Integer.parseInt(findStation.getJSONObject(k).getString("FR_CODE")) + 1))) {
								if (station[1] != null) {
									station[1] += "/" + findStation.getJSONObject(i).getString("STATION_NM");
								} else {
									station[1] = findStation.getJSONObject(i).getString("STATION_NM");
								}
							}
							if (Character
									.isDigit(findStation.getJSONObject(i).getString("FR_CODE").charAt(0)) == false) {
								if (findStation.getJSONObject(i).getString("FR_CODE").substring(1)
										.equals(String.valueOf(
												Integer.parseInt(findStation.getJSONObject(k).getString("FR_CODE"))
														+ 1))
										&& Character.isDigit(
												findStation.getJSONObject(i - 1).getString("FR_CODE").charAt(0))) {
									station[1] += findStation.getJSONObject(i).getString("STATION_NM");
								}
							}
							if (findStation.getJSONObject(i).getString("FR_CODE").indexOf("-") > -1) {
								if (findStation.getJSONObject(i).getString("FR_CODE")
										.substring(0, findStation.getJSONObject(i).getString("FR_CODE").indexOf("-"))
										.equals(findStation.getJSONObject(k).getString("FR_CODE"))
										&& findStation.getJSONObject(i - 1).getString("FR_CODE").indexOf("-") <= -1) {
									if (station[1] != null) {
										station[1] += "/" + findStation.getJSONObject(i).getString("STATION_NM");
									} else {
										station[1] = findStation.getJSONObject(i).getString("STATION_NM");
									}
								}
							}
						}
					} else {

						for (int i = 0; i < findStation.length(); i++) {
							if (findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") > -1) {
								String lastNum = findStation.getJSONObject(k).getString("FR_CODE")
										.substring(findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") + 1);
								String code = findStation.getJSONObject(k).getString("FR_CODE").substring(0,
										findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") + 1);
								if (lastNum.equals("1")) {
									if (findStation.getJSONObject(i).getString("FR_CODE")
											.equals(findStation.getJSONObject(k).getString("FR_CODE").substring(0,
													findStation.getJSONObject(k).getString("FR_CODE").indexOf("-")))) {
										station[0] = findStation.getJSONObject(i).getString("STATION_NM");
									}
								} else {
									if (findStation.getJSONObject(i).getString("FR_CODE")
											.equals(code + String.valueOf(Integer.parseInt(lastNum) - 1))) {
										station[0] = findStation.getJSONObject(i).getString("STATION_NM");
									}
								}
								if (findStation.getJSONObject(i).getString("FR_CODE")
										.equals(code + String.valueOf(Integer.parseInt(lastNum) + 1))) {
									station[1] = findStation.getJSONObject(i).getString("STATION_NM");
								}
							} else {
								String head = null;
								String code = null;
								if (findStation.getJSONObject(k).getString("LINE_NUM").equals("A")) {
									head = findStation.getJSONObject(k).getString("FR_CODE").substring(0, 2);
									code = findStation.getJSONObject(k).getString("FR_CODE").substring(1);
								} else {
									head = findStation.getJSONObject(k).getString("FR_CODE").substring(0, 1);
									code = findStation.getJSONObject(k).getString("FR_CODE").substring(1);
								}
								if (findStation.getJSONObject(i).getString("FR_CODE")
										.equals(head + String.valueOf(Integer.parseInt(code) - 1))
										|| findStation.getJSONObject(i).getString("FR_CODE").equals(
												head.toLowerCase() + String.valueOf(Integer.parseInt(code) - 1))) {
									station[0] = findStation.getJSONObject(i).getString("STATION_NM");
								} else if (findStation.getJSONObject(i).getString("FR_CODE")
										.equals(String.valueOf(Integer.parseInt(code) - 1))) {
									station[0] = findStation.getJSONObject(i).getString("STATION_NM");
								}

								if (findStation.getJSONObject(i).getString("FR_CODE")
										.equals(head + String.valueOf(Integer.parseInt(code) + 1))
										|| findStation.getJSONObject(i).getString("FR_CODE").equals(
												head.toLowerCase() + String.valueOf(Integer.parseInt(code) + 1))) {

									if (station[1] != null) {
										station[1] += "/" + findStation.getJSONObject(i).getString("STATION_NM");
									} else {
										station[1] = findStation.getJSONObject(i).getString("STATION_NM");
									}
								}
								if (findStation.getJSONObject(i).getString("FR_CODE").indexOf("-") > -1) {
									if (findStation.getJSONObject(i).getString("FR_CODE")
											.substring(0,
													findStation.getJSONObject(i).getString("FR_CODE").indexOf("-"))
											.equals(findStation.getJSONObject(k).getString("FR_CODE"))
											&& findStation.getJSONObject(i - 1).getString("FR_CODE")
													.indexOf("-") <= -1) {
										if (station[1] != null) {
											station[1] += "/" + findStation.getJSONObject(i).getString("STATION_NM");
										} else {
											station[1] = findStation.getJSONObject(i).getString("STATION_NM");
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return station;
	}

	///////////////////////////////////////////////// 상행선//////////////////////////////////////////////////////////////////////////////////////////////////////
	public List<String> upperLine(String code, String subwayday) {
		List<String> upperTime = new ArrayList<>();
		try {
			url = new URL(
					"http://openAPI.seoul.go.kr:8088/63745056506b696d31303654706b5476/json/SearchArrivalInfoByIDService/1/3/"
							+ code + "/1/" + subwayday + "/");
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			json = in.readLine();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (in != null)
				try {
					in.close();
				} catch (Exception e) {
					e.printStackTrace();
				}

		}
		jsonObject = new JSONObject(json);
		if (jsonObject.isNull("SearchArrivalInfoByIDService") != true) {

			jsonObject = jsonObject.getJSONObject("SearchArrivalInfoByIDService");
			JSONArray jArrayTime = jsonObject.getJSONArray("row");

			for (int j = 0; j < jArrayTime.length(); j++) {

				upperTime.add(jArrayTime.getJSONObject(j).getString("SUBWAYNAME") + "행" + "          "
						+ jArrayTime.getJSONObject(j).getString("LEFTTIME").substring(0, 5));

			}
		}

		return upperTime;
	}

	//////////////////////////////////////////// 하행선////////////////////////////////////////////////////
	public List<String> downLine(String code, String subwayday) {
		List<String> downTime = new ArrayList<>();

		try {
			url = new URL(
					"http://openAPI.seoul.go.kr:8088/63745056506b696d31303654706b5476/json/SearchArrivalInfoByIDService/1/3/"
							+ code + "/2/" + subwayday + "/");
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			json = in.readLine();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (in != null)
				try {
					in.close();
				} catch (Exception e) {
					e.printStackTrace();
				}

		}
		jsonObject = new JSONObject(json);
		if (jsonObject.isNull("SearchArrivalInfoByIDService") != true) {

			jsonObject = jsonObject.getJSONObject("SearchArrivalInfoByIDService");
			JSONArray jArrayTime = jsonObject.getJSONArray("row");

			for (int j = 0; j < jArrayTime.length(); j++) {

				downTime.add(jArrayTime.getJSONObject(j).getString("SUBWAYNAME") + "행" + "          "
						+ jArrayTime.getJSONObject(j).getString("LEFTTIME").substring(0, 5));

			}
		}

		return downTime;
	}

	/////////////////// 지하철 역으로 좌표
	/////////////////// 얻어내기////////////////////////////////////////////////////////////////////////////
	public List<String> location(String code) {
		List<String> location = new ArrayList<>();
		try {
			url = new URL(
					"http://openAPI.seoul.go.kr:8088/63745056506b696d31303654706b5476/json/SearchLocationOfSTNByIDService/1/3/"
							+ code + "/");
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			json = in.readLine();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (in != null)
				try {
					in.close();
				} catch (Exception e) {
					e.printStackTrace();
				}

		}
		jsonObject = new JSONObject(json);
		if (jsonObject.isNull("SearchLocationOfSTNByIDService") != true) {

			jsonObject = jsonObject.getJSONObject("SearchLocationOfSTNByIDService");
			JSONArray jArrayLocation = jsonObject.getJSONArray("row");
			location.add(jArrayLocation.getJSONObject(0).getString("XPOINT_WGS"));
			location.add(jArrayLocation.getJSONObject(0).getString("YPOINT_WGS"));

		}
		return location;
	}
}
