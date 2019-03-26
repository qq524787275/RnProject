/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {DeviceEventEmitter, BackHandler} from 'react-native';
import {WebView} from "react-native-webview";

type Props = {};
export default class App extends Component<Props> {
    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('onBack', () => {
             if (this.isBack) {
                this.webview.goBack();
            } else {
                BackHandler.exitApp()
            }
        })
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    _onNavigationStateChange = (navState) => {
        if (navState.canGoBack) {
            this.isBack = true;
        } else {
            this.isBack = false;
        }
    }

    render() {
        return (
            <WebView
                ref={ref => this.webview = ref}
                onNavigationStateChange={this._onNavigationStateChange}
                source={{uri: 'http://shop.keytoken.app/index.php?r=Nzk%3D'}}
            />
        );
    }
}
