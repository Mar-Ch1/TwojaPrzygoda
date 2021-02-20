import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import {Calendar} from 'react-calendar';

export default function EventFilters() {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%'}}>
                <Header icon='filter' attached color='teal' content='Filtry' />
                <Menu.Item content='Wszystkie wydarzenia' />
                <Menu.Item content="Biorę udział" />
                <Menu.Item content="Organizuję wydarzenie" />
            </Menu>
            <Header icon='calendar' attached color='teal' content='Wybierz datę' />
            <Calendar />
        </>
    )
}