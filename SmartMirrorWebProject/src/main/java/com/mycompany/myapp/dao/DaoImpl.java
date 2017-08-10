package com.mycompany.myapp.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.mycompany.myapp.dto.Music;

@Component
public class DaoImpl implements Dao {

	List<Music> musicList = new ArrayList<Music>();
	
	@Override
	public int musicInsert(Music music) {
		Connection connection = null;
        PreparedStatement pstmt = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://192.168.3.173:3306/smartmirror", "iot1_mirror", "iot12345");
            pstmt = connection.prepareStatement("insert into music(mfilename,mfilepath) values(?,?);");
            
            String filename = music.getMfilename();
            String filepath = music.getMfilepath();
            
            pstmt.setString(1, filename);
            pstmt.setString(2, filepath);
            
            pstmt.executeUpdate();
            
            pstmt.close();
            connection.close();
        } catch (SQLException se1) {
            se1.printStackTrace();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                if (pstmt!= null)
                	pstmt.close();
            } catch (SQLException se2) {
            }
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        return music.getMno();
	}

	@Override
	public List<Music> getMusicList() {
		Connection connection = null;
        PreparedStatement pstmt = null;
        
        if(musicList != null) {
        	musicList.clear();
        }
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://192.168.3.173:3306/smartmirror", "iot1_mirror", "iot12345");
            
            String sql;
            sql = "select * from music";
            pstmt = connection.prepareStatement(sql);
            
            ResultSet rs = pstmt.executeQuery();
           
            while(rs.next()) {
            	Music music = new Music();
            	music.setMno(rs.getInt(1));
            	music.setMfilename(rs.getString(2));
            	music.setMfilepath(rs.getString(3));
            	
            	musicList.add(music);
            }
            
            pstmt.close();
            connection.close();
            
        } catch (SQLException se1) {
            se1.printStackTrace();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                if (pstmt != null)
                	pstmt.close();
            } catch (SQLException se2) {
            }
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
		return musicList;
	}
}
