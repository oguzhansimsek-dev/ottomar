//* node_modules
import { useParams } from "react-router-dom";

//*Components
import PageTitle from "../../components/PageTitle";

const Gallery = () => {
  let params = useParams();

  function selectTitle(type) {
    let title = "";
    const titles = [
      { param: "fotograf-galerisi", title: "Fotoğraf Galerisi" },
      { param: "video-galerisi", title: "Video Galerisi" },
    ];

    titles.forEach((element) => {
      if (element.param === type) {
        title = element.title;
      }
    });

    return title;
  }

  return (
    <section>
      <PageTitle title={selectTitle(params.galleryType)} />
    </section>
  );
};

export default Gallery;
