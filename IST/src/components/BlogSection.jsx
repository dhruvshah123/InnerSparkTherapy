/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Plus, Edit, Trash2, ThumbsUp, BookOpen,X } from "lucide-react";
import { Input } from "./ui/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "./ui/Dialog";
import { axiosInstance } from "../axiosInstance.js";
import { toast } from "react-hot-toast";

export default function BlogSection() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [adminAction, setAdminAction] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    content: "",
    fullContent: "",
    readTime: "",
  });

  const [editingBlog, setEditingBlog] = useState(null);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, [pagination.currentPage]);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get(`/users/blogs?page=${pagination.currentPage}`);
      setBlogs(response.data.data.blogs);
      setPagination({
        currentPage: response.data.data.pagination.currentPage,
        totalPages: response.data.data.pagination.totalPages,
      });
    } catch (error) {
      toast.error("Failed to fetch blogs",error);
    }
  };

  const handlePasswordSubmit = () => {

      if (password === "Manav123@") {
      setIsPasswordCorrect(true);
      toast.success("Admin access granted");
    } else {
      toast.error("Incorrect password!");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleAddBlog = async () => {
    if (!isPasswordCorrect) return;

    try {
      setLoading(true);

      if (!selectedImage) {
        toast.error("Please select an image");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedImage);
      Object.keys(newBlog).forEach((key) => {
        formData.append(key, newBlog[key]);
      });

      await axiosInstance.post("/users/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setNewBlog({
        title: "",
        author: "",
        content: "",
        fullContent: "",
        readTime: "",
      });
      setSelectedImage(null);
      fetchBlogs();
      setAdminAction(null);
      toast.success("Blog added successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding blog");
    } finally {
      setLoading(false);
    }
  };

  const handleEditBlog = async () => {
    if (!isPasswordCorrect) return;

    try {
      setLoading(true);

      const formData = new FormData();
      Object.keys(editingBlog).forEach((key) => {
        if (key !== 'imageUrl') {
          formData.append(key, editingBlog[key]);
        }
      });

      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      await axiosInstance.put(`/users/blogs/${editingBlog._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchBlogs();
      setEditingBlog(null);
      setSelectedImage(null);
      setAdminAction(null);
      toast.success("Blog updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating blog");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async () => {
    if (!isPasswordCorrect || !blogToDelete) return;

    try {
      await axiosInstance.delete(`/users/blogs/${blogToDelete._id}`);
      fetchBlogs();
      setSelectedBlog(null);
      setBlogToDelete(null);
      setAdminAction(null);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting blog");
    }
  };

  const handleLikeBlog = async (id) => {
    try {
      await axiosInstance.post(`/users/blogs/${id}/like`);
      fetchBlogs();
      toast.success("Blog liked!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error liking blog");
    }
  };

  const renderDeleteConfirmationDialog = () => {
    return (
      <Dialog 
        open={adminAction === 'delete'} 
        onOpenChange={() => {
          setAdminAction(null);
          setBlogToDelete(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Blog</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Select a blog to delete:</p>
            {blogs.map(blog => (
              <div 
                key={blog._id} 
                className="flex justify-between items-center p-2 border rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => setBlogToDelete(blog)}
              >
                <span>{blog.title}</span>
                <img src={blog.imageUrl} alt={blog.title} className="w-16 h-16 object-cover rounded" />
              </div>
            ))}
            
            {blogToDelete && (
              <div className="mt-4 text-center">
                <p>Are you sure you want to delete: <strong>{blogToDelete.title}</strong>?</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button 
                    variant="destructive" 
                    onClick={handleDeleteBlog}
                    className='text-black bg-teal-600'
                  >
                    Confirm Delete
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setBlogToDelete(null)}
                    className='text-black bg-teal-600'
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const renderBlogDialog = () => {
    const currentBlog = editingBlog || newBlog;
    const isEditing = !!editingBlog;

    return (
      <Dialog 
        open={adminAction === 'add' || !!editingBlog} 
        onOpenChange={() => {
          setEditingBlog(null);
          setAdminAction(null);
          setNewBlog({
            title: "",
            author: "",
            content: "",
            fullContent: "",
            readTime: "",
          });
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Blog" : "Add New Blog"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Title"
              value={currentBlog.title}
              onChange={(e) => 
                isEditing 
                  ? setEditingBlog({...editingBlog, title: e.target.value})
                  : setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
            <Input
              placeholder="Author"
              value={currentBlog.author}
              onChange={(e) => 
                isEditing 
                  ? setEditingBlog({...editingBlog, author: e.target.value})
                  : setNewBlog({ ...newBlog, author: e.target.value })
              }
            />
            <Input
              placeholder="Read Time (e.g., 4 min read)"
              value={currentBlog.readTime}
              onChange={(e) => 
                isEditing 
                  ? setEditingBlog({...editingBlog, readTime: e.target.value})
                  : setNewBlog({ ...newBlog, readTime: e.target.value })
              }
            />
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Short content preview..."
              value={currentBlog.content}
              onChange={(e) => 
                isEditing 
                  ? setEditingBlog({...editingBlog, content: e.target.value})
                  : setNewBlog({ ...newBlog, content: e.target.value })
              }
            />
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Full content..."
              value={currentBlog.fullContent}
              onChange={(e) => 
                isEditing 
                  ? setEditingBlog({...editingBlog, fullContent: e.target.value})
                  : setNewBlog({ ...newBlog, fullContent: e.target.value })
              }
            />
            <Input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
            <Button 
              onClick={isEditing ? handleEditBlog : handleAddBlog} 
              className="bg-green-600" 
              disabled={loading}
            >
              {loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Blog" : "Add Blog")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const renderPasswordDialog = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-teal-600 hover:bg-teal-700 flex items-center">
            <Plus className="mr-2" size={18} />Admin
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handlePasswordSubmit} className='bg-black'>
              Submit Password
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const renderAdminActionSelection = () => {
    return (
      <Dialog 
        open={isPasswordCorrect} 
        onOpenChange={() => {
          setIsPasswordCorrect(false);
          setAdminAction(null);
          setPassword("");
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => setAdminAction('add')} 
              className="bg-green-600 hover:bg-green-700 flex items-center"
            >
              <Plus className="mr-2" size={18} /> Add Blog
            </Button>
            <Button 
              onClick={() => setAdminAction('delete')} 
              className="bg-red-600 hover:bg-red-700 flex items-center"
            >
              <Trash2 className="mr-2" size={18} /> Delete Blog
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const renderFullBlogModal = () => {
    if (!selectedBlog) return null;

    return (
      <Dialog 
  open={!!selectedBlog} 
  onOpenChange={() => setSelectedBlog(null)}
>
  <DialogContent className="max-w-4xl">
    <DialogHeader>
      <DialogTitle className="text-3xl font-bold text-gray-800">
        {selectedBlog.title}
      </DialogTitle>
      <DialogClose asChild>
        <Button 
          variant="ghost" 
          className="absolute top-2 right-4  bg-teal-600"
          onClick={() => setSelectedBlog(null)}
        >
          <X size={24} />
        </Button>
      </DialogClose>
    </DialogHeader>
    
    <div className="space-y-6">
      <img 
        src={selectedBlog.imageUrl} 
        alt={selectedBlog.title} 
        className="w-full max-h-[500px] object-cover rounded-xl"
      />
      
      <div className="flex justify-between items-center text-gray-600">
        <div>
          <span className="font-semibold">By {selectedBlog.author}</span>
          <span className="ml-4">{selectedBlog.readTime}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => handleLikeBlog(selectedBlog._id)}
            className="flex items-center text-black bg-teal-600"
          >
            <ThumbsUp className="mr-2" size={16} />
            {selectedBlog.likes}
          </Button>
        </div>
      </div>

      <div 
        className="prose max-w-none prose-lg text-gray-800" 
        dangerouslySetInnerHTML={{__html: selectedBlog.fullContent}}
      />
    </div>
  </DialogContent>
</Dialog>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 pt-24">
        <div className="flex justify-end mb-6">
          {!isPasswordCorrect ? renderPasswordDialog() : renderAdminActionSelection()}
        </div>

        {renderFullBlogModal()}
        {renderBlogDialog()}
        {renderDeleteConfirmationDialog()}

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div 
              key={blog._id} 
              onClick={() => setSelectedBlog(blog)}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mb-2">By {blog.author} • {blog.readTime}</p>
                <p className="text-gray-500 mb-4">{blog.content}</p>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeBlog(blog._id);
                    }}
                    className="flex items-center text-black bg-teal-600"
                  >
                    <ThumbsUp className="mr-2 " size={24} />
                    {blog.likes}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
   </div>
  );
};
        