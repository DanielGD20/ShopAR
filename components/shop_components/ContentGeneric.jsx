import CardComponent from "../general_components/CardComponent";
import BiggerCardComponent from "../general_components/BiggerCardComponent";

const fakeData = [1, 2, 3, 4];

const ContentGeneric = () => {
  return (
    <>
      <BiggerCardComponent
        imageUrl="https://source.unsplash.com/vZJdYl5JVXY/660x360"
        title="Bigger component title"
        description="bigger component description"
      />
      <div className="row">
        {fakeData.map((item) => {
          return (
            <CardComponent
              imageUrl="https://source.unsplash.com/random"
              imageAlt="Al"
              title="Element 1"
              description="Element 1 description"
            />
          );
        })}
      </div>
    </>
  );
};

export default ContentGeneric;
