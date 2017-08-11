package com.mycompany.myapp.dao;

import java.util.List;

import com.mycompany.myapp.dto.Music;
import com.mycompany.myapp.dto.Photo;

public interface Dao {
	public int musicInsert(Music music);
	public List<Music> getMusicList();
	
	public int photoInsert(Photo photo);
}
