import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Places from "../components/Places";
import Testimonies from "../components/Testimonies";


export default function Admin() {

    return (
      <div>
        <div>
          <Places />
        </div>
        <div>
          <Testimonies />
        </div>
      </div>
    );
}