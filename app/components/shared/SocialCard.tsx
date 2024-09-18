import SocialMediaWithLink from "./SocialMediaWithLink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialCard = ({ channel }: any) => {
  return (
    <div
      id="contact"
      key={channel?.id}
      className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div id="contact-body">
        <img
          id="contact-background"
          src={
            "https://retro-blog-image.s3.ap-south-1.amazonaws.com/socialback.jpeg"
          }
          alt=""
        />
        <img id="contact-pp" src={channel?.imageUrl} alt="" />

        <span id="contact-name">{channel?.channelName}</span>
        <span id="contact-desc">Follow For More Update</span>

        <div id="contact-social">
          <div className="socials">
            <div id="contact-social">
              <div className="icons">
                <div className="grid grid-cols-5 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6">
                  {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {channel?.links?.map((item: any) => (
                    <SocialMediaWithLink
                      key={item?.link}
                      socialName={item?.socialMediaName.toLocaleLowerCase()}
                      link={item?.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
