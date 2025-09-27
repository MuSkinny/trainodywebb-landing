export type Dictionary = {
    hero: {
        badgeReviewText: string;
        title:string;
        subtitle:string;
        ctaButtonText: string;
    }
    marquee: {
        text: string
    }
    
    settings: {
        settings: string;
        profile: string;
        gym: string;
        preferences: string;
        personal_info: string;
        name: string;
        surname: string;
        phone: string;
        save: string;
        notification: string;
        email_notification:string;
        email_notification_desc: string;
        personalize: string;
        dark_theme: string;
        dark_theme_desc: string;
        language: string;
        theme: string;
    }

    common: {
      save: string;
      cancel: string;
      loading: string;
      page: string;
      of: string;
      month: string;
      year: string;
      show_less:string;
      show_all: string;
    };

    clients: {
        link_new_client: {
            buttonTitle: string;
            dialogTitle: string,
            dialogDescription: string;
            close: string;
        },
        profile: string,
        name: string,
        start_date: string;
        find_client: string;
        no_clients_found: string;

    };

    dash: {
        active_clients: string;
        weekly_sessions: string;
        next_event: string;
        workouts_status: string;
        see_all: string;
        new_clients: string;
        assign_workout: string;
    };
    menu: {
        features: string;
        pricing: string;
        faq: string;
    };
    features: {
        badge_text: string;
        title: string;
        subtitle: string;
        handle_clients: string;
        handle_clients_desc: string;
        custom_workout:string;
        custom_workout_desc:string;
        calendar: string;
        calendar_desc: string;
        exercises: string;
        exercises_desc: string;
        chat: string;
        chat_desc: string;
        payment: string;
        payment_desc: string;
        app:string;
        app_desc:string;
    };
    pricing: {
        badge_text: string;
        title: string;
        subtitle: string;
        try: string;
        contact_us: string;
        contact: string;
    };
    reviews: {
        badge_text: string;
        title: string;
        subtitle: string;
    };
    faq: {
        title: string;
        subtitle: string;
    }
}