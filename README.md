ScrollToElement
===============

Allows a user to scroll to an element using a nice simple helper method for jQuery

Usage
--------------------------------------

`$([selector]).scrollToElement([options]);`

Options
--------------------------------------

Options are otpional and do not need to be present. If absent it will simply scroll to the top of the selected element.

Options are an object value with speed and offset

`{ 
    speed: [int]    // Speed at which to scroll in milliseconds - Default: 2000
    speed: [int]    // Scroll to this offset of element - Default: 0
}`
