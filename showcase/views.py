from django.shortcuts import render
import time


def index(request):
    return render(request, "showcase/index.html")


def about(request):
    # print("Start : %s" % time.ctime())
    # time.sleep(15)
    # print("End : %s" % time.ctime())
    return render(request, "showcase/about.html")
