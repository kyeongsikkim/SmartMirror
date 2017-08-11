package com.mycompany.myapp.service;

import java.util.List;

import com.mycompany.myapp.dto.Music;
import com.mycompany.myapp.dto.Photo;

public interface Service {
	public void musicUpload(Music music);
	public List<Music> getMusicList();
	
	public void photoUpload(Photo photo);
}
