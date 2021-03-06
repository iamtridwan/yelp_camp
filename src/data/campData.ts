import mount from "../assets/compressed/mountulap.jpg";
import calagus from "../assets/compressed/calaguasisland.jpg";
import latik from "../assets/compressed/latikriverside.jpg";
import onay from "../assets/compressed/onaybeach.jpg";
import seven from "../assets/compressed/sevensisterswaterfall.jpg";
import buloy from "../assets/compressed/buloysprings.jpg";
import { ICamp, IReview } from "../models";


const campData: ICamp[] = [
  {
    img: mount,
    title: "Mount Ulap",
    desc: "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    subBy: "Andrew Mike",
    cost: "$104.99/night",
    reviews: [
      {
        name: "Adams Jones",
        comment:
          "Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing",
        time: "13h ago",
      },
      {
        name: "Isaac Dylan",
        comment:
          "Travelling changes you as a person, you gain more perspective, this is the perfect spot to do that",
        time: "1 day ago",
      },
      {
        name: "Hudson Luca",
        comment:
          "Definitely recommend going there, not too far and not a lot of people to ruin the experince.",
        time: "3 days ago",
      },
    ],
  },
  {
    img: calagus,
    title: "Calaguas Islands",
    desc: "A paradise of islands that can rival the white sand beauty of Boracay.",
    subBy: "",
    cost: "",
    reviews: [],
  },

  {
    img: onay,
    title: "Onay Beach",
    desc: "This is one of the best camping sites, beautiful and pristine",
    subBy: "",
    cost: "",
    reviews: [],
  },
  {
    img: seven,
    title: "Seven Sisters Waterfall",
    desc: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    subBy: "",
    cost: "",
    reviews: [],
  },
  {
    img: latik,
    title: "Latik Riverside",
    desc: "Phillipines is one of the most dazzling countries in all of Asia",
    subBy: "",
    cost: "",
    reviews: [],
  },
  {
    img: buloy,
    title: "Buloy Springs",
    desc: "This is one of the best beach camping sites, beautifull and pristine",
    subBy: "",
    cost: "",
    reviews: [],
  },
];
// getting all camp data
export const getCampData = (): ICamp[] => {
  return campData;
};
// getting a single campground data
export const getACamp = (campName?: string): ICamp => {
  let camp = campData.filter((camp) => camp.title === campName);
  return camp[0];
};

// adding a review for particular campground data
export const addReview = (name: string, newReview: IReview) => {
  campData.forEach((camp) => {
    if (camp.title === name) {
      camp.reviews?.push(newReview);
    }
  });
};

// adding a new camp ground to list of campgrounds
export const addCamp = (data: any) => {
  campData.push({
    ...data,
    cost: `$${data.cost}`,
    img: data.img[0]["name"],
    reviews: [],
  });
};
