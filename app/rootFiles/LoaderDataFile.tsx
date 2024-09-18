import { json } from "@remix-run/node";
import {
  getBanner,
  getBlog,
  getChannels,
  getcourse,
  getDomains,
  getImages,
  getMenu,
  getpaid,
  getStories,
  getUser,
  getVideos,
} from "~/api.server";

export async function LoaderDataFile() {
  try {
    // Wrap each API call in its own try-catch block
    let userData,
      channelResponse,
      menuResponse,
      videosResponse,
      blogResponse,
      bannerResponse,
      paidResponse,
      courseResponse,
      imagesResponse,
      domainResponse,
      storyResponse;

    // User API
    try {
      userData = await getUser();
    } catch (error) {
      console.error("Error fetching user data:");
      throw new Error("Failed to load user data");
    }

    // Channels API
    try {
      channelResponse = await getChannels();
    } catch (error) {
      console.error("Error fetching channels data:");
      throw new Error("Failed to load channels data");
    }

    // Menu API
    try {
      menuResponse = await getMenu();
    } catch (error) {
      console.error("Error fetching menu data:");
      throw new Error("Failed to load menu data");
    }

    // Videos API
    try {
      videosResponse = await getVideos();
    } catch (error) {
      console.error("Error fetching videos data:");
      throw new Error("Failed to load videos data");
    }

    // Blog API
    try {
      blogResponse = await getBlog();
    } catch (error) {
      console.error("Error fetching blog data:");
      throw new Error("Failed to load blog data");
    }

    // Banner API
    try {
      bannerResponse = await getBanner();
    } catch (error) {
      console.error("Error fetching banner data:");
      throw new Error("Failed to load banner data");
    }

    // Paid API
    try {
      paidResponse = await getpaid();
    } catch (error) {
      console.error("Error fetching paid data:");
      throw new Error("Failed to load paid data");
    }

    // Course API
    try {
      courseResponse = await getcourse();
    } catch (error) {
      console.error("Error fetching course data:");
      throw new Error("Failed to load course data");
    }

    // Images API
    try {
      imagesResponse = await getImages();
    } catch (error) {
      console.error("Error fetching images data:");
      throw new Error("Failed to load images data");
    }
    // Domain API
    try {
      domainResponse = await getDomains();
    } catch (error) {
      console.error("Error fetching Domain data:");
      throw new Error("Failed to load Domain data");
    }

    // Stories API
    try {
      storyResponse = await getStories();
    } catch (error) {
      console.error("Error fetching Stories data:");
      throw new Error("Failed to load Stories data");
    }

    // Log successful data fetch

    const menuData = menuResponse?.data?.data;
    const channelData = channelResponse?.data?.data;
    const videosData = videosResponse?.data?.data;
    const blogData = blogResponse?.data?.data;
    const bannerData = bannerResponse?.data?.data;
    const paidData = paidResponse?.data?.data;
    const courseData = courseResponse?.data?.data;
    const imagesData = imagesResponse?.data?.data;
    const domainData = domainResponse?.data;
    const storyData = storyResponse?.data?.data;

    // Log successful data fetch

    const ENV = {
      APIENDPOINT: process.env.APIENDPOINT || "default endpoint",
      GOOGLEKEY: process.env.GOOGLEKEY || "default-key",
      DEVELOPMENT: process.env.NODE_ENV || "development",
    };

    return json({
      userData,
      channelData,
      menuData,
      videosData,
      blogData,
      bannerData,
      paidData,
      courseData,
      imagesData,
      domainData,
      storyData,
      ENV,
    });
  } catch (error) {
    console.error("LoaderDataFile error:");
    throw new Response("Failed to load data", { status: 500 });
  }
}
