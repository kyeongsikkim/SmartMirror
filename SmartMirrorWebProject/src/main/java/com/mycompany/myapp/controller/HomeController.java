package com.mycompany.myapp.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;
import java.util.Calendar;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
import com.mycompany.myapp.util.Feed;
import com.mycompany.myapp.util.FeedMessage;
import com.mycompany.myapp.util.RSSFeedParser;

@Controller
public class HomeController {

	@Autowired
	private ServletContext servletContext; 
	
	private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
	private List<FeedMessage> list;

	private String apiKey = "04af17713fb5285e5352234c38f805b1";
	
	GeoApiContext context = new GeoApiContext.Builder()
			.apiKey("AIzaSyDoP8zx7GCoyI0BQixAfm-HGzsMldgk6kY")
			.build();
	
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
	
	@RequestMapping("/weather_View")
	public String weather_View() {
		return "weather";
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
	
	@RequestMapping("/youtubevideolist")
	public String youtube() {
		return "youtubeplaylist";
	}

	@RequestMapping("/video")
	public String video() {
		return "video";
	}
	
	@RequestMapping("/weather_detail")
	public String weather_detail(String address, HttpServletResponse response) throws URISyntaxException, FlickrException, ApiException, InterruptedException, IOException {

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
//		double tempMax = fdp.temperatureMax();
//		double tempMin = fdp.temperatureMin();
	
		jsonObject.put("temp", temp);
		jsonObject.put("icon", iconR);
		jsonObject.put("summary", summary);
//		jsonObject.put("tempMax", String.valueOf(tempMax));
//		jsonObject.put("tempMin", String.valueOf(tempMin));
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
	
//	@RequestMapping("/movie")
//	public String movie(Model model) {
//		String key = "fce26a7debd17e9ccb600c2274cff463";
//		KobisOpenAPIRestService service = new KobisOpenAPIRestService(key);
//		
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
//		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy / MM / dd");
//		Calendar calendar = new GregorianCalendar();
//		calendar.add(Calendar.DATE, -1);
//		String strDate = sdf.format(calendar.getTime());
//		String realDate = sdf2.format(new Date());
//		
//		model.addAttribute("date", realDate);
//		
//		try {
//			String dailyBoxOffice = service.getDailyBoxOffice(true, strDate, "10", "", "", "");
//			JSONObject jsonObject = new JSONObject(dailyBoxOffice);
//			jsonObject = (JSONObject) jsonObject.get("boxOfficeResult");
//			JSONArray jsonArray = (JSONArray) jsonObject.get("dailyBoxOfficeList");
//			
//			for(int i=0; i<10; i++) {
//				jsonObject = jsonArray.getJSONObject(i);
//				
//				String rank = jsonObject.getString("rank");
//				String movieName = jsonObject.getString("movieNm");
//				String audiCnt = jsonObject.getString("audiCnt");
//				String audiAcc = jsonObject.getString("audiAcc");
//				
//				model.addAttribute("rank"+i, rank);
//				model.addAttribute("movieName"+i, movieName);
//				model.addAttribute("audiCnt"+i, audiCnt);
//				model.addAttribute("audiAcc"+i, audiAcc);
//			}
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		return "movie";
//	}
	
	
	//602
	@RequestMapping("/File")
	public void File(MultipartFile attach, HttpServletResponse response)
			throws Exception {
		LOGGER.info(attach.getOriginalFilename());
		LOGGER.info(attach.getContentType());
		LOGGER.info(String.valueOf(attach.getSize()));
		
		String savedfilename = attach.getOriginalFilename();
		
		String realPath=servletContext.getRealPath("/resources/media/"+savedfilename);
		//String savedfilepath = "../resources/media/" + savedfilename;
		
		attach.transferTo(new File(realPath));
		
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("fileName", attach.getOriginalFilename());
		jsonObject.put("fileType", attach.getContentType());
		jsonObject.put("fileSize", attach.getSize());
		String json = jsonObject.toString();

		response.setContentType("application/json; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
	}
}

