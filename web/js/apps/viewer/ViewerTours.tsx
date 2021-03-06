import * as ReactDOM from 'react-dom';
import {PrioritizedSplashes} from '../../../../apps/repository/js/splash/PrioritizedSplashes';
import {SyncBar} from '../../ui/sync_bar/SyncBar';
import {RepositoryTour} from '../repository/RepositoryTour';
import {HashRouter, Route, Switch} from 'react-router-dom';
import * as React from 'react';
import {ViewerTour} from './ViewerTour';

export class ViewerTours {

    public static create() {

        const id = 'viewer-tour-container';
        let container = document.getElementById(id);

        if (container) {
            return;
        }

        container = document.createElement('div');
        container.id = id;

        ReactDOM.render(

            <ViewerTour/>,

            container

        );

    }

}
