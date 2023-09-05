package com.example.demo.controller;

import com.example.demo.entity.ZipCode;
import com.example.demo.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class WeatherController {
    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/forecast")
    public String getWeatherForecast(@RequestParam("zipCode") String zipCode, Model model) {
        // Call the WeatherService method to get forecast
        weatherService.getForecast(zipCode);

        // Call the WeatherService method to get recent searches and add them to the model
        List<ZipCode> recentSearches = weatherService.getRecentSearches();
        model.addAttribute("recentSearches", recentSearches);

        return "weather-forecast"; // Return the HTML template name
    }
}
