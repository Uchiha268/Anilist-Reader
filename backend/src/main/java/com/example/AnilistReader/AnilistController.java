package com.example.AnilistReader;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController("api/v1/")
public class AnilistController {
    @Autowired
    AnilistService anilistService;
   @GetMapping("api/v1/{username}/{type}/{status}")
   String getCompletedByUsername(@PathVariable("username") String username, @PathVariable("type") String type, @PathVariable("status") String status) throws IOException, InterruptedException {
       return anilistService.getListByUsername(username, type.toUpperCase(), status.toUpperCase());
   }
   @GetMapping("api/v1/")
   String welcome(){
       return "Welcome to Anilist Fetcher by LittleSussyUchiha";
   }
}
