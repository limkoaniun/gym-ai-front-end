import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function LanguageSwitcher() {
    const [languageFocused, setLanguageFocused] = React.useState<string | null>("Ch");

    return (
        <ButtonGroup disableElevation variant="contained" size="small">
            <Button key={"En"}  color={languageFocused == 'En' ? 'primary' : 'inherit' } style={{color: languageFocused == 'En' ? 'white' : 'grey' }}
                    onClick={() => setLanguageFocused('En')}>En</Button>
            <Button key={"Ch"}  color={languageFocused == 'Ch' ? 'error' : 'inherit'} style={{color: languageFocused == 'Ch' ? 'white' : 'grey' }}
                    onClick={() => setLanguageFocused('Ch')}>中</Button>
        </ButtonGroup>
    );
}