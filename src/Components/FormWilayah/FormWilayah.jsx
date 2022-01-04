import React, { useState } from "react";

function FormWilayah(props) {
  const [urlTarget, setUrl] = useState("");
  const URL = `http://www.emsifa.com/api-wilayah-indonesia/api/${urlTarget}.json`;
  
  const formKosong = {
      alamat:"",
    provinsi: {
      id: "",
      name: "",
    },
    kabupaten: {
      id: "",
      name: "",
    },
    kecamatan: {
      id: "",
      name: "",
    },
    kelurahan: {
      id: "",
      name: "",
    },
  };

    //   let formKosong = {
    //     alamat: "",
    //     // kelurahan: "",
    //     // kecamatan: "",
    //     // kabupaten: "",
    //     // provinsi: "",
    //   };
  let errKosong = {
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
  };
  const [formData, setFormData] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(errKosong);

  const handleValidation = (name, value) => {
    if (name === "provinsi" && value !== "") {
      setErrMsg({ ...errMsg, provinsi: "" });
    }

    if (name === "kabupaten" && formData.provinsi.name === "") {
      alert("silakan pilih provinsi terlebih dahulu");
    } else if (name === "kabupaten" && value !== "") {
      setErrMsg({ ...errMsg, kabupaten: "" });
    }

    //validasi kecamatan
    if (name === "kecamatan" && formData.kabupaten.name === "") {
      alert("silakan pilih kabupaten terlebih dahulu");
    } else if (name === "kecamatan" && value !== "") {
      setErrMsg({ ...errMsg, kecamatan: "" });
    }

    //validasi kelurahan
    if (name === "kelurahan" && formData.kecamatan.name === "") {
      alert("silakan pilih kecamatan terlebih dahulu");
    } else if (name === "kelurahan" && value !== "") {
      setErrMsg({ ...errMsg, kelurahan: "" });
    }
  };

  const handleInputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    handleValidation(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form">
      <div className="mb-3">
        <label className="form-label">Alamat KTP *</label>
        <input
          placeholder="Masukkan Alamat KTP"
          name="alamat"
          type="text"
          value={formData.alamat}
          onChange={handleInputData}
          onBlur={handleValidation}
          className="form-control"
        />
        <p className="form-text text-danger">{errMsg.alamat}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Kelurahan/Desa *</label>
        <input
          placeholder="Masukkan Kelurahan/Desa"
          name="kelurahan"
          value={formData.kelurahan}
          onChange={handleInputData}
          onBlur={handleValidation}
          type="text"
          className="form-control"
        />
        <p className="form-text text-danger">{errMsg.kelurahan}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Kecamatan *</label>
        <input
          placeholder="Masukkan Kecamatan"
          type="text"
          value={formData.kecamatan}
          onChange={handleInputData}
          onBlur={handleValidation}
          name="kecamatan"
          className="form-control"
        />
        <p className="form-text text-danger">{errMsg.kecamatan}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Kabupaten/Kota *</label>
        <input
          placeholder="Masukkan Kabupaten/Kota"
          type="text"
          value={formData.kabupaten}
          onChange={handleInputData}
          onBlur={handleValidation}
          name="kabupaten"
          className="form-control"
        />
        <p className="form-text text-danger">{errMsg.kabupaten}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Provinsi *</label>
        <input
          placeholder="Masukkan Kabupaten/Kota"
          type="text"
          value={formData.provinsi}
          onChange={handleInputData}
          onBlur={handleValidation}
          name="provinsi"
          className="form-control"
        />
        <p className="form-text text-danger">{errMsg.provinsi}</p>
      </div>
    </div>
  );
}

export default FormWilayah;
