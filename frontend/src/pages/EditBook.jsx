import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import {useSnackbar} from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:5500/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check Console.");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5500/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Updated Successfully", {variant: 'success'})
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar(error, {variant: 'error'})
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-bold text-center">Edit Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-blue-400 rounded-xl w-full md:w-[600px] p-4 mx-auto">
        <div className="my-4 flex items-center">
          <label htmlFor="title" className="text-xl mr-4  w-32">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 flex-grow"
          />
        </div>
        <div className="my-4 flex items-center">
          <label htmlFor="author" className="text-xl mr-4  w-32">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 flex-grow"
          />
        </div>
        <div className="my-4 flex items-center">
          <label htmlFor="publishYear" className="text-xl mr-4 w-32">
            Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 flex-grow"
          />
        </div>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleEditBook}
        >
        Edit
        </button>
      </div>
    </div>
  );
};

export default EditBook;
