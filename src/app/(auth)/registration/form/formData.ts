export const formData = {
    "leadForm": [
        {
            "name": "countryOfBusiness",
            "label": "Country of Business",
            "type": "dropdown",
            "options": ["Select Country", "USA", "Canada", "UK", "India", "Australia"],
            "required": true,
            "readonly": false
        },
        {
            "name": "gstinNo",
            "label": "GSTIN No",
            "type": "text",
            "placeholder": "Enter GSTIN No",
            "required": true,
            "readonly": false,
            "validations": [
                {
                    "type": "regex",
                    "pattern": "^[0-9]{15}$",
                    "message": "GSTIN must be a 15-digit number."
                }
            ]
        },
        {
            "name": "fullName",
            "label": "Full Name",
            "type": "text",
            "placeholder": "Enter Full Name",
            "required": true,
            "readonly": false
        },
        {
            "name": "businessPhoneNumber",
            "label": "Business Phone Number",
            "type": "number",
            "placeholder": "Enter Business Phone Number",
            "required": true,
            "readonly": false,
            "validations": [
                {
                    "type": "regex",
                    "pattern": "^[0-9]{10}$",
                    "message": "Enter a valid 10-digit phone number."
                }
            ]
        },
        {
            "name": "businessEmailAddress",
            "label": "Business Email Address",
            "type": "text",
            "placeholder": "Enter Business Email Address",
            "required": true,
            "readonly": false,
            "validations": [
                {
                    "type": "email",
                    "message": "Enter a valid email address."
                }
            ]
        }
    ]
}