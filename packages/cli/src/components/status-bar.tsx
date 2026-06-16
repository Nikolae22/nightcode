import { TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";
const {colors} =useTheme();


export function StatusBar(){

    return(
        <box flexDirection="row" gap={1}>
            <text fg={colors.primary}>Build</text>
            <text attributes={TextAttributes.DIM} fg={colors.dimSeparator}>
                &#8250;
            </text>
            <text>best brain ever ahah</text>
        </box>
    )
}