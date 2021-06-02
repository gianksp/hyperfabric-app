import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import BannerImage from "assets/images/banners/banner-two/cryptik-banner-two-thumb.svg";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import {FaGithub} from 'react-icons/fa'

import keyIcon from 'assets/images/banners/banner-two/cryptik-banner-key-icon.svg';
import watchIcon from 'assets/images/banners/banner-two/cryptik-banner-watch-icon.svg';
import heartIcon from 'assets/images/banners/banner-two/cryptik-banner-heart-icon.svg';

import BannerWrapper from "./banner.style";

const BannerTwo = () => {
  return (
    <BannerWrapper>
      <img src={particleTopLeft} className="section__particle top-left" alt="cryptik particles"/>
      <img src={particleUnderLogo} className="section__particle two" alt="cryptik particles"/>
      <img src={prticleTopRight} className="section__particle top-right" alt="cryptik particles"/>
      <img src={particleBottomLeft} className="section__particle bottom-left" alt="cryptik particles"/>
      <img src={particleBottomRight} className="section__particle bottom-right" alt="cryptik particles"/>
      <Container>
       
      <svg className="banner__thumb" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="493.537" height="606.367" viewBox="0 0 493.537 606.367">
          <defs>
            <linearGradient id="linear-gradient" x1="0.412" y1="-0.263" x2="0.691" y2="2.155" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#42e8e0"/>
              <stop offset="0.016" stopColor="#40ddda"/>
              <stop offset="0.092" stopColor="#39aec0"/>
              <stop offset="0.173" stopColor="#3384a8"/>
              <stop offset="0.257" stopColor="#2f6095"/>
              <stop offset="0.346" stopColor="#2b4485"/>
              <stop offset="0.44" stopColor="#272d79"/>
              <stop offset="0.542" stopColor="#251e70"/>
              <stop offset="0.659" stopColor="#24146b"/>
              <stop offset="0.823" stopColor="#24126a"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#c838e7"/>
              <stop offset="0.073" stopColor="#b536e5"/>
              <stop offset="0.305" stopColor="#8032df"/>
              <stop offset="0.521" stopColor="#562eda"/>
              <stop offset="0.716" stopColor="#382cd7"/>
              <stop offset="0.882" stopColor="#252ad5"/>
              <stop offset="1" stopColor="#1f2ad5"/>
            </linearGradient>
            <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#4268db"/>
              <stop offset="1" stopColor="#280d57"/>
            </radialGradient>
            <linearGradient id="linear-gradient-16" x1="0.698" y1="0.045" x2="0.763" y2="1.973" xlinkHref="#linear-gradient-2"/>
            <linearGradient id="linear-gradient-17" x1="-0.076" y1="0.5" x2="0.915" y2="0.5" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#42e8e0"/>
              <stop offset="0.151" stopColor="#42e3df"/>
              <stop offset="0.328" stopColor="#44d4de"/>
              <stop offset="0.52" stopColor="#48bddd"/>
              <stop offset="0.721" stopColor="#4d9bda"/>
              <stop offset="0.927" stopColor="#5471d8"/>
              <stop offset="1" stopColor="#5761d7"/>
            </linearGradient>
            <linearGradient id="linear-gradient-20" x1="-0.076" y1="0.5" x2="0.915" y2="0.5" xlinkHref="#linear-gradient"/>
            <linearGradient id="linear-gradient-21" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-2"/>
            <linearGradient id="linear-gradient-22" x1="0.554" y1="-0.037" x2="0.635" y2="1.463" xlinkHref="#linear-gradient-2"/>
            <clipPath id="clip-path">
              <ellipse id="Ellipse_4139" data-name="Ellipse 4139" cx="185.181" cy="106.914" rx="185.181" ry="106.914" fill="url(#linear-gradient)"/>
            </clipPath>
            <linearGradient id="linear-gradient-24" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#2b237c"/>
              <stop offset="1" stopColor="#180d5b"/>
            </linearGradient>
            <linearGradient id="linear-gradient-25" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#1f2ad5"/>
              <stop offset="1" stopColor="#27b7ff"/>
            </linearGradient>
            <linearGradient id="linear-gradient-26" x1="14.554" y1="-3.785" x2="14.735" y2="-2.339" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#069efc"/>
              <stop offset="1" stopColor="#6df7fb"/>
            </linearGradient>
          </defs>
          <g id="Group_6365" data-name="Group 6365" transform="translate(-65.071 -62.076)">
            <g id="Group_6354" data-name="Group 6354" transform="translate(274.754 62.076)">
              <path id="Path_46862" data-name="Path 46862" d="M291.544,246.929l20.275,11.706v46.823l-20.275-11.706Z" transform="translate(-27.965 139.361)" opacity="0.5" fill="url(#linear-gradient-2)"/>
              <path id="Path_46863" data-name="Path 46863" d="M281.842,252.531l20.275,11.706v23.411l-20.275-11.706Z" transform="translate(-38.538 145.465)" opacity="0.2" fill="url(#linear-gradient-2)"/>
              <path id="Path_46864" data-name="Path 46864" d="M272.139,213.32l20.275,11.706v93.645l-20.275-11.706Z" transform="translate(-49.111 102.736)" opacity="0.7" fill="url(#linear-gradient-2)"/>
              <path id="Path_46865" data-name="Path 46865" d="M262.437,196.515l20.275,11.706V325.277l-20.275-11.706Z" transform="translate(-59.684 84.424)" opacity="0.2" fill="url(#linear-gradient-2)"/>
              <path id="Path_46866" data-name="Path 46866" d="M252.734,202.116l20.275,11.706v93.645l-20.275-11.706Z" transform="translate(-70.257 90.528)" opacity="0.5" fill="url(#linear-gradient-2)"/>
              <path id="Path_46867" data-name="Path 46867" d="M243.032,162.9l20.275,11.706V338.49l-20.275-11.706Z" transform="translate(-80.829 47.799)" opacity="0.2" fill="url(#linear-gradient-2)"/>
              <path id="Path_46868" data-name="Path 46868" d="M233.329,168.506,253.6,180.212V320.68l-20.275-11.706Z" transform="translate(-91.402 53.903)" opacity="0.5" fill="url(#linear-gradient-2)"/>
              <path id="Path_46869" data-name="Path 46869" d="M223.627,174.108,243.9,185.814V302.87l-20.275-11.706Z" transform="translate(-101.975 60.007)" opacity="0.2" fill="url(#linear-gradient-2)"/>
              <path id="Path_46870" data-name="Path 46870" d="M213.924,146.1,234.2,157.806V321.685l-20.275-11.706Z" transform="translate(-112.548 29.486)" opacity="0.5" fill="url(#linear-gradient-2)"/>
              <path id="Path_46871" data-name="Path 46871" d="M204.222,118.092,224.5,129.8V340.5l-20.275-11.706Z" transform="translate(-123.121 -1.034)" opacity="0.2" fill="url(#linear-gradient-2)"/>
              <path id="Path_46872" data-name="Path 46872" d="M194.519,123.693,214.795,135.4v187.29l-20.275-11.706Z" transform="translate(-133.694 5.07)" opacity="0.5" fill="url(#linear-gradient-2)"/>
              <path id="Path_46873" data-name="Path 46873" d="M184.817,95.685l20.275,11.706V341.5L184.817,329.8Z" transform="translate(-144.266 -25.451)" opacity="0.2" fill="url(#linear-gradient-2)"/>
              <path id="Path_46874" data-name="Path 46874" d="M175.115,90.084l20.275,11.706V335.9L175.115,324.2Z" transform="translate(-154.839 -31.555)" opacity="0.5" fill="url(#linear-gradient-2)"/>
              <path id="Path_46875" data-name="Path 46875" d="M165.412,62.076l20.275,11.706V354.716L165.412,343.01Z" transform="translate(-165.412 -62.076)" opacity="0.2" fill="url(#linear-gradient-2)"/>
            </g>
            <g id="Group_6361" data-name="Group 6361" transform="translate(65.071 333.623)">
              <g id="Group_6359" data-name="Group 6359">
                <g id="Group_6358" data-name="Group 6358">
                  <ellipse id="Ellipse_4135" data-name="Ellipse 4135" cx="185.636" cy="107.177" rx="185.636" ry="107.177" transform="translate(23.47 120.465)" opacity="0.4" fill="url(#radial-gradient)"/>
                  <ellipse id="Ellipse_4136" data-name="Ellipse 4136" cx="209.106" cy="120.728" rx="209.106" ry="120.728" transform="translate(0 50.097)" fill="url(#linear-gradient-16)"/>
                  <path id="Path_46876" data-name="Path 46876" d="M483.277,303.809l-5.157-.046c-8.4-21.5-27.093-41.94-56.09-58.681-81.661-47.148-214.061-47.148-295.72,0-27.379,15.807-45.564,34.908-54.583,55.093l-6.56-.056v26.769c-1.628,32.073,18.747,64.449,61.147,88.93,81.661,47.148,214.061,47.148,295.72,0,40.831-23.574,61.245-54.472,61.243-85.369h0Z" transform="translate(-65.066 -172.734)" opacity="0.48" fill="url(#linear-gradient-17)"/>
                  <path id="Path_46877" data-name="Path 46877" d="M483.277,303.809l-5.157-.046c-8.4-21.5-27.093-41.94-56.09-58.681-81.661-47.148-214.061-47.148-295.72,0-27.379,15.807-45.564,34.908-54.583,55.093l-6.56-.056v26.769c-1.628,32.073,18.747,64.449,61.147,88.93,81.661,47.148,214.061,47.148,295.72,0,40.831-23.574,61.245-54.472,61.243-85.369h0Z" transform="translate(-65.066 -172.734)" opacity="0.48" fill="url(#linear-gradient-17)"/>
                  <path id="Path_46878" data-name="Path 46878" d="M483.277,303.809l-5.157-.046c-8.4-21.5-27.093-41.94-56.09-58.681-81.661-47.148-214.061-47.148-295.72,0-27.379,15.807-45.564,34.908-54.583,55.093l-6.56-.056v26.769c-1.628,32.073,18.747,64.449,61.147,88.93,81.661,47.148,214.061,47.148,295.72,0,40.831-23.574,61.245-54.472,61.243-85.369h0Z" transform="translate(-65.066 -172.734)" opacity="0.48" fill="url(#linear-gradient-17)"/>
                  <path id="Path_46879" data-name="Path 46879" d="M483.277,298.858l-5.157-.046c-8.4-21.505-27.093-41.94-56.09-58.681-81.661-47.148-214.061-47.15-295.72,0-27.379,15.807-45.564,34.909-54.583,55.093l-6.56-.059v26.771c-1.628,32.073,18.747,64.449,61.147,88.927,81.661,47.148,214.061,47.15,295.72,0,40.831-23.572,61.245-54.47,61.243-85.369h0Z" transform="translate(-65.066 -178.13)" fill="url(#linear-gradient-20)"/>
                  <path id="Path_46880" data-name="Path 46880" d="M477.327,287.389c-.293-.748-.608-1.492-.926-2.236V267.572H465.445v-1.258a113.512,113.512,0,0,0-9.31-10.935v12.193H449.85V249.279q-4.376-3.965-9.341-7.767v26.061h-6.255v-30.6q-4.479-3.109-9.37-6.081v36.683h-6.225V227.255q-4.6-2.57-9.4-4.951v45.267h-6.2V219.367q-4.636-2.122-9.429-4.075v52.28h-6.167V225.224h-9.458v42.348h-6.137V236.847h-9.489v30.725h-6.108v-19.1h-9.517v19.1h-6.079V260.1h-9.546v7.475H215.715V260.1h-9.548v7.475h-6.079v-19.1h-9.517v19.1h-6.108V236.847h-9.487v30.725h-6.137V225.224h-9.46v42.348h-6.167v-52.32q-4.79,1.947-9.429,4.071v48.249h-6.2V222.259q-4.8,2.37-9.4,4.942v40.371h-6.227V230.829q-4.893,2.962-9.368,6.069v30.675h-6.257V241.434c-3.316,2.537-6.417,5.134-9.341,7.78v18.358H90.711V255.278A113.58,113.58,0,0,0,81.4,266.184v1.388H70.445v16.222l-4.641-.042v44.885a80.355,80.355,0,0,0,9.28,23.81V324.42H81.4v37.552a113.527,113.527,0,0,0,9.312,10.9V324.42h6.284v54.525q4.379,3.959,9.341,7.757V324.42h6.257v66.831q4.482,3.106,9.368,6.077V324.42h6.227v76.521q4.6,2.564,9.4,4.942V324.42h6.2v84.4q4.639,2.122,9.429,4.071V324.42h6.167V415.3q4.67,1.755,9.46,3.352V324.42h6.137v96.2q4.7,1.445,9.487,2.748V324.42h6.108V424.96q4.721,1.175,9.517,2.209V324.42h6.079V428.412q4.746.928,9.548,1.72V324.42h6.048V431.075q4.768.7,9.577,1.264V324.42h6.02V433q4.786.483,9.606.832V324.42h5.989v109.8q4.812.27,9.636.412V324.42h5.96V434.767q4.871.066,9.742,0V324.42h5.962V434.633q4.821-.144,9.634-.414V324.42h5.991V433.827q4.815-.354,9.606-.836V324.42H315.5V432.33q4.808-.567,9.577-1.266V324.42h6.05v105.7q4.8-.793,9.546-1.722V324.42h6.079V427.152q4.8-1.034,9.517-2.211V324.42h6.108v98.929q4.793-1.3,9.489-2.75V324.42h6.137v94.208q4.786-1.6,9.458-3.356V324.42h6.167v88.438q4.793-1.95,9.429-4.075V324.42h6.2v81.425q4.8-2.373,9.4-4.951V324.42h6.225v72.864q4.9-2.968,9.37-6.085V324.42h6.255v62.219q4.965-3.8,9.341-7.765V324.42h6.286v48.387a113.408,113.408,0,0,0,9.31-10.925V324.42h6.315V352.3a80.2,80.2,0,0,0,9.282-24.046V287.422Z" transform="translate(-64.273 -166.706)" fill="url(#linear-gradient-21)"/>
                  <ellipse id="Ellipse_4137" data-name="Ellipse 4137" cx="209.106" cy="120.728" rx="209.106" ry="120.728" fill="url(#linear-gradient-22)"/>
                  <path id="Path_46881" data-name="Path 46881" d="M267.231,192.022c-47.382-.01-94.753,9.236-133.34,27.707L71.511,355.339c10.166,15.593,26.057,30.228,47.792,42.774a237.054,237.054,0,0,0,44.17,19.474Z" transform="translate(-58.054 -192.02)" fill="#6df7fb" opacity="0.3"/>
                  <path id="Path_46882" data-name="Path 46882" d="M249.168,194.336,141.849,427.641a361.259,361.259,0,0,0,78.253,2.1L318.9,214.966C297.645,205.395,273.958,198.5,249.168,194.336Z" transform="translate(18.593 -189.499)" fill="#6df7fb" opacity="0.3"/>
                  <g id="Group_6357" data-name="Group 6357" transform="translate(23.925 13.813)" opacity="0.05">
                    <ellipse id="Ellipse_4138" data-name="Ellipse 4138" cx="185.181" cy="106.914" rx="185.181" ry="106.914" fill="url(#linear-gradient)"/>
                    <g id="Group_6356" data-name="Group 6356" clipPath="url(#clip-path)">
                      <g id="Group_6355" data-name="Group 6355" transform="translate(-147.583 -80.947)">
                        <path id="Path_46883" data-name="Path 46883" d="M7.873,347.3,5.9,346.154l322.61-186.259,1.977,1.141Z" transform="translate(-5.896 -159.895)" fill="#42e8e0"/>
                        <path id="Path_46884" data-name="Path 46884" d="M10.593,348.865l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(-2.933 -158.184)" fill="#42e8e0"/>
                        <path id="Path_46885" data-name="Path 46885" d="M13.313,350.436l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(0.031 -156.472)" fill="#42e8e0"/>
                        <path id="Path_46886" data-name="Path 46886" d="M16.033,352.006l-1.977-1.141,322.61-186.259,1.977,1.142Z" transform="translate(2.995 -154.761)" fill="#42e8e0"/>
                        <path id="Path_46887" data-name="Path 46887" d="M18.753,353.576l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(5.959 -153.05)" fill="#42e8e0"/>
                        <path id="Path_46888" data-name="Path 46888" d="M21.473,355.147,19.5,354.005l322.61-186.259,1.977,1.141Z" transform="translate(8.923 -151.339)" fill="#42e8e0"/>
                        <path id="Path_46889" data-name="Path 46889" d="M24.193,356.717l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(11.887 -149.628)" fill="#42e8e0"/>
                        <path id="Path_46890" data-name="Path 46890" d="M26.913,358.288l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(14.851 -147.916)" fill="#42e8e0"/>
                        <path id="Path_46891" data-name="Path 46891" d="M29.633,359.858l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(17.815 -146.205)" fill="#42e8e0"/>
                        <path id="Path_46892" data-name="Path 46892" d="M32.353,361.428l-1.977-1.142,322.61-186.259,1.977,1.141Z" transform="translate(20.779 -144.494)" fill="#42e8e0"/>
                        <path id="Path_46893" data-name="Path 46893" d="M35.073,363,33.1,361.857,355.705,175.6l1.977,1.141Z" transform="translate(23.742 -142.783)" fill="#42e8e0"/>
                        <path id="Path_46894" data-name="Path 46894" d="M37.792,364.569l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(26.706 -141.072)" fill="#42e8e0"/>
                        <path id="Path_46895" data-name="Path 46895" d="M40.512,366.139,38.535,365l322.61-186.259,1.977,1.142Z" transform="translate(29.67 -139.36)" fill="#42e8e0"/>
                        <path id="Path_46896" data-name="Path 46896" d="M43.232,367.71l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(32.634 -137.649)" fill="#42e8e0"/>
                        <path id="Path_46897" data-name="Path 46897" d="M45.952,369.28l-1.977-1.141L366.585,181.88l1.977,1.141Z" transform="translate(35.598 -135.938)" fill="#42e8e0"/>
                        <path id="Path_46898" data-name="Path 46898" d="M48.672,370.85,46.7,369.709,369.3,183.45l1.977,1.141Z" transform="translate(38.562 -134.227)" fill="#42e8e0"/>
                        <path id="Path_46899" data-name="Path 46899" d="M51.392,372.421l-1.977-1.141L372.025,185.02,374,186.162Z" transform="translate(41.526 -132.516)" fill="#42e8e0"/>
                        <path id="Path_46900" data-name="Path 46900" d="M54.112,373.991l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(44.49 -130.804)" fill="#42e8e0"/>
                        <path id="Path_46901" data-name="Path 46901" d="M56.832,375.561l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(47.454 -129.093)" fill="#42e8e0"/>
                        <path id="Path_46902" data-name="Path 46902" d="M59.552,377.132l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(50.418 -127.382)" fill="#42e8e0"/>
                        <path id="Path_46903" data-name="Path 46903" d="M62.272,378.7l-1.977-1.141L382.9,191.3l1.977,1.141Z" transform="translate(53.382 -125.671)" fill="#42e8e0"/>
                        <path id="Path_46904" data-name="Path 46904" d="M64.992,380.272l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(56.345 -123.959)" fill="#42e8e0"/>
                        <path id="Path_46905" data-name="Path 46905" d="M67.712,381.843,65.735,380.7l322.61-186.259,1.977,1.141Z" transform="translate(59.309 -122.248)" fill="#42e8e0"/>
                        <path id="Path_46906" data-name="Path 46906" d="M70.432,383.413l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(62.273 -120.537)" fill="#42e8e0"/>
                        <path id="Path_46907" data-name="Path 46907" d="M73.151,384.983l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(65.237 -118.826)" fill="#42e8e0"/>
                        <path id="Path_46908" data-name="Path 46908" d="M75.871,386.554l-1.977-1.141L396.5,199.154l1.977,1.141Z" transform="translate(68.201 -117.115)" fill="#42e8e0"/>
                        <path id="Path_46909" data-name="Path 46909" d="M78.591,388.124l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(71.165 -115.403)" fill="#42e8e0"/>
                        <path id="Path_46910" data-name="Path 46910" d="M81.311,389.694l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(74.129 -113.692)" fill="#42e8e0"/>
                        <path id="Path_46911" data-name="Path 46911" d="M84.031,391.265l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(77.093 -111.981)" fill="#42e8e0"/>
                        <path id="Path_46912" data-name="Path 46912" d="M86.751,392.835l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(80.057 -110.27)" fill="#42e8e0"/>
                        <path id="Path_46913" data-name="Path 46913" d="M89.471,394.406l-1.977-1.141L410.1,207.005l1.977,1.141Z" transform="translate(83.021 -108.559)" fill="#42e8e0"/>
                        <path id="Path_46914" data-name="Path 46914" d="M92.191,395.976l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(85.985 -106.847)" fill="#42e8e0"/>
                        <path id="Path_46915" data-name="Path 46915" d="M94.911,397.546,92.934,396.4l322.61-186.259,1.977,1.141Z" transform="translate(88.948 -105.136)" fill="#42e8e0"/>
                        <path id="Path_46916" data-name="Path 46916" d="M97.631,399.116l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(91.912 -103.425)" fill="#42e8e0"/>
                        <path id="Path_46917" data-name="Path 46917" d="M100.351,400.687l-1.977-1.142,322.61-186.259,1.977,1.141Z" transform="translate(94.876 -101.714)" fill="#42e8e0"/>
                        <path id="Path_46918" data-name="Path 46918" d="M103.071,402.257l-1.977-1.141L423.7,214.857,425.68,216Z" transform="translate(97.84 -100.002)" fill="#42e8e0"/>
                        <path id="Path_46919" data-name="Path 46919" d="M105.79,403.827l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(100.804 -98.291)" fill="#42e8e0"/>
                        <path id="Path_46920" data-name="Path 46920" d="M108.51,405.4l-1.977-1.141L429.143,218l1.977,1.142Z" transform="translate(103.768 -96.58)" fill="#42e8e0"/>
                        <path id="Path_46921" data-name="Path 46921" d="M111.23,406.968l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(106.732 -94.869)" fill="#42e8e0"/>
                        <path id="Path_46922" data-name="Path 46922" d="M113.95,408.539l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(109.696 -93.158)" fill="#42e8e0"/>
                        <path id="Path_46923" data-name="Path 46923" d="M116.67,410.109l-1.977-1.141L437.3,222.709l1.977,1.141Z" transform="translate(112.66 -91.446)" fill="#42e8e0"/>
                        <path id="Path_46924" data-name="Path 46924" d="M119.39,411.679l-1.977-1.141,322.61-186.259L442,225.42Z" transform="translate(115.624 -89.735)" fill="#42e8e0"/>
                        <path id="Path_46925" data-name="Path 46925" d="M122.11,413.249l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(118.587 -88.024)" fill="#42e8e0"/>
                        <path id="Path_46926" data-name="Path 46926" d="M124.83,414.82l-1.977-1.142L445.463,227.42l1.977,1.141Z" transform="translate(121.551 -86.313)" fill="#42e8e0"/>
                        <path id="Path_46927" data-name="Path 46927" d="M127.55,416.39l-1.977-1.141L448.182,228.99l1.977,1.141Z" transform="translate(124.515 -84.602)" fill="#42e8e0"/>
                        <path id="Path_46928" data-name="Path 46928" d="M130.27,417.961l-1.977-1.141L450.9,230.56l1.977,1.141Z" transform="translate(127.479 -82.89)" fill="#42e8e0"/>
                        <path id="Path_46929" data-name="Path 46929" d="M132.99,419.531l-1.977-1.141,322.61-186.259,1.977,1.142Z" transform="translate(130.443 -81.179)" fill="#42e8e0"/>
                        <path id="Path_46930" data-name="Path 46930" d="M135.71,421.1l-1.977-1.141L456.342,233.7l1.977,1.141Z" transform="translate(133.407 -79.468)" fill="#42e8e0"/>
                        <path id="Path_46931" data-name="Path 46931" d="M138.429,422.672l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(136.371 -77.757)" fill="#42e8e0"/>
                        <path id="Path_46932" data-name="Path 46932" d="M141.149,424.242l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(139.335 -76.046)" fill="#42e8e0"/>
                        <path id="Path_46933" data-name="Path 46933" d="M143.869,425.812l-1.977-1.141L464.5,238.412l1.977,1.141Z" transform="translate(142.299 -74.334)" fill="#42e8e0"/>
                        <path id="Path_46934" data-name="Path 46934" d="M146.589,427.383l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(145.263 -72.623)" fill="#42e8e0"/>
                        <path id="Path_46935" data-name="Path 46935" d="M149.309,428.953l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(148.227 -70.912)" fill="#42e8e0"/>
                        <path id="Path_46936" data-name="Path 46936" d="M152.029,430.523l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(151.19 -69.201)" fill="#42e8e0"/>
                        <path id="Path_46937" data-name="Path 46937" d="M154.749,432.094l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(154.154 -67.489)" fill="#42e8e0"/>
                        <path id="Path_46938" data-name="Path 46938" d="M157.469,433.664l-1.977-1.141L478.1,246.264l1.977,1.141Z" transform="translate(157.118 -65.778)" fill="#42e8e0"/>
                        <path id="Path_46939" data-name="Path 46939" d="M160.189,435.234l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(160.082 -64.067)" fill="#42e8e0"/>
                        <path id="Path_46940" data-name="Path 46940" d="M162.909,436.8l-1.977-1.141L483.541,249.4l1.977,1.141Z" transform="translate(163.046 -62.356)" fill="#42e8e0"/>
                        <path id="Path_46941" data-name="Path 46941" d="M165.629,438.375l-1.977-1.141,322.61-186.259,1.977,1.141Z" transform="translate(166.01 -60.645)" fill="#42e8e0"/>
                        <path id="Path_46942" data-name="Path 46942" d="M168.349,439.946l-1.977-1.142,322.61-186.259,1.977,1.141Z" transform="translate(168.974 -58.933)" fill="#42e8e0"/>
                        <path id="Path_46943" data-name="Path 46943" d="M171.068,441.516l-1.977-1.141L491.7,254.116l1.977,1.141Z" transform="translate(171.938 -57.222)" fill="#42e8e0"/>
                      </g>
                    </g>
                  </g>
                  <path id="Path_46944" data-name="Path 46944" d="M130.751,237.148c72.316-41.752,189.565-41.75,261.884,0,34.574,19.961,52.606,45.85,54.123,72,1.657-28.549-16.375-57.41-54.123-79.2-72.318-41.754-189.568-41.754-261.884,0C93,251.737,74.974,280.6,76.632,309.145,78.149,283,96.179,257.109,130.751,237.148Z" transform="translate(-52.588 -184.818)" fill="url(#linear-gradient-24)"/>
                </g>
              </g>
              <g id="Group_6360" data-name="Group 6360" transform="translate(101.549 56.72)">
                <path id="Path_46945" data-name="Path 46945" d="M294.219,241.512,113.666,219.164l38.708,104.242,117.557-14.022Z" transform="translate(-113.666 -219.164)" fill="url(#linear-gradient-25)"/>
                <path id="Path_46946" data-name="Path 46946" d="M132.189,308.749l49.4-76.135,68.159,62.113Z" transform="translate(-93.481 -204.507)" fill="#0f054c" opacity="0.4"/>
                <path id="Path_46947" data-name="Path 46947" d="M248.275,229.858l-92.446,5.759,68.159,62.113Z" transform="translate(-67.722 -207.51)" fill="#0f054c" opacity="0.4"/>
                <path id="Path_46948" data-name="Path 46948" d="M294.219,241.512,113.666,219.164l88.106,28.107,68.159,62.113Z" transform="translate(-113.666 -219.164)" fill="#0f054c" opacity="0.4"/>
                <path id="Path_46949" data-name="Path 46949" d="M140.343,316.46l165.98,13.935-24.135-95.829-24.307,52.619Z" transform="translate(-84.596 -202.38)" fill="url(#linear-gradient-26)"/>
                <path id="Path_46950" data-name="Path 46950" d="M196.589,287.185l48.443,43.21L220.9,234.566Z" transform="translate(-23.305 -202.38)" fill="#0f054c" opacity="0.4"/>
              </g>
            </g>
            <g id="Group_6364" data-name="Group 6364" transform="translate(86.61 223.727)">
              <path id="Path_46951" data-name="Path 46951" d="M182.293,219.37c-7.676,0-15.353-1.688-21.2-5.061-5.885-3.4-9.124-7.981-9.124-12.912s3.239-9.517,9.124-12.912c11.688-6.748,30.708-6.748,42.4,0,5.885,3.4,9.124,7.981,9.124,12.912s-3.239,9.516-9.122,12.912h0C197.648,217.681,189.97,219.37,182.293,219.37Zm0-33.651c-7.255,0-14.509,1.594-20.032,4.783-5.132,2.961-7.958,6.831-7.958,10.894s2.825,7.93,7.958,10.892c11.046,6.38,29.02,6.38,40.066,0h0c5.13-2.961,7.956-6.829,7.956-10.892s-2.825-7.933-7.956-10.894C196.8,187.314,189.548,185.719,182.293,185.719Z" transform="translate(8.085 -91.494)" fill="#6df7fb"/>
              <image id="Rectangle_239" data-name="Rectangle 239" width="79.242" height="101.81" transform="translate(76.576 71.911)" xlinkHref="data:image/png;base64,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"/>
              <path id="Path_46952" data-name="Path 46952" d="M188.283,204.612c-6.929,4-18.166,4-25.1,0s-6.929-10.488,0-14.49,18.168-4,25.1,0S195.215,200.61,188.283,204.612Z" transform="translate(14.643 -87.465)" fill="#6df7fb"/>
              <path id="Path_46953" data-name="Path 46953" d="M208,185.355l-12.437-7.181,21.176-12.226,12.437,7.18Z" transform="translate(55.584 -110.536)" fill="#6df7fb"/>
              <path id="Path_46954" data-name="Path 46954" d="M198.983,180.245l-15.672-4.61,13.6-15.406,15.672,4.61Z" transform="translate(42.237 -116.769)" fill="#6df7fb" opacity="0.8"/>
              <path id="Path_46955" data-name="Path 46955" d="M186.788,176.287,169.416,174.7l4.684-17.078,17.372,1.589Z" transform="translate(27.094 -119.611)" fill="#6df7fb" opacity="0.6"/>
              <path id="Path_46956" data-name="Path 46956" d="M175.048,174.7l-17.372,1.588-4.685-17.078,17.372-1.588Z" transform="translate(9.196 -119.611)" fill="#6df7fb" opacity="0.4"/>
              <path id="Path_46957" data-name="Path 46957" d="M164.912,175.634l-15.671,4.61-13.6-15.406,15.671-4.61Z" transform="translate(-9.706 -116.77)" fill="#6df7fb" opacity="0.2"/>
              <path id="Path_46958" data-name="Path 46958" d="M154.93,178.174l-12.437,7.18-21.177-12.226,12.437-7.18Z" transform="translate(-25.319 -110.537)" fill="#6df7fb" opacity="0.1"/>
              <path id="Path_46959" data-name="Path 46959" d="M183.925,195.3l-4.37-2.523,31.6-18.242,4.37,2.523Z" transform="translate(38.144 -101.175)" fill="#6df7fb" opacity="0.2"/>
              <path id="Path_46960" data-name="Path 46960" d="M179.735,194.971l-5.506-1.62,20.286-22.987,5.506,1.62Z" transform="translate(32.34 -105.724)" fill="#6df7fb" opacity="0.4"/>
              <path id="Path_46961" data-name="Path 46961" d="M174.248,194.349l-6.1-.558,6.99-25.481,6.1.558Z" transform="translate(25.709 -107.963)" fill="#6df7fb" opacity="0.6"/>
              <path id="Path_46962" data-name="Path 46962" d="M171.646,193.791l-6.1.558-6.991-25.481,6.1-.558Z" transform="translate(15.256 -107.963)" fill="#6df7fb" opacity="0.8"/>
              <path id="Path_46963" data-name="Path 46963" d="M172.183,193.351l-5.506,1.62L146.39,171.984l5.506-1.62Z" transform="translate(2.004 -105.725)" fill="#6df7fb"/>
              <path id="Path_46964" data-name="Path 46964" d="M172.162,192.781l-4.37,2.523-31.6-18.242,4.37-2.523Z" transform="translate(-9.106 -101.176)" fill="#6df7fb"/>
              <path id="Path_46965" data-name="Path 46965" d="M171.585,192.137l-2.805,3.179L128.965,183.6l2.805-3.179Z" transform="translate(-16.984 -94.762)" fill="#6df7fb"/>
              <path id="Path_46966" data-name="Path 46966" d="M170.509,191.482l-.967,3.524-44.134-4.036.967-3.524Z" transform="translate(-20.861 -87.111)" fill="#6df7fb"/>
              <path id="Path_46967" data-name="Path 46967" d="M169.542,192.984l.967,3.524-44.134,4.035-.967-3.524Z" transform="translate(-20.861 -81.076)" fill="#6df7fb"/>
              <path id="Path_46968" data-name="Path 46968" d="M168.78,196.5l2.806,3.179-39.814,11.712-2.806-3.179Z" transform="translate(-16.984 -77.248)" fill="#6df7fb"/>
              <path id="Path_46969" data-name="Path 46969" d="M167.793,199.572l4.37,2.523-31.6,18.242-4.37-2.523Z" transform="translate(-9.105 -73.897)" fill="#6df7fb"/>
              <g id="Group_6362" data-name="Group 6362">
                <path id="Path_46970" data-name="Path 46970" d="M225.874,169.938c46.444,32.361,49.039,78.608,7.828,112.535l16.665,15.4c56.865-40.9,55.615-99.811-3.7-139.939Z" transform="translate(88.617 -119.273)" fill="#6df7fb" opacity="0.6"/>
                <path id="Path_46971" data-name="Path 46971" d="M277.733,258.273C228.6,262.73,176.581,254.05,138.72,232.192A126.552,126.552,0,0,1,115.8,215.5l-28.351,5.636a145.262,145.262,0,0,0,30.526,23.031c47.875,27.643,114.9,37.456,176.413,29.5Z" transform="translate(-62.221 -56.541)" fill="#6df7fb" opacity="0.2"/>
                <path id="Path_46972" data-name="Path 46972" d="M77.3,264.936l28.366-5.64c-5.013-27,10.369-55.018,46.214-75.712,59.264-34.217,153.211-36.175,216.483-5.908l20.8-12.007c-74.8-36.852-187.3-34.892-258.022,5.939C87.065,197.05,69.125,231.862,77.3,264.936Z" transform="translate(-75.378 -139.432)" fill="#6df7fb"/>
              </g>
              <g id="Group_6363" data-name="Group 6363" transform="translate(161.903 82.703)">
                <path id="Path_46973" data-name="Path 46973" d="M163.955,267.684l-11.1-6.409,142.49-82.267,11.1,6.409Z" transform="translate(-152.855 -179.008)" fill="#6df7fb"/>
                <path id="Path_46974" data-name="Path 46974" d="M171.5,247.785l-11.1-6.409,61.928-35.754,11.1,6.409Z" transform="translate(-144.632 -150.006)" fill="#6df7fb" opacity="0.8"/>
                <path id="Path_46975" data-name="Path 46975" d="M179.571,263.479l-11.1-6.409,98.579-56.915,11.1,6.409Z" transform="translate(-135.838 -155.963)" fill="#6df7fb" opacity="0.6"/>
                <path id="Path_46976" data-name="Path 46976" d="M187.513,261.489l-11.1-6.409,76.739-44.305,11.1,6.409Z" transform="translate(-127.183 -144.39)" fill="#6df7fb" opacity="0.2"/>
              </g>
            </g>
          </g>
        </svg>
        <Row>
          <Col className="lg-7 md-10 xs-12">
            <Box className="banner-content"> 
              <Heading>
                Access the <br/>
                power of blockchain
              </Heading>
              <Text as="span" className="description">
                The highly the not having with lively. Our up with ran go her it
                gloomy the back, though however projected not for six with then,
                trusted as concepts belt.
              </Text>

              <Box className="coin-info">
                <Box>
                  <Image src={keyIcon} alt="crypto banner icon" />
                  <Text>Access</Text>
                </Box>
                <Box>
                  <Image src={watchIcon} alt="crypto banner icon" />
                  <Text>Speed</Text>
                </Box>
                <Box>
                  <Image src={heartIcon} alt="crypto banner icon" />
                  <Text>Certainty</Text>
                </Box>
              </Box>

              <Box className="banner-btn">
                <Link href="#">
                  <a className="btn btn-fill"> <FaGithub /> Download Crypto</a>
                </Link> 
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

export default BannerTwo;
