# React Dialog Component

This is a simple React dialog component designed for easy integration into your web applications. It provides a customizable modal with options for displaying a title, message, and buttons for user interaction.

## Installation

### Install the package using npm:

npm install oc_ms_dialog

### Import the component in your React application:

import Dialog from "oc_ms_dialog";

## Usage

![usage de compenent](https://github.com/SoavaManal/dialogLib/blob/main/assets_readme/code.PNG)

## Props

- title (string): The title of the dialog.
- mesage (string): The main message content of the dialog.
- question (string): Additional question content if needed.
- handleCloseModale (function): Callback function for closing the modal.
- confirmLink (string): Link for the confirmation button.
- confirmMesage (string): Text for the confirmation button.
- cancelMesage (string): Text for the cancel button.

## Styles

This component uses CSS modules for styling. Ensure that you import the styles properly:

### Import

import "dialog/dist/lib.css";

### display review

![display modal](https://github.com/SoavaManal/dialogLib/blob/main/assets_readme/Modal.PNG)
