import { getSelectedLocation } from "./requests";
import { formatDate } from "./helper";
import "src/scss/mapdetails.scss";

export const setMapDetails = (url) => {
  let detailsContentElement = document.getElementById("details-content");

  getSelectedLocation({
    url,
    success: (response) => {
      let data = response.data;
      let title = data.properties.title;
      let location = data.properties.place;
      let dateTime = formatDate(data.properties.time);

      let tsunami = data.properties.tsunami;
      let magnitude = data.properties.mag;
      let moreInfo = data.properties.url;
      detailsContentElement.innerHTML = `<div class="details-content">${setHeadertDetails(
        { title, dateTime, location }
      )}${setDetailsContent({ tsunami, magnitude, moreInfo })}</div>`;
    },
    error: (error) => {},
    completed: () => {},
  });
};

const setHeadertDetails = ({ title, dateTime, location }) => {
  return `
      <div class="details-header">
          <div class="title">
              <h1>${title}</h1>
          </div>
          <div class="location">
              ${location}
          </div>
          <div class="date-time">
              ${dateTime}
          </div>
      </div>
    `;
};

const setDetailsContent = ({ magnitude, tsunami, moreInfo }) => {
  return `
      <div class="details-header">
          <div class="magnitude">
              Magnitude: ${magnitude}
          </div>
          <div class="tsunami">
          Tsunami: ${tsunami}
          </div>
          <div class="more-info">
              <a target="__blank" href="${moreInfo}">More info</a>
          </div>
      </div>
    `;
};
