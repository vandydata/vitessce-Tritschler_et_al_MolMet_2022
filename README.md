# Vitessce OMICS Viewer

Working repo and Github pages build for the VITESSCE OMICS Viewer, leveraging objects storage in AWS S3.

## Prior to using this repo

1. Prepare single cell data, via Pancreatlas (gitlab) project's `data/omics/` scripts
2. `10-convert-rds-to-h5a.R` to convert RDS to H5AD
3. `11-convert-h5a-to-zarr.py` to convert H5AD to Zarr
4. Upload Zarr to S3 bucket

## How to use this repo

1. Fork this repo into a new repo
2. Clone new repo
3. Edit `src/my-view-config.js` to point to appropriate S3 bucket and object params
4. Edit `public/index.html` page TITLE and DESCRIPTION
5. For local testing, open terminal:
    ```bash
    cd src
    npm start
    ```
6. Open browser to `http://localhost:3000`
7. Edit and test as needed
8. Pushing to repo will use GH actions to build the React app
