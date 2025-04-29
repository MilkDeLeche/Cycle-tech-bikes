import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption: string;
  thumbnail_url?: string;
}

const Gallery: React.FC = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Replace with your Instagram access token
        const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&access_token=${accessToken}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        // Filter to only show images
        const imagePosts = data.data.filter((post: InstagramPost) => 
          post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'
        );
        setInstagramPosts(imagePosts);
      } catch (err) {
        setError('Failed to load Instagram gallery. Please try again later.');
        console.error('Error fetching Instagram posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Nuestra Galería</h1>
          <p className="text-noir-600 mb-12 max-w-2xl">
            Síguenos en Instagram y descubre nuestras últimas creaciones y aventuras.
          </p>
          
          {loading && (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-noir-900"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 py-8">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instagramPosts.map((post) => (
                <a 
                  key={post.id} 
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-noir-50 aspect-square mb-4">
                    <img 
                      src={post.media_url} 
                      alt={post.caption || 'Publicación de Instagram de Matamoros Cycling Shop'} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="600"
                      height="600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {post.caption && (
                    <p className="text-sm text-noir-600 line-clamp-2">{post.caption}</p>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery; 