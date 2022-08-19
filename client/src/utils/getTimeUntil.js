function getTimeUntil(icoEndDate) {
  const time = Date.parse(icoEndDate) - Date.parse(new Date());

  if (time < 0) {
    console.log("Date passed");
  } else {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

export default getTimeUntil;
