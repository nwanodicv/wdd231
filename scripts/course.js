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
                //alert(`You click ${csecourse[key]}`);
                myTitle.innerHTML = key;

                if (csecourse[key] === "CSE110") {
                    content = "This is CSE110."
                    myInfo.innerHTML = content;
                };

                if (csecourse[key] === "CSE111") {
                    content = "This is CSE111."
                    myInfo.innerHTML = content;
                };

                if (csecourse[key] === "CSE210") {
                    content = "This is CSE210."
                    myInfo.innerHTML = content;
                };
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
                //alert(`You click ${wddcourse[key]}`);
                myTitle.innerHTML = key;
                

                if (wddcourse[key] === "WDD130") {
                    content = "This is wdd130."
                    myInfo.innerHTML = content;
                };

                if (wddcourse[key] === "WDD131") {
                    content = "Dynamic Web Fundamentals is the study of how to build websites that respond to user actions, display changing data, and interact with servers. It focuses on core technologies such as HTML, CSS, and JavaScript, along with tools and techniques that allow web pages to update content dynamically without reloading. Students learn how to create interactive interfaces, handle events, work with data, and develop web applications that feel fast, modern, and responsive.."
                    myInfo.innerHTML = content;
                };

                if (wddcourse[key] === "WDD231") {
                    content = "Welcome to Web Frontend Development. This course builds on your prior experience with the core technologies of web design and development including HTML, CSS, JavaScript, and design. The course focuses on user experience, accessibility, compliance, performance optimization, and basic API use. It is anticipated that students who complete this course will have very firm grasp of the core web technologies of HTML, CSS, and JavaScript and be ready for the next sequence of application courses."
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
