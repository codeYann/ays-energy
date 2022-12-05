import React, { useState, useEffect } from 'react';
import image from '../../util/main-image.jpg';
import MainPost from './main-post';
import GridPost from './cells-post';
import BiggerPost from './bigger-post';
import FeedPost from './feed-post';
import './style.css';

const mock = [
  {
    image_link:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTryJKDv32ypy__rrGh-hvP3gWrZZsqBNYijruXP2afMQ5_vvKA',
    date: '12 de dezembro de 2022',
    title: 'Primeiro post',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
  {
    image_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSHoSY-EcSE6XkBeb_fkc9feuewfY3pw7VA00XEHz8kyBeABF',
    date: '12 de agosto de 2019',
    title: 'Post celula 1',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
  {
    image_link:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc4fnD8HZD-2PivvjK8lMaoiTF9m8b6bs0GSEPKZ7OxmmbEhFO',
    date: '14 de janeiro de 2020',
    title: 'Post celula 2',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
  {
    image_link:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyIh7zjeh6LPtFGmXm7WYRimOI5-dDdCYMZyT8Kd-l3lNHiPj-',
    date: '14 de janeiro de 2020',
    title: 'Post celula 3',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
  {
    image_link:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSm-Az1AtBNkVT7pTWWBBZqcDSM40BAG380yF9U1is9LdkB1B6r',
    date: '14 de janeiro de 2020',
    title: 'Post grande',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
  {
    image_link:
      'https://static.poder360.com.br/2022/05/energia-renovaval-eolica-848x477.jpeg',
    date: '14 de janeiro de 2020',
    title: 'Feed 1',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
  {
    image_link:
      'https://ciclovivo.com.br/wp-content/uploads/2017/11/iStock-618453942.jpg',
    date: '14 de janeiro de 2020',
    title: 'Feed 2',
    content:
      'Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.',
  },
];

export default function HomeContent() {
  const [posts, setPosts] = useState(mock);

  async function getPosts() {
    const response = await fetch('');

    const data = await response.json();

    console.log(response);
    console.log(data);

    setPosts();
  }

  useEffect(() => {
    getPosts();
  }, []);

  let [seeMore, setChangeText] = useState(false);
  const handleChange = () => {
    return setChangeText(!seeMore);
  };

  return (
    <div className="home-screen">
      <div className="initial-content">
        <div className="message">
          <h1>
            AYS <br />
            Energy
          </h1>
          <p>
            Produzindo energia <br />
            limpa
          </p>
        </div>
        <img src={image} alt="Imagem globo" />
      </div>

      <div className="initial-post">
        <MainPost post={posts[0]} />
      </div>

      <div className="cells-post">
        <GridPost post={posts.slice(1, 4)} />
      </div>

      <div className="last-post">
        <BiggerPost post={posts[4]} />
      </div>

      {seeMore && (
        <div className="feed-post">
          <FeedPost posts={posts.slice(5)} />
        </div>
      )}

      {!seeMore && (
        <button onClick={() => handleChange()}>
          See More <i class="fa-solid fa-circle-arrow-down"></i>
        </button>
      )}
    </div>
  );
}
