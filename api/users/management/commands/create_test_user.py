from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = 'Create a test user for development'

    def add_arguments(self, parser):
        parser.add_argument('--email', type=str, help='User email', default='test@example.com')
        parser.add_argument('--password', type=str, help='User password', default='testpass123')
        parser.add_argument('--superuser', action='store_true', help='Create as superuser')

    def handle(self, *args, **options):
        email = options['email']
        password = options['password']
        is_superuser = options['superuser']

        if User.objects.filter(email=email).exists():
            self.stdout.write(
                self.style.WARNING(f'User with email {email} already exists')
            )
            return

        if is_superuser:
            user = User.objects.create_superuser(
                email=email,
                password=password,
                first_name='Test',
                last_name='Admin'
            )
            self.stdout.write(
                self.style.SUCCESS(f'Superuser created: {email}')
            )
        else:
            user = User.objects.create_user(
                email=email,
                password=password,
                first_name='Test',
                last_name='User'
            )
            self.stdout.write(
                self.style.SUCCESS(f'User created: {email}')
            )
