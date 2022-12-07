function App() {
  return (
    <div>
      <div>{import.meta.env.VITE_APP_TITLE}</div>

      <h1>Vite + React + TypeScript</h1>
      <div>version</div>
      <p>
        <li>vite@3.2.5</li>
        <li>react@18.2.0</li>
        <li>typescript@4.9.3</li>
        <li>eslint@8.29.0</li>
        <li>stylelint@14.16.0</li>
        <li>eslint@8.29.0</li>
      </p>
      <div>scripts</div>
      <p>
        <li>yarn dev</li>
        <li>yarn dev</li>
        <li>yarn build</li>
        <li>yarn preview</li>
        <li>yarn eslint</li>
        <li>yarn eslint:fix</li>
        <li>yarn stylelint</li>
        <li>yarn stylelint:fix</li>
        <li>yarn lint</li>
        <li>yarn lint:fix</li>
        <li>yarn format</li>
        <li>yarn fix</li>
      </p>
    </div>
  );
}

export default App;
