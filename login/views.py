# from django.shortcuts import render

# Create your views here.
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.db import IntegrityError
from django.contrib.auth import authenticate, login, logout
import requests
from .models import Username
# Create your views here.
def home(request):
    return render(request, "login/index.html")

def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']
        data=Username(username=username,password=pass1,first_name=fname,last_name=lname,email=email)
        data.save()
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists. Please choose a different username.")
            return redirect('signup')
        
        try:
            myuser = User.objects.create_user(username, email, pass1)
            myuser.first_name = fname
            myuser.last_name = lname
            myuser.save()
            messages.success(request, "Your Account has been created successfully!!")
            return redirect('signin')
        except IntegrityError:
            messages.error(request, "An error occurred while creating your account. Please try again later.")
            return redirect('signup')
        
    return render(request, "login/signup.html")


def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        pass1 = request.POST['pass1']
        
        user = authenticate(username=username, password=pass1)
        
        if user is not None:
            login(request, user)
            fname = user.first_name
            # messages.success(request, "Logged In Sucessfully!!")
            return redirect("movie")
        else:
            messages.error(request, "Bad Credentials!!")
            return redirect('home')
    
    return render(request, "login/signin.html")


def signout(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!!")
    return redirect('home')

def movie(request):
    return render(request,'login/movie.html')

def search(request):
    status = False
    title = request.GET.get('search', 'default')
    

    if title:  
        url = f"https://api.themoviedb.org/3/search/movie?api_key=889d6635585df62ced345024566c8757&query={title}"
        response = requests.get(url)
        data = response.json()
        
        # Extract data from API response
        movies = data.get('results', [])
        file_paths_t = []
        file_paths_o = []
        file_paths_p = []
        for movie in movies:
            # Use .get() method to safely retrieve values
            movie_title = movie.get('title', 'Unknown Title')
            movie_overview = movie.get('overview', 'No overview available')
            poster_path = movie.get('poster_path')
            if poster_path:
                # Construct full poster path
                full_path = 'https://image.tmdb.org/t/p/w500' + poster_path
                file_paths_p.append(full_path)
            else:
                # If poster_path is None or empty, append a placeholder
                file_paths_p.append('https://via.placeholder.com/500x750?text=No+Poster+Available')
            file_paths_t.append(movie_title)
            file_paths_o.append(movie_overview)
        print(file_paths_p)
        print(file_paths_t)
        status = True
        params = {'movies_name': file_paths_t, 'movies_poster': file_paths_p, 'overview': file_paths_o, 'status': status}
        return render(request, 'login/search.html', params)
    else:
        messages.error(request, "Please enter a search query.")
        return redirect('movie')
