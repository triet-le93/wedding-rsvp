interface MapContainerProps {
  placeId: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ placeId }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GGM_API_KEY}&q=place_id:${placeId}`;

  return (
    <div className="aspect-square overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        src={mapSrc}
      />
    </div>
  );
}

export default MapContainer;
