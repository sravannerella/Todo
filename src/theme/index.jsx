import { createMuiTheme } from "@material-ui/core";
import { indigo, grey, teal, red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: grey,
        error: red,
        action: teal
    }
});