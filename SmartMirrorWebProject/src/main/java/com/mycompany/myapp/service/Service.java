package com.mycompany.myapp.service;

import java.util.List;

import com.mycompany.myapp.dto.Music;

public interface Service {
	public void musicUpload(Music music);
	public List<Music> getMusicList();
}
