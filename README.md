# Monolith 
A mulitpage React-Native that fetches data containing a list of card transactions for a group of users. The final balances are computed and displayed per user on the main page. Clicking into a card shows all the transactions for a particular user.

## Getting Started
1. Complete the [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started.html) setup instructions.

2. Clone the repo:
- `git clone https://github.com/vishant101/monolith.git`

3. Install node modules:
- `npm i`

3. Install pods:
- `cd ios && pod install`

4. Run App:
- iOS: `npx react-native run-ios`
- Android: `npx react-native run-android`

## Screenshots
| Laoading | Balances | Transactions |
|------|---------|-----|
| <img src="https://github.com/vishant101/monolith/blob/main/screenshots/1.png" width="275" alt="Loading" title="Loading" /> | <img src="https://github.com/vishant101/monolith/blob/main/screenshots/2.png" width="275" alt="Balances" title="Balances" /> | <img src="https://github.com/vishant101/monolith/blob/main/screenshots/3.png" width="275" alt="Transactions" title="Transactions" /> |


## Assumptions
- If transaction data is malformed then the entire transaction is discarded
- A transaction can only contain 1 currency
- Only three currencies are supported and alphabetic code is required to be in caps


## Architecture
The app is a multipage application built with react-naviagtion for routing. State is managed using Redux.

When the app is opened a fetchTransaction async action is dispatched from the main balances screen. This action mocks an api request using a local JSON file and timeout to mock the response time. The data is processed in the async action and then stored in the store.

Once the request is finished the data is loaded into a flatlist that renders the final balances for each user. The element in the flatlist can be clicked to take the user to the transactions screen where each individual transaction can be view for the user.


## License
MIT