from rest_framework import serializers
from .models import ImageGallery, Post, Category


class ImageGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageGallery
        fields = ['id', 'image']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'parent', 'slug']

class PostSerializer(serializers.HyperlinkedModelSerializer):
    images = ImageGallerySerializer(source='imagegallery_set', many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Post
        read_only_fields = (
            'published_at',
        )
        fields = (
            'id',
            'title',
            'description',
            'creation_date',
            'category',
            'images',
        )