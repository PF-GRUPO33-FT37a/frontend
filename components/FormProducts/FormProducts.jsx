'use client'

import { useFormik } from "formik"
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import axios from "axios";

export default function FormProducts (){

    const [images, setImages] = useState([]);
    const [sizeValue, setSizeValue] = useState([]);
    const [colorValue, setColorValue] = useState([])

    const sizeValueValidationSchema = Yup.array().min(1, 'Size is required');
    const colorValueValidationSchema = Yup.array().min(1, 'Color is required');
  
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').min(4),
        category: Yup.string().required('Category is required').min(4),
        color: Yup.string().required('Color is required'),
        gender: Yup.string().required('Gender is required'),
        season: Yup.string().required('Season is required'),
        stock: Yup.number().integer('Stock must be an integer').positive('Stock must be a positive number'),
        brand: Yup.string().required('Brand is required'),
        price: Yup.number().positive('Price must be a positive number'),
        articleCode:Yup.string().required('articleCode is required'),
      });

    const formik = useFormik({
        initialValues: {
          name: '',
          category: '',
          gender: '',
          size: 0,
          color: '',
          season: '',
          stock: 0,
          brand: '',
          price: 0,
          articleCode:""
        },
        validationSchema: validationSchema,
        validate: (values) => {
            const errors = {};
        
            if (sizeValue.length === 0) {
              errors.sizeValue = 'Size is required';
            }
            return errors;
          },
        onSubmit: (values) => { 
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("category", values.category);
            formData.append("gender", values.gender);
            sizeValue.forEach((value) => {
                formData.append("size", value);
              });
            formData.append("color", values.color);
            formData.append("season", values.season);
            formData.append("stock", values.stock);
            formData.append("brand", values.brand);
            formData.append("articleCode", values.articleCode);
            formData.append("price", values.price);
            images.forEach((file) => {
              formData.append("images", file);
            });
            axios.post("http://localhost:3001/products", formData)
            .then((response)=>{
                alert("product created");
                console.log(response.data);
                formik.setValues(formik.initialValues);
                setImages([])
            })
            .catch((error) => {
                console.log(error);
                alert("error");
              });
        },
      });

      useEffect(() => {
        formik.validateForm();
      }, [formik.values]);
    useEffect(()=>{
        console.log({color:colorValue,size:sizeValue})
    },[sizeValue,colorValue])
      const handleChange = (event) => {
        formik.handleChange(event); 
      };
      const handleClick = (event) =>{
        setSizeValue([...sizeValue,formik.values.size])
        formik.setFieldValue('size', '');
        console.log(size)
      }
      const handleClickColor = (event) =>{
        setColorValue([...colorValue,formik.values.color])
        formik.setFieldValue('color', '');
        console.log(color)
      }
      function handleImage(files) {
        const selectFiles = Array.from(files).slice(0, 3);
        setImages(selectFiles);
      }
      const handleBlur = (event) => {
        formik.handleBlur(event); 
      };
    
      return (
        <div className="flex flex-col gap-y-[3rem] justify-items-center w-[100%] pl-[24rem]">
            <h1 className="text-4xl font-bold text-black">Add your products</h1>
            <form onSubmit={formik.handleSubmit} className=" border-gray-300 rounded-md p-[0.5] flex flex-col gap-y-[3rem] justify-items-center w-[100%]">
            <div>
                <label htmlFor="name" className="flex flex-col gap-y-[0.4rem]">Name: </label>
                <input type="text" id="name" placeholder="eje: Martin" onChange={handleChange} value={formik.values.name} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180] w-[30rem]" />
                {formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) }
            </div>
            <div>
                <label htmlFor="category" className="flex flex-col gap-y-[0.4rem]">Category: </label>
                <input type="text" id="category" placeholder="eje: Shoe" onChange={handleChange} value={formik.values.category} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180] w-[30rem]"/>
                {formik.errors.category &&(
                <div className="text-red-500 text-sm">{formik.errors.category}</div>
                )}
            </div>
            <div>
                <label htmlFor="gender" className="flex flex-col gap-y-[0.4rem]">Geder: </label>
                <select id="gender" onChange={handleChange} onBlur={handleBlur} value={formik.values.gender}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="child">Child</option>
                </select>
                {formik.errors.gender && (
                <div className="text-red-500 text-sm">{formik.errors.gender}</div>
                )}
            </div>
            <div>
                <label htmlFor="size" className="flex flex-col gap-y-[0.4rem]">Size: </label>
                <input type="number" id="size" placeholder="eje: 42" onChange={handleChange} value={formik.values.size} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180]"/>
                <button onClick={handleClick} className="font-semibold text-[1rem] py-[0.4rem] px-[2rem] bg-black text-white rounded-[1rem] w-[10%] mx-[auto] shadow-md shadow-[#11111180]">Add</button>
                {formik.errors.sizeValue && (
                <div className="text-red-500 text-sm">{formik.errors.sizeValue}</div>
                )}
            </div>
            <div>
                <label htmlFor="color" className="flex flex-col gap-y-[0.4rem]">Color: </label>
                <input type="text" id="color" placeholder="eje: Red" onChange={handleChange} value={formik.values.color} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180]"/>
                {formik.errors.color && (
                <div className="text-red-500 text-sm">{formik.errors.color}</div>
                )}
            </div>
            <div>
                <label htmlFor="season" className="flex flex-col gap-y-[0.4rem]">Season: </label>
                <select id="season" onChange={handleChange} onBlur={handleBlur} value={formik.values.season}>
                    <option value="">Select</option>
                    <option value="spring">Spring </option>
                    <option value="summer">Summer </option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter </option>
                </select>
                {formik.errors.season && (
                <div className="text-red-500 text-sm">{formik.errors.season}</div>
                )}
            </div>
            <div>
                <label htmlFor="images" className="flex flex-col gap-y-[0.4rem]">Images:</label>
                <input type="file" multiple id="images" placeholder="Choose Images" onChange={(e) => handleImage(e.target.files)} className="font-semibold text-[1rem] py-[0.4rem] px-[2rem] bg-black text-white rounded-[1rem] w-[22%] mx-[auto] shadow-md shadow-[#11111180]"/>
            </div> 
            <div>
                <label htmlFor="stock" className="flex flex-col gap-y-[0.4rem]">Stock: </label>
                <input type="number" id="stock" placeholder="eje: 42" onChange={handleChange} value={formik.values.stock} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180]"/>
                {formik.errors.stock && (
                <div className="text-red-500 text-sm">{formik.errors.stock}</div>
                )}
            </div>
            <div>
                <label htmlFor="brand" className="flex flex-col gap-y-[0.4rem]">Brand: </label>
                <input type="text" id="brand" placeholder="eje: Nike" onChange={handleChange} value={formik.values.brand} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180]  w-[30rem]"/>
                {formik.errors.brand && (
                <div className="text-red-500 text-sm">{formik.errors.brand}</div>
                )}
            </div>
            <div>
                <label htmlFor="price">Price: $</label>
                <input type="number" id="price" placeholder="eje: 500" onChange={handleChange} value={formik.values.price} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180]"/>
                {formik.errors.price && (
                <div className="text-red-500 text-sm">{formik.errors.price}</div>
                )}
            </div>
            <div>
                <label htmlFor="articleCode">Aticle Code</label>
                <input type="text" id="articleCode" placeholder="eje: 500" onChange={handleChange} value={formik.values.articleCode} onBlur={handleBlur} className="py-[0.6rem] px-[1rem] rounded-[1rem] shadow-md shadow-[#11111180]"/>
                {formik.errors.articleCode && (
                <div className="text-red-500 text-sm">{formik.errors.articleCode}</div>
                )}
            </div>
            {formik.isValid && (
          <button type="submit" className="font-semibold text-[1rem] py-[0.4rem] px-[2rem] bg-black text-white rounded-[1rem] w-[50%] mx-[auto] shadow-md shadow-[#11111180]">Submit</button>
        )}
        </form>
    </div>
    )
}