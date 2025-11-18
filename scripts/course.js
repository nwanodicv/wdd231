const courses = [{
   wdd130: 'WDD130',
   wdd131: 'WDD131',
   wdd231: 'WDD231',
   cse110: 'CSE110',
   cse111: 'CSE111',
   cse210: 'CSE210',
}];

/****************Filter Section**************/
function displayCourses(filterCourses) {
    let courseHTML ="";
    filterCourses.forEach((course) => {
        console.log(course)
        // check for each property to exist
    for (let key in course) {
      courseHTML += `<div class="course">${course[key]}</div>`;
    };
    });
    
    document.querySelector('#course-container').innerHTML = courseHTML;
}
displayCourses(courses);
// convert the array values into a button
function displayCourses() {
    const container = document.querySelector('#course-container');

    container.innerHTML = "";
    courses.forEach((course) => {
        for (let key in course) {
            // create button
            const button = document.createElement('button');
            button.textContent = course[key];

            // add event listener to the button
            button.addEventListener('click', (event) => {
                event.preventDefault();
                alert(`You click ${course[key]}`);
                myTitle.innerHTML = key;
                myDialog.showModal();
            } );
            container.append(button);
        }
    })
   }

// Here we add event listeners to the buttons to clear of whatever was previously displayed
 const allCourses = document.querySelector('#all-courses');
 allCourses.addEventListener('click', (event) => {
    event.preventDefault();
    displayCourses(courses);

    // Here is to get the total number of course
    const totalCourses = Object.keys(courses[0]).length;
    document.querySelector('#counter').textContent = `The total number of courses listed below is: ${totalCourses}`;
 });

//*******************Event Listener for CSE button************* */
const cseCourses = document.querySelector('#cse-courses');

cseCourses.addEventListener('click', (event) => {
    event.preventDefault();
    // Display only CSE Courses
    const cseCourses = [{
        cse110: 'CSE110',
        cse111: 'CSE111',
        cse210: 'CSE210',
    }];
   displayCourses(cseCourses);

   // convert the array values into a button
function displayCourses() {
    const container = document.querySelector('#course-container');

    container.innerHTML = "";
    cseCourses.forEach((csecourse) => {
        for (let key in csecourse) {
            // create button
            const button = document.createElement('button');
            button.textContent = csecourse[key];

            // add event listener to the button
            button.addEventListener('click', (event) => {
                event.preventDefault();
                alert(`You click ${csecourse[key]}`);
                myTitle.innerHTML = key;
                myDialog.showModal();
            } );
            container.append(button);
        }
    })
   }

   // Here is to get the total number of course
   const totalCourses = Object.keys(cseCourses[0]).length;
   document.querySelector('#counter').textContent = `The total number of courses listed below is: ${totalCourses}`;
});

//*******************Event Listener for WDD button************* */
const wddCourses = document.querySelector('#wdd-courses');

wddCourses.addEventListener('click', (event) => {
    event.preventDefault();
    // Display only WDD Courses
    const wddCourses = [{
        wdd130: 'WDD130',
        wdd131: 'WDD131',
        wdd231: 'WDD231',
    }];
    displayCourses(wddCourses);

    // convert the array values into a button
function displayCourses() {
    const container = document.querySelector('#course-container');

    container.innerHTML = "";
    wddCourses.forEach((wddcourse) => {
        for (let key in wddcourse) {
            // create button
            const button = document.createElement('button');
            button.textContent = wddcourse[key];

            // add event listener to the button
            button.addEventListener('click', (event) => {
                event.preventDefault();
                alert(`You click ${wddcourse[key]}`);
                myTitle.innerHTML = key;
                

                if (wddcourse[key] === "WDD130") {
                    content = "This is wdd130."
                    myInfo.innerHTML = content;
                };

                if (wddcourse[key] === "WDD131") {
                    content = "This is wdd131."
                    myInfo.innerHTML = content;
                };

                if (wddcourse[key] === "WDD231") {
                    content = "This is wdd231."
                    myInfo.innerHTML = content;
                };

                myDialog.showModal();
            } );
            container.append(button);
        }
    })
   }

   // Here is to get the total number of course
   const totalCourses = Object.keys(wddCourses[0]).length;
   document.querySelector('#counter').textContent = `The total number of courses listed below is: ${totalCourses}`;
});

// Get a reference to the html dialog element
const myDialog = document.querySelector('#mydialog');
const myTitle = document.querySelector('#mydialog h2');
const myClose = document.querySelector('#mydialog button');
const myInfo = document.querySelector('#mydialog p');

myClose.addEventListener('click', () => {
    myDialog.close();
})
