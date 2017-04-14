/// <reference types="node" />

// The MIT License (MIT)
// 
// vs-deploy (https://github.com/mkloubert/vs-deploy)
// Copyright (c) Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.


/**
 * AUTO GENERATED CODE
 */

import * as ZLib from 'zlib';


export const STYLES = {
    // START: highlight.darkula.css
    "highlight.darkula.css": "H4sIAAAAAAAAC2VSwW7bMAy96ysE7FY0bZG1Serehu6w/sRAybSjhRI9iWprDP33WcPsWA14EZ9E8r1H3V4p9QzRZgJtmTjqZI/oUXeRvZYj6heUbxFcSLoD72jU3Okfz9+TUle3SqmbI/1K+o/SunVpIBgbbYjt6WlC+BVjR/y2eW80ZOGCDdC2LvSNvrt5QF8QA/bUR86hbfSXrSnxpD7Wnf8Rmy4NlDhfbpJEDv31/wz9cITk6ho4TLFd1ZhMhDLX/M4sOCfkwmk+h+wNxjmL2OP7cH4nGIGqObvD467iZrldGicktMJxYwnSJ3473G5xVVep6DjIpHIkbLQTIGdXL084vnFsL4YI9GfMiuMwpyASnclnxQH8cn6F6MAQVvSs2R++ru0bIIL/tJbHEvVaphXX9sBh/1C9ySYtW5BxWGiY7Eh+ulDlLlRU0+gN04Vwd+lFUXwBDglzy8vwyXECwbVvCzabsjg4/d7iaCUO7+z9zla79x7DIq+dBq/X4FGgarDvSpQGfwGQ7fP7kAMAAA==",
    // END: highlight.darkula.css

    // START: highlight.default.css
    "highlight.default.css": "H4sIAAAAAAAAC3VUXW/TMBR996+wtBeo+pGx0i4pQjAkJCQQD2jP0419k5o6drFv2lWI/z4nXRNnYY6iyNf349xzj7OYMPbTqVIZ0Hyryq0OL81/e+7ppJG/EW/5twMY/gtK0IAH/qECo0B88ragIzg8b/3cuvIjY5MFY/OtDvF/GedS+b2GU8ZzbcVuEyz2gK7Q9jh7zDjUZBvbHqRUpsx4Mn+PVWPJQexKZ2sjM371NWmeDfvHGFtM+B145MJq6zLugWoHpKzhyYZ3tafnz8zXuacWyLP/1XK5bBOdz4WtKjRDj9t2RU47PB2tk5ecQORUXhN2RVCjIOtmBOXFViHBy0BpReRhoMK2bmENzY7YsB5oslp2jd57dBdY2xoDPX2HMzrtewQBkekz11WOboROyZFJaPAdV39q2/dEWIW5EcY9yRDWMj1kKwkrYosU6Yga8WrEa52fIx2W+Ljv8pyqcH7ZHcApyPUY7MsDrcxu1HQzv5Fx77GWdoDz7ssqWfWq+w6mrKHEwUDSWHShHKELtyjOsr79nK5ifvJaaXpQZtrtdaB12glSduibSzFi7yZd3yQ9qh9BZwNE75JYJI0MB+HXxfo6TSM4rVDP+hneE5mmedHXUV5wLIrAlo/yB+K34JXvhdz+NDKuCLQSUZ1Qwj6X+O/YnwABWDEYhwQAAA==",
    // END: highlight.default.css

    // START: styles.css
    "styles.css": "H4sIAAAAAAAAC31U246bMBB9j5R/cLWqdlvFKxLSaEUe973/YLAJVozHMpMltOq/d0LAXHKJZInMDMdnzpxhufjJ/i4XjH6l8AdtExbtr/+dkFLbwzXwb7lYLlKQTV9da4lFwtZR9L1Piz6XgQGfMG0L5TV2cDlY5LXShwITloKRXRzVGblUGXiBGuh+C1YFyKSAL+VnwHWhUT16/WSl8kYPGMV6xYpND9F1xVNAhJKae49V2WGl4OndkFq7M6vAaMle4jiewtGJ6Wzp/KKzm4rIEVzCNlt33k/CAXnXZlo85xX1JVWP0OqUi1KbJmGfYImBqFbs9RNOXpMUv1X9Opa00n8UIW4d7mdzZN906cCjsH2qpgZ57QWRS70SR34JTMtaTihSEwh1qlROZMEOozjNxAhXEYf+aX8rRfRUh1HGX/3xMehz5YJyxbqnYjbKhBEKW8cB6kpsMr/dbjfDCyipyI4HD2QbfsdeXSg1VPXEyGNkn1gseFZoI9829sfje8auIhesmJuvIskQTjRIcjJ9odSVM6K5EIRA0OiKbIGNURwbR4OhqqzLEfH0qJH3g1A5+It9wg7MCkSOrZSP8hUKTzJEQfxZXll5L9tvYff6dtSc0TfNtQ3RTHoO7c4Low8k0XAfZgXhejXY+OWrksoZaHgOgMNnZOzMeDNcfVMfBpIZJS42APLNzVZNh3Cbzw0IarK19v09+HjC4T0EJFiBiqdoK6bLw3Q/W5Xbbyc5UNgqKHEpKTq3bqL5vhmVj9ftP9zW5E4PBgAA",
    // END: styles.css

};


/**
 * Tries to return content from 'STYLES' constant.
 * 
 * @param {string} key The key inside the constant.
 * 
 * @return {Promise<Buffer>} The promise.
 */
export function getContent(key: string): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
        key = normalizeString(key);
        let data: Buffer;

        for (let p in STYLES) {
            if (normalizeString(p) === key) {
                data = new Buffer(STYLES[p], 'base64');
                break;
            }
        }

        if (data) {
            ZLib.gunzip(data, (err, umcompressedData) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(umcompressedData);
                }
            });
        }
        else {
            resolve(data);
        }
    });
}

/**
 * Tries to return content from 'STYLES' constant.
 * 
 * @param {string} key The key inside the constant.
 * 
 * @return Buffer The content.
 */
export function getContentSync(key: string): Buffer {
    key = normalizeString(key);
    let data: Buffer;

    for (let p in STYLES) {
        if (normalizeString(p) === key) {
            data = new Buffer(STYLES[p], 'base64');
            break;
        }
    }

    if (data) {
        data = ZLib.gunzipSync(data);
    }

    return data;
}

function normalizeString(str: any): string {
    if (null === str ||
        'undefined' === typeof str) {
        
        str = '';
    }

    return ('' + str).toLowerCase().trim();
}
