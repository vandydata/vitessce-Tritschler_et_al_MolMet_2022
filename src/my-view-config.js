export const myViewConfig = {
    "name": "PanKbase scRNA-Seq - Vitessce OMICS vieweer",
    "version": "1.0.15",
    "description": "",
    "datasets": [
          {
              "uid": "A", 
              "name": "Tritschler et al, Mol Met 2023", 
              "files": [
                  {
                      "fileType": "anndata.zarr", 
                      "url": "https://cds-pancreatlas-public.s3.amazonaws.com/Tritschler_et_al_MolMet_2022_human_islets.zarr/", 
                      "options": {
                          "obsEmbedding": [
                              {
                                  "path": "obsm/X_umap", 
                                  "dims": [0, 1], 
                                  "embeddingType": "UMAP"
                              }, 
                              {
                                  "path": "obsm/X_pca", 
                                  "dims": [0, 1],
                                  "embeddingType": "PCA"
                              }
                          ], 
                          "obsSets": [
                              {
                                  "name": "CellType", 
                                  "path": "obs/cell_type"
                              },
                              {
                                "name": "Disease Status", 
                                "path": "obs/disease"
                              },
                              {
                                "name": "Sex", 
                                "path": "obs/sex"
                              },
                              {
                                "name": "Ethnicity", 
                                "path": "obs/self_reported_ethnicity"
                              },
                              {
                                "name": "BMI", 
                                "path": "obs/BMI"
                              }
                            
                          ],
                          "obsFeatureMatrix": {
                              "path": "X"
                          }
                      }
                  }
              ]
          }
      ], 
      "coordinationSpace": {
        "dataset": {"A": "A"}, 
        "embeddingType": {"A": "UMAP", "B": "PCA"}
    },
      "layout": [
        {
              "component": "scatterplot", 
              "coordinationScopes": {
                  "dataset": "A", 
                  "embeddingType": "A"
              }, 
              "x": 0.0, 
              "y": 0.0, 
              "w": 8.0, 
              "h": 8.0
          }, 
          {
              "component": "obsSets", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 8.0, 
              "y": 0.0, 
              "w": 4.0, 
              "h": 4.0
          }, 
          {
              "component": "featureList", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 8.0, 
              "y": 4.0, 
              "w": 4.0, 
              "h": 4.0
          }, 
          {
              "component": "obsSetFeatureValueDistribution", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 6.0, 
              "y": 8.0, 
              "w": 6.0, 
              "h": 4.0
          }, 
          {
              "component": "obsSetSizes", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 0.0, 
              "y": 8.0, 
              "w": 6.0, 
              "h": 4.0
          }
      ], 
      "initStrategy": "auto"
  }         
