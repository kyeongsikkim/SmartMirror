package com.mycompany.myapp.dao;

import java.util.List;

import com.mycompany.myapp.dto.Music;

public interface Dao {
	public int musicInsert(Music music);
	public List<Music> getMusicList();
}
