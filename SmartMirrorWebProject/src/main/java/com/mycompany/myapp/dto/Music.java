package com.mycompany.myapp.dto;

import org.springframework.web.multipart.MultipartFile;

public class Music {
	private int mno;
	private String mfilename;
	private String mfilepath;
	private MultipartFile mattach;
	
	public int getMno() {
		return mno;
	}
	public void setMno(int mno) {
		this.mno = mno;
	}
	public String getMfilename() {
		return mfilename;
	}
	public void setMfilename(String mfilename) {
		this.mfilename = mfilename;
	}
	public String getMfilepath() {
		return mfilepath;
	}
	public void setMfilepath(String filepath) {
		this.mfilepath = filepath;
	}
	public MultipartFile getMattach() {
		return mattach;
	}
	public void setMattach(MultipartFile mattach) {
		this.mattach = mattach;
	}
}
