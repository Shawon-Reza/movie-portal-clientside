import { Link } from "react-router-dom";
import { useState } from "react";

const AddMovies = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);

    // Handle genre selection
    const handleGenreChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedGenres(selectedOptions);
    };

    const handleAddMovieData = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const movieData = {
            poster: formData.get("poster"),
            title: formData.get("title"),
            genre: selectedGenres, // Use state instead of raw input value
            duration: Number(formData.get("duration")),
            year: Number(formData.get("year")),
            rating: Number(formData.get("rating")),
            summary: formData.get("summary"),
            email: formData.get("email"),
        };

        console.log(movieData);
    };

    return (
        <div>
            <Link to={'/'}>
                <button className="btn shadow-2xl">Back</button>
            </Link>
            <div className="hero bg-base-200 min-h-screen -my-10">
                <div className="hero-content w-full max-w-6xl lg:flex-row-reverse flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Movie</h1>
                        <p className="py-6">
                            Add your favorite movies to the list with details.
                        </p>
                    </div>

                    {/* Movie Form */}
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleAddMovieData}>
                                <div className="flex justify-between gap-5">
                                    {/* Left Side Inputs */}
                                    <div className="w-full">
                                        <div className="form-control w-full">
                                            <label className="label">Movie Poster</label>
                                            <input type="text" name="poster" className="input input-bordered w-full" placeholder="Enter movie poster URL" />
                                        </div>

                                        <div className="form-control w-full">
                                            <label className="label">Movie Title</label>
                                            <input type="text" name="title" className="input input-bordered w-full" placeholder="Enter movie title" />
                                        </div>

                                        {/* Selected Genres List */}
                                        <div className="form-control w-full">
                                            <label className="label">Selected Genres</label>
                                            <div className="p-3 border rounded-lg min-h-[40px] bg-gray-100">
                                                {selectedGenres.length > 0 ? (
                                                    selectedGenres.map((genre, index) => (
                                                        <span key={index} className="badge badge-primary m-1">{genre}</span>
                                                    ))
                                                ) : (
                                                    <span className="text-gray-500">No genre selected</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Genre Selection */}
                                        <div className="form-control w-full">
                                            <label className="label">Genre</label>
                                            <select
                                                name="genre"
                                                className="select select-bordered w-full h-40"
                                                multiple
                                                onChange={handleGenreChange}
                                            >
                                                <option value="comedy">Comedy</option>
                                                <option value="drama">Drama</option>
                                                <option value="horror">Horror</option>
                                                <option value="action">Action</option>
                                                <option value="sci-fi">Sci-Fi</option>
                                                <option value="romance">Romance</option>
                                                <option value="thriller">Thriller</option>
                                            </select>
                                        </div>

                                        <div className="form-control w-full">
                                            <label className="label">Duration (minutes)</label>
                                            <input type="number" name="duration" className="input input-bordered w-full" placeholder="Enter movie duration" />
                                        </div>
                                    </div>

                                    {/* Right Side Inputs */}
                                    <div className="w-full">
                                        <div className="form-control w-full">
                                            <label className="label">Release Year</label>
                                            <input type="number" name="year" className="input input-bordered w-full" placeholder="Enter release year" />
                                        </div>

                                        <div className="form-control w-full">
                                            <label className="label">Rating (out of 10)</label>
                                            <input type="number" name="rating" className="input input-bordered w-full" placeholder="Enter movie rating" />
                                        </div>

                                        <div className="form-control w-full">
                                            <label className="label">Movie Summary</label>
                                            <textarea name="summary" className="textarea textarea-bordered w-full min-h-[150px]" placeholder="Enter movie summary"></textarea>
                                        </div>

                                        <div className="form-control w-full">
                                            <label className="label">User Email</label>
                                            <input type="email" name="email" className="input input-bordered w-full" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary mt-4 w-full">Add Movie</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMovies;
