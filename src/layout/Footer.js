import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto py-3">
                <div className="footer-container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        );
    }
}