# SPRK Frontend Coding Challenge

Dear [Candidate name],

Thank you for taking the time to complete our coding challenge. We value your time and efforts, so we've designed this challenge to resemble the actual day-to-day work at SPRK as much as possible.

## Background

SPRK needs to know what food is available at the location of a partner. That's why we've built an application that allows the people in warehouses (called "Pickers") to report products in a structured way. They can also create new products. Packaged products have a barcode. External information databases host relevant product data like weight or ingredients data. Most packaged products have the best before date printed on their packaging. Sales teams need this information since a product's value decreases as it approaches its best before date. Most fruit and vegetable products don't have the best before date. Here it's rather a qualitative description of the quality state.

## The Scenario

Let's assume that one of our pickers is scanning a multitude of products with our mobile app and submits the session to our Backend service. Your task is to create a frontend application that interacts with a backend API to allow the picker to scan, modify, and submit product data. The backend API should have the following endpoints:

1. Products are identified using the field `code` in combination with the field `type`.
2. The `code` field should not contain any leading zeros once it is stored in our database.
3. The `code` may be a mix of both, ones with leading zeros and without them.
4. There may be unicode characters which need to be parsed before storing in our database.
5. The field `trade_item_unit_descriptor` may also be present as `trade_item_descriptor` but should be transformed to the first before being stored in the DB.

## Your Task

Your task is to build a frontend application using Next.js (TypeScript preferred, but JavaScript is acceptable) which can:

1. Scan barcodes, returning a GTIN.
2. Send this GTIN to an endpoint (using the mock server) which returns product data.
3. Open this product data in a form allowing the user to change data (except the GTIN) before submitting it to an endpoint in the backend.
4. If the product requires a best before date, the form should include a field for it, and the selected date should be included in the request to the API endpoint on submission.

## Requirements

MUST:
- Be dockerized and runnable with a single command.
- Have the ability to scan barcodes, returning a GTIN.
- Send this GTIN to an endpoint (mock) which returns product data.
- Open this product data in a form, allowing the user to change data (except the GTIN) before submitting it to an endpoint in the backend.

SHOULD:
- Be covered with tests.
- Be documented.

NICE TO HAVE:
- A small evidence of the applicant's backend capabilities.

## Getting Started

If you need a mock server, you can use the provided `db.json` file and `json-server` to create a ready-to-use mock server:
```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

There's a file under `src/BarcodeScanner.tsx` which contains a barcode scanner component. You can use it as a starting point for your barcode scanner.

## Bonus Task

Set up your own mock server with endpoints that provide and accept product data. You can use the `db.json` file in this directory as a starting point for your mock server. 

## Submission

Please submit your solution as a Git repository (you can use GitHub, GitLab, or Bitbucket) and share the repository link with us. Make sure the repository is public or accessible by the reviewers.

Good luck and have fun!

The SPRK Team

## Hints

1. You can use a library like [QuaggaJS](https://github.com/ericblade/quagga2) for barcode scanning.
2. You can use the website [barcode.tec-it.com](https://barcode.tec-it.com/de/EAN13?data=978020137962) to generate barcodes for testing.
3. Refer to the [docker docs](https://docs.docker.com/language/nodejs/) for support with dockerizing a Node.js application.
4. Refer to the [Next.js docs](https://nextjs.org/docs) for support with building a Next.js application.
