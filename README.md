# Soschofy
## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/).
- You have a Firebase account and project set up.
- You have a Cloudinary account and API key.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/tonmoyislam250/soschofy.git
    ```
2. Navigate to the project directory:
    ```sh
    cd soschofy
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Set up Firebase:
    - Go to your Firebase project settings.
    - Copy the Firebase config object and paste it into a `.env` file in the root of your project.

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

2. Set up Cloudinary:
    - Go to your Cloudinary dashboard.
        - Copy the Cloudinary credentials and paste them into the `.env` file in the root of your project.

        ```env
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
        NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
        NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
        NEXT_PUBLIC_CLOUDINARY_API_SECRET=your_api_secret
        ```

## Running the Application

To start the development server, run:
```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

## Contributing

To contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, please contact [Tonmoy](mailto:).