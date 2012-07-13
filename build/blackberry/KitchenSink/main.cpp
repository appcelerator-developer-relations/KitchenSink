/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2012 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#include "tibb.h"

#include <fstream>
#include <string>

using namespace std;

int main(int argc, char** argv)
{
    string javascript;
    {
        ifstream ifs("app/native/assets/app.js");
        if (!ifs)
        {
            return -1;
        }
        getline(ifs, javascript, string::traits_type::to_char_type(string::traits_type::eof()));
        ifs.close();
    }
    int ret = tibb_run(javascript.c_str(), argc, argv);
    return ret;
}
