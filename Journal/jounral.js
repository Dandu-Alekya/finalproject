const entryFormbtn = document.querySelector(".btn-main");
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);

const getEntryText1 = document.getElementsByClassName(`entry-text-box1`);
const getEntryText2 = document.getElementsByClassName(`entry-text-box2`);
const getEntryText3 = document.getElementsByClassName(`entry-text-box3`);
const getEntryText4 = document.getElementsByClassName(`entry-text-box4`);
const getEntryText5 = document.getElementsByClassName(`entry-text-box5`);
const getEntryText6 = document.getElementsByClassName(`entry-text-box6`);
const getEntryText7 = document.getElementsByClassName(`entry-text-box7`);
const getEntryText8 = document.getElementsByClassName(`entry-text-box8`);
const getEntryText9 = document.getElementsByClassName(`entry-text-box9`);

function addEntryToDom(event) {
        event.preventDefault();
        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        console.log(day);

        const heading = document.createElement(`h2`);
        heading.className = `heading-results`;
        heading.textContent = `Journal Entries`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)

        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // Adding Div Element Date

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        }

        // Adding Div Element paragraph

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.innerHTML = 
        `How do you feel today?: ${getEntryText1[0].value}<br> 
        What's on your mind right now?: ${getEntryText2[0].value}<br>
        What are you grateful for today?: ${getEntryText3[0].value}<br>
        What are/were you excited about today?: ${getEntryText4[0].value}<br>
        What is stressing you out today? and how can you deal with it?: ${getEntryText5[0].value}<br>
        What are you most proud of?: ${getEntryText6[0].value}<br>
        Who inspired you today?: ${getEntryText7[0].value}<br>
        Did anything upset you today? and how did/can you deal with it?: ${getEntryText8[0].value}<br>
        Your favourite thing about today and yourself!: ${getEntryText9[0].value}<br>
        `;
        entryDiv.appendChild(entryParagraph);
        getEntryText1[0].value = ``;
        getEntryText2[0].value = ``;
        getEntryText3[0].value = ``;
        getEntryText4[0].value = ``;
        getEntryText5[0].value = ``;
        getEntryText6[0].value = ``;
        getEntryText7[0].value = ``;
        getEntryText8[0].value = ``;
        getEntryText9[0].value = ``;
        getEntryTitle[0].value=``;
}

entryFormbtn.addEventListener('click', addEntryToDom);
