const IP = 'http://169.254.10.1:5000';
const socket = io.connect(IP);

//#region ***********  DOM references ***********
let domSongs;
//#endregion

//#region ***********  Callback - HTML Generation (After select) ***********
// show________
const showSongs = function(songs) {
  html = `
      <div class="o-layout o-layout--justify-space-between o-layout--align-center">

          <div class="o-layout__item u-5-of-12-bp3"><h3>Song Name -  Artist</h3></div>
          <div class="o-layout__item u-2-of-12-bp3"><h3>Genre</h3></div>
          <div class="o-layout__item u-4-of-12-bp3"><h3>Date Added</h3></div>
          <div class="o-layout__item u-1-of-12-bp3"><h3>Remove / Edit</h3></div>
      </div>
  `;
  console.log(songs);
  for (let song of songs) {
      console.log(song);
    html += `
    <div class="o-layout o-layout--justify-space-between o-layout--align-center js-songs">

        <div class="o-layout__item u-5-of-12-bp3">${song.SongArtist} - ${song.SongName}</div>
        <div class="o-layout__item u-2-of-12-bp3">Pop</div>
        <div class="o-layout__item u-4-of-12-bp3">03/06/2019</div>
        <div class="o-layout__item u-1-of-12-bp3">
            <div class="o-layout o-layout--justify-space-between o-layout--align-center">
                <div class="o-layout__item u-1-of-3-bp3">
                    <div class="c-svg">
                        <svg class="c-svg__close" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 26 26">
                        <path id="Icon_Close" data-name="Icon Close" d="M18.4,12.991l6.48,6.477a3.821,3.821,0,1,1-5.4,5.4l-6.477-6.477L6.517,24.872a3.821,3.821,0,0,1-5.4-5.4L7.59,12.991,1.113,6.514a3.821,3.821,0,0,1,5.4-5.4l6.477,6.48,6.477-6.48a3.821,3.821,0,0,1,5.4,5.4Z" transform="translate(0.006 0.007)" fill-rule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div class="o-layout__item u-1-of-3-bp3">
                    /
                </div>
                <div class="o-layout__item u-1-of-3-bp3">
                    <div class="c-svg">
                        <svg class="c-svg__cog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26.034">
                        <path id="Icon_Cog" data-name="Icon Cog" d="M88.434,74.336H87.4a1.584,1.584,0,0,1-1.545-1.586,1.483,1.483,0,0,1,.508-1.118l.664-.651a1.665,1.665,0,0,0,0-2.365l-1.511-1.5a1.72,1.72,0,0,0-2.372,0l-.637.637a1.531,1.531,0,0,1-1.152.522,1.585,1.585,0,0,1-1.593-1.539V65.7A1.694,1.694,0,0,0,78.1,64h-2.06a1.684,1.684,0,0,0-1.654,1.7v1.03A1.585,1.585,0,0,1,72.8,68.27a1.515,1.515,0,0,1-1.125-.5l-.657-.651a1.67,1.67,0,0,0-1.186-.474,1.711,1.711,0,0,0-1.186.474l-1.525,1.491a1.669,1.669,0,0,0,0,2.359l.637.637a1.534,1.534,0,0,1,.529,1.145,1.58,1.58,0,0,1-1.545,1.586h-1.03A1.68,1.68,0,0,0,64,75.983v2.06a1.684,1.684,0,0,0,1.708,1.647h1.03a1.584,1.584,0,0,1,1.545,1.586,1.534,1.534,0,0,1-.529,1.145l-.637.63a1.669,1.669,0,0,0,0,2.359l1.511,1.5a1.67,1.67,0,0,0,1.186.474A1.711,1.711,0,0,0,71,86.916l.657-.651a1.5,1.5,0,0,1,1.125-.5A1.585,1.585,0,0,1,74.377,87.3v1.03a1.69,1.69,0,0,0,1.661,1.7H78.1a1.684,1.684,0,0,0,1.654-1.7V87.3A1.574,1.574,0,0,1,82.5,86.286l.637.637a1.72,1.72,0,0,0,2.372,0l1.511-1.5a1.677,1.677,0,0,0,0-2.365l-.664-.651a1.494,1.494,0,0,1-.508-1.118A1.58,1.58,0,0,1,87.39,79.7h1.03A1.576,1.576,0,0,0,90,78.05V75.983A1.557,1.557,0,0,0,88.434,74.336ZM82.49,77.013h0a5.422,5.422,0,0,1-10.845,0h0a5.422,5.422,0,0,1,10.845,0Z" transform="translate(-64 -64)"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }
  domSongs.innerHTML = html;
};


//#endregion

//#region ***********  Callback - (After update/delete/insert) ***********
// callback______

//#endregion
//#region ***********  Data Access ***********
// get_______
const getSongs = function() {
  handleData('http://169.254.10.1:5000/api/v1/songs', showSongs);
};

//#endregion

//#region ***********  Event Listeners ***********
// listenTo________________

//#endregion

//#region ***********  INIT / DOMContentLoaded ***********
const init = function() {
  // Get some DOM, we created empty earlier.
  domSongs = document.querySelector('.js-songs');

  if (domSongs) {
    getSongs();
  }
};

document.addEventListener('DOMContentLoaded', init);
//#endregion
