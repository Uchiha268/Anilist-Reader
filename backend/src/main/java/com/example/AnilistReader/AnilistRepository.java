package com.example.AnilistReader;

import org.json.JSONObject;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Repository
public class AnilistRepository {
    private static String endpoint = new String("https://graphql.anilist.co");
    public JSONObject sendAnilistRequest(String query) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        JSONObject jsonResponse = new JSONObject();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(query))
                .build();

        try{
            System.out.println(request.toString());
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            jsonResponse = new JSONObject(response.body());
            System.out.println("Success happened which is pretty surprising");
        }
        catch (Exception e){
            System.out.println("Error took place in this already dark and depressing world");
            System.out.println(e);
        }
        return jsonResponse;

    }
}
