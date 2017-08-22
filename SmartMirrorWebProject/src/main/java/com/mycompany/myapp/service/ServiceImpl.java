package com.mycompany.myapp.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mycompany.myapp.dao.Dao;
import com.mycompany.myapp.dto.Music;
import com.mycompany.myapp.dto.Photo;

@Component
public class ServiceImpl implements Service {
	private BufferedReader in;
	private URL url;
	private JSONArray jArray;
	private String json;
	private HttpURLConnection con;
	private String encodingName;
	private JSONObject jsonObject;
	@Autowired
	private Dao dao;

	@Override
	public void musicUpload(Music music) {
		dao.musicInsert(music);
	}

	@Override
	public List<Music> getMusicList() {
		return dao.getMusicList();
	}

	@Override
	public void photoUpload(Photo photo) {
		dao.photoInsert(photo);
	}

	////////////////////////////////////////// 이름으로 검색하기 ////////////////
	@Override
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

////////////////앞뒤 전역 찾아내기////////////////////////////
	@Override
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
					if (findStation.getJSONObject(k).getString("LINE_NUM").equals("A")) {
						if (k != 0) {
							station[0] = findStation.getJSONObject(k - 1).getString("STATION_NM");
						}
						if (k != findStation.length() - 1) {
							station[1] = findStation.getJSONObject(k + 1).getString("STATION_NM");
						}
					} else {
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
								if (Character.isDigit(
										findStation.getJSONObject(i).getString("FR_CODE").charAt(0)) == false) {
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
						} else {

							for (int i = 0; i < findStation.length(); i++) {
								if (findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") > -1) {
									String lastNum = findStation.getJSONObject(k).getString("FR_CODE").substring(
											findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") + 1);
									String code = findStation.getJSONObject(k).getString("FR_CODE").substring(0,
											findStation.getJSONObject(k).getString("FR_CODE").indexOf("-") + 1);
									if (lastNum.equals("1")) {
										if (findStation.getJSONObject(i).getString("FR_CODE")
												.equals(findStation.getJSONObject(k).getString("FR_CODE").substring(0,
														findStation.getJSONObject(k).getString("FR_CODE")
																.indexOf("-")))) {
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

									head = findStation.getJSONObject(k).getString("FR_CODE").substring(0, 1);
									code = findStation.getJSONObject(k).getString("FR_CODE").substring(1);
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
												station[1] += "/"
														+ findStation.getJSONObject(i).getString("STATION_NM");
											} else {
												station[1] = findStation.getJSONObject(i).getString("STATION_NM");
											}
										}
									}
								}
							}
						}
					}
					if (findStation.getJSONObject(k).getString("FR_CODE").charAt(1) == '3'
							&& findStation.getJSONObject(k).getString("LINE_NUM").equals("K")) {
						String temp;
						temp = station[1];
						station[1] = station[0];
						station[0] = temp;
					}
				}

			}

		}
		return station;
	}

	@Override
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

	///////////////////////////////////////////////// 상행선//////////////////////////////////////////////////////////////////////////////////////////////////////
	@Override
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

	@Override
	/////////////////// 지하철 역으로 좌표 얻어내기/////////
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
