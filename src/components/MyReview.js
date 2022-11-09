import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <section className="bg-gradient-to-r from-black to-green-900 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/9btzhBd/barber.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-3@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Brice Swyre</div>
                          <div className="text-sm opacity-50">China</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Carroll Group
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Tax Accountant
                      </span>
                    </td>
                    <td>Red</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-4@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Marjy Ferencz</div>
                          <div className="text-sm opacity-50">Russia</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Rowe-Schoen
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Office Assistant I
                      </span>
                    </td>
                    <td>Crimson</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-5@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Yancy Tear</div>
                          <div className="text-sm opacity-50">Brazil</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Wyman-Ledner
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Community Outreach Specialist
                      </span>
                    </td>
                    <td>Indigo</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReview;
