In this project, building a **Browser History** app by using React .

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif" alt="browser history output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/browser-history-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Browser History](https://assets.ccbp.in/frontend/content/react-js/browser-history-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app have the following functionalities

- Initially, the list of given history items should be displayed with a delete button for each history item.
- When a non-empty value is provided in the search input, then display the history items which includes the search input irrespective of case
- When the delete button of a history item is clicked, then the respective history item should be deleted from the list of history items
- When a non-empty value is provided in the search input element, and no history item includes the value given in the search input, then [Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png) should be displayed
- When all the history items are deleted, then [Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png) should be displayed

- The App is provided with `historyList`. It consists of a list of historyItem objects with the following properties in each historyItem object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  Number   |
  | timeAccessed |  String   |
  |   logoUrl    |  String   |
  |    title     |  String   |
  |  domainUrl   |  String   |

</details>

<br/>

> ### _Used Files_
>
> -`src/components/index.js` -`src/components/index.css` -`src/App.js` -`src/App.js`
