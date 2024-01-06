import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5500/books/${id}`)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4 font-bold text-center">Book Detail</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-grey-500 font-semibold w-32">Id:</span>
              <span>{books._id}</span>
            </div>
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-grey-500 font-semibold w-32">Title:</span>
              <span>{books.title}</span>
            </div>
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-grey-500 font-semibold w-32">Author:</span>
              <span>{books.author}</span>
            </div>
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-grey-500 font-semibold w-32">Publish Year:</span>
              <span>{books.publishYear}</span>
            </div>
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-grey-500 font-semibold w-32">Create Time:</span>
              <span>{new Date(books.createdAt).toString()}</span>
            </div>
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-grey-500 font-semibold w-32">Last Updated:</span>
              <span>{new Date(books.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
