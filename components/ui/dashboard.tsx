import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Carousel from './carousel';
import RisingClouds from "/public/rising-clouds.jpg"
import RecentCard from './Cards/recentCard';
import MostViewCard from './Cards/mostViewCard';
import TrendingCard from './Cards/trendingCard';
import PlaylistCard from './Cards/playlistCard';
import CategoryCard from './Cards/categoryCard';
import CategorySampleCard from './Cards/categorySampleCard';


export const messages = [
    {
        "kind": "youtube#searchResult",
        "etag": "2PokmHcjdd5JoOvcpTcd1W4Kw2g",
        "id": {
            "kind": "youtube#video",
            "videoId": "TzibvFwhlFY"
        },
        "snippet": {
            "publishedAt": "2021-09-23T19:00:08Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "GOD WANTS YOU TO PROSPER PART 2B BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TzibvFwhlFY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TzibvFwhlFY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TzibvFwhlFY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-09-23T19:00:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "A2YGAijNJDOZR_8IKcBssA5lK0A",
        "id": {
            "kind": "youtube#video",
            "videoId": "LEjFzTaMPXU"
        },
        "snippet": {
            "publishedAt": "2021-09-20T19:00:05Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "GOD WANTS YOU TO PROSPER PART 2A BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-09-20T19:00:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "PJyMhzOqJQPAjZYI5B5XF36GSOg",
        "id": {
            "kind": "youtube#video",
            "videoId": "E4VtuRJ75E0"
        },
        "snippet": {
            "publishedAt": "2021-09-16T19:00:10Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "GOD WANTS YOU TO PROSPER PART 1B BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-09-16T19:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ch6hnfgrLEtZ1vJLUclyK0G8LOg",
        "id": {
            "kind": "youtube#video",
            "videoId": "fphWzkJGX6Y"
        },
        "snippet": {
            "publishedAt": "2021-09-13T19:00:11Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "GOD WANTS YOU TO PROSPER PART 1A BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-09-13T19:00:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "uyeBucyybM72QCJ5t66JVBRfxa4",
        "id": {
            "kind": "youtube#video",
            "videoId": "bNqGLSo8Q1Q"
        },
        "snippet": {
            "publishedAt": "2021-08-05T19:00:09Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "YOU HAVE FAITH B BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-05T19:00:09Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dGK-x7CLPgYiYCSkcnU8mjGlKMA",
        "id": {
            "kind": "youtube#video",
            "videoId": "oiVDNCvXnbs"
        },
        "snippet": {
            "publishedAt": "2021-08-02T09:32:53Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "The Blessings - Pastor Oti - Annual Seed Sowing 2021",
            "description": "' ... Believe in the Lord your God, so shall ye be established; believe his prophets, so shall ye prosper.' - 2 Chronicles 20:20 KJV ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-02T09:32:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "H9cxrUX2MTFdzjANQwz6mXVix_g",
        "id": {
            "kind": "youtube#video",
            "videoId": "oArnTcVxkMQ"
        },
        "snippet": {
            "publishedAt": "2021-07-30T19:00:11Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "SEED SOWING CONFERENCE (TALK SHOW)",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-30T19:00:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Gb1lJPklhy40CTKRu7Q2EHdQZf4",
        "id": {
            "kind": "youtube#video",
            "videoId": "Jgoj_X56UQA"
        },
        "snippet": {
            "publishedAt": "2021-07-13T19:00:10Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "YOU HAVE FAITH A BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-13T19:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "qCHjjzuGHGY-Zc3WghJiyyozvjA",
        "id": {
            "kind": "youtube#video",
            "videoId": "2gqW-TlQHMQ"
        },
        "snippet": {
            "publishedAt": "2021-07-08T19:00:03Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "GROWING IN LOVE B BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-08T19:00:03Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "JGbILVi5_XQybVNbiUUGme4nzmE",
        "id": {
            "kind": "youtube#video",
            "videoId": "Q-ApiPRRhac"
        },
        "snippet": {
            "publishedAt": "2021-07-05T19:00:15Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "GROWING IN LOVE A BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-05T19:00:15Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "g7-FuvTC80VN1UuMhfZv5AaXDTE",
        "id": {
            "kind": "youtube#video",
            "videoId": "PfBpMF3B41k"
        },
        "snippet": {
            "publishedAt": "2021-07-01T19:00:07Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "THE GRACE OF GOD BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PfBpMF3B41k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PfBpMF3B41k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PfBpMF3B41k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-01T19:00:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "WIVf1R3nkQSRFSL8r4oU-b5fZkc",
        "id": {
            "kind": "youtube#video",
            "videoId": "1FTZMB6tTqU"
        },
        "snippet": {
            "publishedAt": "2021-06-28T19:00:00Z",
            "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
            "title": "CHOOSING YOUR LIFE PARTNER PART 2B BY PASTOR OTI",
            "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bishop Isaac Oti-Boateng",
            "liveBroadcastContent": "none",
            "publishTime": "2021-06-28T19:00:00Z"
        }
    }
]



const Dashboard = () => {
    return (
        <div className='relative w-full px-4 '>
            <div className='  grid grid-cols-6 gap-8 '>
                <div className=' overflow-auto  col-span-6  md:col-span-4  space-y-6  '>
                    <Carousel />
                    {/* Recent Uploads */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Recent Uploads</div>
                        {/* List */}
                        <div className='flex flex-row overflow-auto space-x-10'>
                            {/* Card */}
                            {messages.map(item => <RecentCard
                                key={item.snippet.title}
                                image={item.snippet.thumbnails.high.url}
                                name={item.snippet.title}
                                url={item.id.videoId}
                            />
                            )}


                        </div>
                    </div>
                    {/* Cateogories */}
                    <div className=' md:hidden flex-col space-y-4'>
                        <div className='text-white text-xs'>Browse by Category</div>
                        {/* List */}
                        <div className='flex flex-row overflow-auto space-x-6'>
                            {/* Card */}
                            <CategoryCard />
                            <CategorySampleCard />


                        </div>

                    </div>


                    {/* Most Viewed */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Most Viewed</div>
                        {/* List */}
                        <div className='flex flex-row overflow-auto space-x-12'>
                            {/* Card */}
                            <MostViewCard />
                            <MostViewCard />
                            <MostViewCard />
                            <MostViewCard />


                        </div>

                    </div>



                </div>



                <div className=' hidden  md:col-span-2  md:flex flex-col overflow-auto space-y-4 px-10'>
                    <div className='text-white text-xs'>Number #1 Trending</div>
                    <TrendingCard />

                    {/* Tags */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-xs text-white'>Tags</div>
                        <div className='flex flex-wrap text-white text-xs space-x-4 '>

                            <button className='bg-pink-500 p-2 rounded-full px-2 shadow-md my-1'>Peace</button>
                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Love</button>
                            <button className='bg-red-500 p-2 rounded-full px-2 shadow-md  my-1'>Compassion</button>
                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Righteousness</button>
                            <button className='bg-red-500 p-2 rounded-full px-2 shadow-md  my-1'>Healing</button>
                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Hope</button>
                        </div>


                    </div>

                    {/* PlayList */}
                    <div className='space-y-4'>
                        <div className='text-white text-xs '>Popular Playlist</div>
                        <div className='flex flex-col space-y-4 h-96 overflow-auto'>
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />


                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Dashboard;