import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';
import Sidebar from './Sidebar';

const CreateATicket = () => {
    const [title, setTitle] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addReview({ variables: { reviewText } });
            // Clear form after submission
            setTitle('');
            setReviewText('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Sidebar />
            <div>
                <h2>Create a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="reviewText">Review:</label>
                        <textarea
                            id="reviewText"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Review'}
                    </button>
                </form>
                {error && <p>You must be logged in to create a review: {error.message}</p>}
                {data && <p>Review submitted successfully!</p>}
            </div>
        </>
    );
};

export default CreateATicket;
