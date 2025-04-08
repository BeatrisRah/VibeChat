import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function CreateChatroom() {
    const {register, handleSubmit, watch, formState:{errors}} = useForm()

    const imageUrl = watch("imageUrl");

    const chatroomMutation = useMutation({
        mutationFn: (data) => null,
        onSuccess: (data) => console.log('Success!', data),
        onError: (error) => console.log('Error', error.message)
        
    })
    const onSubmit = (data) => {
        chatroomMutation.mutate(data)
    };

    return (
        <div className="max-w-xl mx-auto my-25 p-6 bg-base-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Create a New Chatroom</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Chatroom Name */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Chatroom Name</span>
                    </label>
                    <input
                        type="text"
                        {...register('title', { required: "Please give a title" })}
                        placeholder="e.g. Anime Fans, Study Zone..."
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Image URL</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://example.com/cover.jpg"
                        {...register("imageUrl", {
                        pattern: {
                            value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
                            message: "Please enter a valid image URL",
                        },
                        required: "Please choose a category" 
                        })}
                        className="input input-bordered w-full"
                    />
                    {errors.imageUrl && <p className="text-error text-sm mt-1">{errors.imageUrl.message}</p>}

                    {/* Preview */}
                    {imageUrl && /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(imageUrl) && (
                        <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-1">Preview:</p>
                        <img
                            src={imageUrl}
                            alt="Chatroom Preview"
                            className="rounded-md max-h-56 object-cover border border-base-300"
                        />
                        </div>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Description</span>
                    </label>
                    <textarea
                        name="description"
                        {...register('description', { required: "Please provide a description" })}
                        className="textarea textarea-bordered w-full"
                        placeholder="What's this chatroom about?"
                        rows="3"
                    ></textarea>
                </div>

                {/* Category */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Category</span>
                    </label>
                    <select
                        name="category"
                        {...register('category', { required: "Please choose a category" })}
                        className="select select-bordered w-full"
                        
                    >
                        <option disabled value="">Pick a category</option>
                        <option>Music</option>
                        <option>Gaming</option>
                        <option>Study</option>
                        <option>Casual</option>
                        <option>Custom</option>
                    </select>
                    {errors.category && <p className="text-error text-sm mt-1">{errors.category.message}</p>}
                </div>

                {/* Privacy */}
                <div>
                    <label className="label mb-3">
                        <span className="label-text font-semibold">Privacy (Coming Soon)</span>
                    </label>
                    <div className="flex items-center gap-4">
                        <label className="label cursor-pointer">
                            <input
                                type="radio"
                                // value="public"
                                // checked={formData.privacy === "public"}
                                // onChange={handleChange}
                                disabled
                                className="radio checked:bg-purple-700"
                            />
                            <span className="label-text ml-2">Public</span>
                        </label>
                        <label className="label cursor-pointer">
                            <input
                                type="radio"
                                // value="private"
                                // checked={formData.privacy === "private"}
                                // onChange={handleChange}
                                disabled
                                className="radio checked:bg-purple-700"
                            />
                            <span className="label-text ml-2">Private</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-purple-700 hover:bg-purple-800"
                        disabled={chatroomMutation.isPending}
                    >
                        Create Chatroom
                    </button>
                </div>
            </form>
        </div>
    );
};