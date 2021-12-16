import React, {useContext} from "react";
const themes = {
    light: {
        foreground: "#409624",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#910606",
        background: "#1998da"
    }
};

const ThemeContext = React.createContext(themes.light);

function App() {
    return (

            <Toolbar />

    );
}

function Toolbar() {

    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {

    const theme = useContext(ThemeContext) ;


    return (    <button style={{ background: theme.background, color: theme.foreground }}>      I am styled by theme context!    </button>  );
}
export default App;