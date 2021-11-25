import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const secondurl = 'https://disease.sh/v2';

export const fetchData = async (country) => {
  let changeableUrl = `${secondurl}/all`;

  if (country) {
    changeableUrl = `${secondurl}/countries/${country}`;
  }
  
  if (country==='World') {
    changeableUrl = `${secondurl}/all`;
  }

  try {
    const { data: { cases, todayCases, deaths, todayDeaths, recovered, active, updated } } = await axios.get(changeableUrl);

    return { cases,todayCases, recovered, deaths,todayDeaths, active, updated };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async (country) => {
  try {
    const { data: { timeline } } = await axios.get(`${secondurl}/historical/IN?lastdays=120`);
	
	 

    return {cases:timeline.cases, recovered:timeline.recovered, deaths:timeline.deaths, active:timeline.active};
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
