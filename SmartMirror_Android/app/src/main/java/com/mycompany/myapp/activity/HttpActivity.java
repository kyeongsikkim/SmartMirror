package com.mycompany.myapp.activity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import com.mycompany.myapp.R;
import com.mycompany.myapp.util.RealPathUtil;

import java.io.File;
import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;

import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;


public class HttpActivity extends AppCompatActivity {
    private static final String TAG = "HttpActivity";
    private EditText txtAttach;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_http);
        txtAttach = (EditText) findViewById(R.id.txtAttach);
    }


    private boolean checkPermission() {
        int permissionRES = ActivityCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE);
        int permissionWES = ActivityCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE);
        if (permissionRES != PackageManager.PERMISSION_GRANTED ||
                permissionWES != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(
                    this,
                    new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    1);
            return false;
        } else {
            return true;
        }
    }

    public void handleBtnAttach(View v) {
        if (checkPermission()) {
            Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
            intent.setType("audio/*");
            //intent.setType("image/*");
            startActivityForResult(Intent.createChooser(intent, "파일 선택"), 1);
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 1) {
            if (resultCode == RESULT_OK) {
                Uri selectedImageUri = data.getData();
                String realPath = RealPathUtil.getRealPath(this, selectedImageUri);
                txtAttach.setText(realPath);
                Log.i(TAG, realPath);
            }
        }
    }

    public void handleBtnUpload(View v) {
        String filePath = txtAttach.getText().toString();
        String[] paths = filePath.split("/");
        String fileName = paths[paths.length - 1];
        Log.i(TAG, fileName);

        String url = "http://192.168.3.117:8080/SmartMirrorWebProject/File";
        RequestBody requestBody = new MultipartBody.Builder()
                .addFormDataPart("attach", fileName, RequestBody.create(MultipartBody.FORM, new File(filePath)))
                .build();
        Request request = new Request.Builder()
                .url(url)
                .post(requestBody)
                .build();
        OkHttpClient client = new OkHttpClient();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
            }
        });
    }

}
