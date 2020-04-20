from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import MyTokenObtainPairView, CustomUserCreate

urlpatterns = [
    path('user/create', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain', MyTokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
