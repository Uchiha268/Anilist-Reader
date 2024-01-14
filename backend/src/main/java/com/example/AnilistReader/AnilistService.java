package com.example.AnilistReader;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class AnilistService {
    @Autowired
    AnilistRepository anilistRepository;
    public String getListByUsername(String username, String type, String status) throws IOException, InterruptedException {
        String query = "{\n" +
                "  MediaListCollection(userName: \"" + username + "\", type: " + type + ", status: " + status + ") {\n" +
                "    lists {\n" +
                "      name\n" +
                "      entries {\n" +
                "        media {\n" +
                "          title {\n" +
                "            english\n" +
                "            native\n" +
                "          }\n" +
                "          coverImage{\n" +
                "            large\n" +
                "          }\n" +
                "        }\n" +
                "        score" +
                "      }\n" +
                "    }\n" +
                "  }\n" +
                "}";
        JSONObject jsonQueryRequest = new JSONObject();
        jsonQueryRequest.put("query", query);
        jsonQueryRequest.put("variables", "");
        String actualQueryRequest = jsonQueryRequest.toString();
        return anilistRepository.sendAnilistRequest(actualQueryRequest).toString();
    }
}
