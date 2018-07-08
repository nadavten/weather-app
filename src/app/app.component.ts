import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WeatherService } from "./services/weather.service";
import { Filter, Station, StationValue } from "./models/data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  stations: Station[];
  idealTemp: number;
  idealHuidity = 50;
  loading: boolean;
  selectedGender: string;
  filter: Filter;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.filter = {
      lonLeft: 12,
      latBottom: 32,
      lonRight: 15,
      latTop: 37,
      zoom: 10
    };

    this.onSelectGender("male");
  }

  getData() {
    this.loading = true;
    this.stations = [];

    this.weatherService.getWeather(this.filter).subscribe(data => {
      let stationsValues: StationValue[] = [];
      let dicStations: { [id: number]: Station } = {};

      if (!!data && !!data.list) {
        
        for (let index = 0; index < data.list.length; index++) {
          const station = data.list[index];

          if (!dicStations[station.id]) {
            dicStations[station.id] = station;
          }

          const value =
            Math.abs(this.idealTemp - Math.abs(station.main.temp)) +
            Math.abs(this.idealHuidity - Math.abs(station.main.humidity));
          stationsValues.push({ id: station.id, value: value });
        }

        stationsValues.sort((s1, s2) => {
          if (s1.value > s2.value) return 1;
          else if (s1.value < s2.value) return -1;
          else return 0;
        });

        for (let index = 0; index < stationsValues.length; index++) {
          const element = stationsValues[index];

          this.stations.push(dicStations[element.id]);
        }
      }

      this.loading = false;
    });
  }

  onSelectGender(gender: string) {
    this.selectedGender = gender;

    if (gender === "male") {
      this.idealTemp = 21;
    } else if (gender === "female") {
      this.idealTemp = 22;
    }

    this.getData();
  }
}
