# React Dialog Component

This is a simple React dialog component designed for easy integration into your web applications. It provides a customizable modal with options for displaying a title, message, and buttons for user interaction.

## Installation

### Install the package using npm:

npm install oc_ms_dialog

### Import the component in your React application:

import Dialog from "oc_ms_dialog";
import "oc_ms_dialog/dist/lib.css";

## Usage

![usage de compenent](https://github.com/SoavaManal/dialogLib/blob/main/assets_readme/code.PNG)

## Props

- title (string): The title of the dialog (optional).
- mesage (string): The main message content of the dialog (requierd).
- handleCloseModale (function): Callback function for closing the modal(requierd).
- question (string): Additional question content if needed (optional).
- confirmLink (string): Link for the confirmation button (optional).
- confirmLabelButton (string): Text for the confirmation button (optional).
- cancelLabelButton (string): Text for the cancel button (optional).

## Styles

This component uses CSS modules for styling. Ensure that you import the styles properly:

### display review

![display modal](https://github.com/SoavaManal/dialogLib/blob/main/assets_readme/Modal.PNG)
