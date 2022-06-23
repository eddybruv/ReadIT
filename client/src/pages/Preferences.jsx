import React from 'react'
import { Container } from '@mui/material'
import SelectPhoto from '../components/preferencePage/SelectPhoto';
import PickPreference from '../components/preferencePage/PickPreference';
import PreferenceProvider from "../components/preferencePage/PreferenceContext";
import style from '../styles/preferences.module.css';

function Preferences() {
  return (
    <PreferenceProvider>
    <section className={`${style.body}`}>
      <Container sx={{ height: "100%" }}>
        <section className={`${style.main}`}>
          <SelectPhoto/>
          <PickPreference/>
        </section>
      </Container>
    </section>
    </PreferenceProvider>
  );
}

export default Preferences