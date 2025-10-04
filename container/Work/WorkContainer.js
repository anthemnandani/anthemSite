"use client";

import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import WorkItemTwo from "../../components/Work/WorkItemTwo";
import WorkFilter from "../../components/Work/WorkFilter";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import Loader from "../Loader/Loader";
import { useParams } from "next/navigation"; // ✅ Next.js hook

const WorkContainer = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [visibleData, setVisibleData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchProjects = async () => {
        try {
          setLoading(true);
          const allProjects = await getProjects();
          setProjects(allProjects);

          let filtered = allProjects;

          if (slug) {
            const slugTerms = slug
              .toLowerCase()
              .replace(/\.js/gi, "-js")
              .replace(/[\s_]+/g, "-**")
              .split("-");

            filtered = allProjects.filter((project) =>
              slugTerms.some(
                (term) =>
                  project.projectName.toLowerCase().includes(term) ||
                  project.projectCategory.toLowerCase().includes(term) ||
                  project.technolgies.toLowerCase().includes(term) ||
                  project.description.toLowerCase().includes(term) ||
                  project.projectSubCategory.toLowerCase().includes(term) ||
                  project.smallDesciption.toLowerCase().includes(term)
              )
            );
          }

          setFilterProjects(filtered);

          const categoryMap = filtered.reduce((acc, project) => {
            const { projectCategory } = project;
            if (!acc[projectCategory]) acc[projectCategory] = [];
            acc[projectCategory].push(project);
            return acc;
          }, {});
          setCategories(Object.keys(categoryMap));
          setCategoryMap(categoryMap);

          setVisibleData(filtered.slice(0, itemsToShow));
          setHasMore(filtered.length > itemsToShow);
        } catch (error) {
          console.error("Error fetching projects:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }
  }, [token, slug, itemsToShow]);

  const handleProjectWithCategory = useCallback(
    (category) => {
      const filteredProjects =
        category === "All" ? projects : categoryMap[category] || [];
      setFilterProjects(filteredProjects);
      setVisibleData(filteredProjects.slice(0, itemsToShow));
      setHasMore(filteredProjects.length > itemsToShow);
    },
    [categoryMap, projects, itemsToShow]
  );

  const loadMoreData = () => {
    if (visibleData.length >= filterProjects.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleData((prev) =>
        filterProjects.slice(0, prev.length + 3)
      );
    }, 500);
  };

  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle
          headingOption="title fz-32"
          title="Crafting Effective Digital Marketing, Web Development, <br> Video Content and Communication Design"
        />

        <div className="row align-items-center">
          <div className="col-lg-5">
            <SectionTitleTwo
              subTitle={`Portfolio ${
                slug ? `<span class='fw-bold'>(${toTitleCase(slug)})</span>` : ""
              }`}
              title="Our Work"
            />
          </div>
          <div className="col-lg-7" data-aos="fade-up">
            <WorkFilter
              categories={categories}
              handleProjectWithCategory={handleProjectWithCategory}
            />
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <InfiniteScroll
            dataLength={visibleData.length}
            next={loadMoreData}
            hasMore={hasMore}
            loader={
              <div className="d-flex justify-content-center w-100">
                <BeatLoader color="#0a507a" />
              </div>
            }
            endMessage={
              <div className="d-flex justify-content-center w-100">
                <p className="text-primary fw-bold">
                  You have reached the end of this section.
                </p>
              </div>
            }
          >
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6">
              {visibleData.map((single, index) => (
                <div key={index} className="col mb-6" data-aos="fade-up">
                  <WorkItemTwo classOption="box-border" data={single} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default WorkContainer;
