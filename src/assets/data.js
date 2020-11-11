import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { RiGameLine } from "react-icons/ri";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
export const navbar = [
  {
    id: 1,
    url: "/",
    text: "Über Fromis",
  },
  {
    id: 2,
    url: "/disco",
    text: "discography",
  },
  {
    id: 3,
    url: "/social",
    text: "social media",
  },
];

export const hero = [
  {
    heroImg:
      "https://dbkpop.com/wp-content/uploads/2020/09/fromis_9_my_little_society_concept_all_group_2-1536x1064.jpg",
    text: "Fromis 9",
    desc: "Eine 9-köpfige Mädchengruppe aus Südkorea",
    button: "Erfahre mehr",
  },
];

export const aboutus = [
  {
    id: 1,
    icon: <BsMusicNoteBeamed></BsMusicNoteBeamed>,
    text: "Sie machen Musik",
  },
  {
    id: 2,
    icon: <BiMovie></BiMovie>,
    text: "Es gibt Musikvideos",
  },
  {
    id: 3,
    icon: <RiGameLine></RiGameLine>,
    text: "talentiert etc",
  },
];

export const aboutPic =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/190611_%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4%EB%82%98%EC%9D%B8%28fromis_9%29_tbs_%ED%8C%A9%ED%8A%B8%EC%9D%B8%EC%8A%A4%ED%83%80_%282%29.png/1280px-190611_%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4%EB%82%98%EC%9D%B8%28fromis_9%29_tbs_%ED%8C%A9%ED%8A%B8%EC%9D%B8%EC%8A%A4%ED%83%80_%282%29.png";

export const accordion = [
  { id: 1, year: 2018, song: "Love Bomb", album: "From.9" },
  { id: 2, year: 2019, song: "Fun", album: "Fun Factory" },
  { id: 3, year: 20208, song: "Feel Good", album: "My Little Society" },
];

export const discography = [
  {
    id: "my-little-society",
    title: "My Little Society",
    img:
      "https://dbkpop.com/wp-content/uploads/2020/09/fromis_9_my_little_society_concept_all_group_2-1536x1064.jpg",
  },
  {
    id: "fun-factory",
    title: "Fun Factory",
    img:
      "https://dbkpop.com/wp-content/uploads/2019/06/fromis_9_fun_factory_all.jpg",
  },
  { id: "from-9", title: "From.9", img: "https://i.imgur.com/1l7TMWv.jpg" },
];

export const MovieState = [
  {
    title: "My Little Society",
    mainImg:
      "https://dbkpop.com/wp-content/uploads/2020/09/fromis_9_my_little_society_concept_all_group_2-1536x1064.jpg",
    secondaryImg:
      "https://kpopping.com/uploads/documents/c1/2/kpics_gallery/32,2886,29.jpeg.keep.fff.png.pagespeed.ce.8uV5FVxahP.png",
    url: "/work/my-little-society",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
  {
    title: "Fun Factory",
    mainImg:
      "https://dbkpop.com/wp-content/uploads/2019/06/fromis_9_fun_factory_all.jpg",
    url: "/work/fun-factory",
    secondaryImg:
      "https://dbkpop.com/wp-content/uploads/2019/06/fromis_9_fun_mv_shooting_all.jpg",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
  {
    title: "From.9",
    mainImg: "https://i.imgur.com/1l7TMWv.jpg",
    url: "/work/from-9",
    secondaryImg:
      "https://images-na.ssl-images-amazon.com/images/I/61c6RvwFJwL._SX522_.jpg",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
];

export const social = [
  {
    id: 1,
    icon: <FaYoutube></FaYoutube>,
    url: "https://www.youtube.com/channel/UC8qO5racajmy4YgPgNJkVXg",
    titel: "Fromis_9 Youtube Channel",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: "https://twitter.com/realfromis_9",
    titel: "Fromis_9 Twitter Page",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/officialfromis_9/",
    titel: "Fromis_9 Instagram Page",
  },
];
