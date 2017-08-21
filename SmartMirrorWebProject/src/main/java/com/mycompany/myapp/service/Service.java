package com.mycompany.myapp.service;

import java.util.List;

import com.mycompany.myapp.dto.Music;
import com.mycompany.myapp.dto.Photo;

public interface Service {
	public void musicUpload(Music music);
	public List<Music> getMusicList();
	
	public void photoUpload(Photo photo);
	
	///////////////////////////////////////지하철 메소드/////////////////////
	public List<String> SearchInfoBySubwayNameService(String inputStation);
	public String[] findStation(String lineNum, String inputStation);
	public List<String> upperLine(String code, String subwayday);
	public List<String> downLine(String code, String subwayday);
	public List<String> location(String code);
}
