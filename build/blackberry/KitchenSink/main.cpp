/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2012 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#include "tibb.h"
#include <stdio.h>
#include <malloc.h>

int main(int argc, char** argv)
{
    FILE* fp;
    fp = fopen("app/native/assets/app.js", "r");
    if (fp == NULL)
    {
        return -1;
    }
    char* buffer = (char*) malloc(4096);
    size_t len = fread(buffer, 1, 4096, fp);
    if (len < 1)
    {
        free(buffer);
        return -1;
    }
    buffer[len] = 0;
    fclose(fp);
    int ret = tibb_run(buffer, argc, argv);
    free(buffer);
    return ret;
}
