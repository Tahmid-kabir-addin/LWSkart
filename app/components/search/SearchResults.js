"use client";
import Loader from "@/app/components/loading";
import Products from "@/app/components/shop/Products";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResults({ query }) {
  const q = useSearchParams();
  console.log("🚀 ~ SearchResults ~ q:", q);
  const router = useRouter();
  const pathname = usePathname();
  // const [category, setCategory] = useState(query.entries.category || "");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bedRoomQty, setBedRoomQty] = useState(0);
  const [sofaQty, setSofaQty] = useState(0);
  const [outdoorQty, setOutdoorQty] = useState(0);
  const [livingRoomQty, setLivingRoomQty] = useState(0);
  const [mattressQty, setMattressQty] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      console.log("hello from useeffect");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search?q=${q}`
      );
      const data = await res.json();
      console.log("🚀 ~ fetchFilteredProducts ~ data:", data);
      setPageNumber(Math.ceil(data.length / 12));
      // set all the qty by category
      setBedRoomQty(
        data.filter((item) => item.category === "Bedroom Accessories").length
      );
      setSofaQty(data.filter((item) => item.category === "Sofa").length);
      setOutdoorQty(data.filter((item) => item.category === "Outdoor").length);
      setLivingRoomQty(
        data.filter((item) => item.category === "Living Room Accessories")
          .length
      );
      setMattressQty(
        data.filter((item) => item.category === "Mattress").length
      );
      const start = (currentPage - 1) * 12;
      const end = Math.min(start + 12, data.length);
      setProducts(data.slice(start, end));
      setLoading(false);
    };

    fetchFilteredProducts();
  }, [q, currentPage]);

  const handleFilterChange = (type, value = "") => {
    setLoading(true);
    const current = new URLSearchParams(q.toString());
    current.delete("page");
    setCurrentPage(1);

    if (type === "resetAll") {
      current.delete("category");
      current.delete("minPrice");
      current.delete("maxPrice");
      current.delete("size");

      // reset all the checkboxes
      const checkboxes = document.querySelectorAll("input[type=checkbox]");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      // reset all the prices
      const prices = document.querySelectorAll("input[type=text]");
      prices.forEach((price) => {
        price.value = "";
      });
    }
    if (type === "category" && current.has("category")) {
      const category = current.get("category").split(",");
      if (category.includes(value)) {
        const index = category.indexOf(value);
        category.splice(index, 1);
        // if category is empty, remove the category key from the query
        if (category.length === 0) {
          current.delete("category");
        } else {
          current.set("category", category.join(","));
        }
      } else {
        current.set("category", `${current.get("category")},${value}`);
      }
      setLoading(false);
    } else if (type === "category") {
      current.set("category", value);
    }

    if (type === "resetPrice") {
      current.delete("minPrice");
      current.delete("maxPrice");
    }

    if (type === "price") {
      if (minPrice) {
        current.set("minPrice", minPrice);
      }
      if (maxPrice) {
        current.set("maxPrice", maxPrice);
      }
    } else if (type === "size" && current.has("size")) {
      const size = current.get("size").split(",");
      if (size.includes(value)) {
        const index = size.indexOf(value);
        size.splice(index, 1);
        // if size is empty, remove the size key from the query
        if (size.length === 0) {
          current.delete("size");
        } else {
          current.set("size", size.join(","));
        }
      } else {
        current.set("size", `${current.get("size")},${value}`);
      }
    } else if (type === "size") {
      current.set("size", value);
    }
    window.history.pushState(null, "", `?${current.toString()}`);
  };

  const handlePageChange = (page) => {
    const current = new URLSearchParams(q.toString());
    if (page === 1) {
      current.delete("page");
    } else {
      current.set("page", page);
    }
    setCurrentPage(page);
    window.history.pushState(null, "", `?${current.toString()}`);
  };

  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href="/" className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>

      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <div className="text-center md:hidden">
          <button
            className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <Image
              placeholder="blur"
              blurDataURL="/assets/images/blurImage.jpg"
              src="/assets/images/icons/bars.svg"
              width={24}
              height={24}
              alt="bars"
            />
          </button>
        </div>
        <div
          id="drawer-example"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-label"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            Info
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="bedroom"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="sofa"
                    id="cat-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Sofa
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="office"
                    id="cat-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(21)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="outdoor"
                    id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Outdoor
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="minPrice"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                  onChange={(e) =>
                    handleFilterChange("minPrice", e.target.value)
                  }
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="maxPrice"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                  onChange={(e) =>
                    handleFilterChange("maxPrice", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    value="XS"
                    id="size-xs"
                    className="hidden"
                    onChange={(e) => handleFilterChange("size", e.target.value)}
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    value="S"
                    id="size-sm"
                    className="hidden"
                    onChange={(e) => handleFilterChange("size", e.target.value)}
                  />
                  <label
                    htmlFor="size-sm"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    value="M"
                    id="size-m"
                    className="hidden"
                    onChange={(e) => handleFilterChange("size", e.target.value)}
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    value="L"
                    id="size-l"
                    className="hidden"
                    onChange={(e) => handleFilterChange("size", e.target.value)}
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    value="XL"
                    id="size-xl"
                    className="hidden"
                    onChange={(e) => handleFilterChange("size", e.target.value)}
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="Bedroom Accessories"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">
                    ({bedRoomQty})
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="Sofa"
                    id="cat-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Sofa
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">
                    ({sofaQty})
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="Mattress"
                    id="cat-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Mattress
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">
                    ({mattressQty})
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="Outdoor"
                    id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Outdoor
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">
                    ({outdoorQty})
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value="Living Room Accessories"
                    id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Living Room
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">
                    ({livingRoomQty})
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="minPrice"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="maxPrice"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-between">
                <button
                  className="text-white bg-primary hover:bg-white hover:text-primary hover:outline focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 focus:outline-none"
                  onClick={() => handleFilterChange("price")}
                >
                  Apply
                </button>
                <button
                  className="text-white bg-primary hover:bg-white hover:text-primary hover:outline focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 focus:outline-none"
                  onClick={() => handleFilterChange("resetPrice")}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Size
              </h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="category"
                  value="XS"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                <label
                  htmlFor="cat-1"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  XS
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="category"
                  value="S"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                <label
                  htmlFor="cat-1"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  S
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="category"
                  value="M"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                <label
                  htmlFor="cat-1"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  M
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="category"
                  value="L"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                <label
                  htmlFor="cat-1"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  L
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="category"
                  value="XL"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                <label
                  htmlFor="cat-1"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="text-xl mt-5">
            <button
              className="text-white bg-primary hover:bg-white hover:text-primary hover:outline focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 focus:outline-none"
              onClick={() => handleFilterChange("resetAll")}
            >
              Reset Filter
            </button>
          </div>
        </div>
        <div className="col-span-3">
          {!loading ? (
            <Products products={products} />
          ) : (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          )}
          {pageNumber > 1 && (
            <div className="inline-flex -space-x-px text-base h-10 mt-4">
              <button
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: pageNumber }, (_, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
                    currentPage === index + 1 ? "bg-gray-300" : "bg-white"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageNumber}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
