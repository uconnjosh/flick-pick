export default function() {

  this.get('/movies', () => {
    return {
      movies: [
  {
    "id": "440cc42b43bbcb8b5d38fbdede9e22f1",
    "title": "The Great Wall",
    "rating": "PG-13",
    "poster": "https://dl.dropboxusercontent.com/s/0zs1xh77m9g0fmx/the_great_wall.jpg"
  },
  {
    "id": "b4c2c326a4d335da654d4fd944bf88d0",
    "title": "Fifty Shades Darker",
    "rating": "R",
    "poster": "https://dl.dropboxusercontent.com/s/dt6wgt92cu9wqcr/fifty_shades_darker.jpg"
  },
  {
    "id": "f94447a9a91123041f6eb0679f01d80d",
    "title": "Doctor Strange",
    "rating": "PG-13",
    "poster": "https://dl.dropboxusercontent.com/s/tt2523gcspjr7l7/doctor_strange.jpg"
  },
  {
    "id": "56a14924d53cc5f82f75505b52deffbd",
    "title": "Nocturnal Animals",
    "rating": "R",
    "poster": "https://dl.dropboxusercontent.com/s/k2oyo7iez0fl88j/nocturnal_animals.jpg"
  },
  {
    "id": "52208a5a1900898799ddef74d62ca710",
    "title": "Jurassic World",
    "rating": "PG-13",
    "poster": "https://dl.dropboxusercontent.com/s/xptvkca3epeh9z0/jurassic_world.jpg"
  },
  {
    "id": "83eca80b80a52736a16663dded65e5f2",
    "title": "Suicide Squad",
    "rating": "R",
    "poster": "https://dl.dropboxusercontent.com/s/qs0rnitbjc2cccu/suicide_squad.jpg"
  },
  {
    "id": "bb768d6cd40339bd98c948be36ed8fe7",
    "title": "War Dogs",
    "rating": "R",
    "poster": "https://dl.dropboxusercontent.com/s/bf49uxvt4ys020p/war_dogs.jpg"
  },
  {
    "id": "eb97596c1083cce466f1c664994983bb",
    "title": "Mad Max: Fury Road",
    "rating": "R",
    "poster": "https://dl.dropboxusercontent.com/s/dk1q22xef2o70o4/mad_max.jpg"
  },
  {
    "id": "1150762c2724f57b7cf83b5cb5c9fad5",
    "title": "Anthropoid",
    "rating": "R",
    "poster": "https://dl.dropboxusercontent.com/s/y4jhi3fd21r4l15/anthropoid.jpg"
  }
]
    }
  })
  this.get('/theaters', () => {
    return {
      theaters: [
  {
    "id": "2030c64ce72b4e4605cb01f2ba405b7d",
    "name": "Arclight",
    "showtimes": {
      "b4c2c326a4d335da654d4fd944bf88d0": [
          "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
      ],
      "f94447a9a91123041f6eb0679f01d80d": [
          "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
      ],
      "56a14924d53cc5f82f75505b52deffbd": [
          "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
      ],
      "52208a5a1900898799ddef74d62ca710": [
          "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
      ],
      "bb768d6cd40339bd98c948be36ed8fe7": [
          "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
      ],
      "eb97596c1083cce466f1c664994983bb": [
          "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
      ],
      "1150762c2724f57b7cf83b5cb5c9fad5": [
          "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
      ]
    }
  },
  {
    "id": "58f3356c0ffe87bcb324454056587b67",
    "name": "Pacific Theatres",
    "showtimes": {
      "f94447a9a91123041f6eb0679f01d80d": [
          "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
      ],
      "56a14924d53cc5f82f75505b52deffbd": [
          "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
      ],
      "52208a5a1900898799ddef74d62ca710": [
          "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
      ],
      "83eca80b80a52736a16663dded65e5f2": [
          "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
      ],
      "bb768d6cd40339bd98c948be36ed8fe7": [
          "10:40 am", "6:30 pm", "2:15 pm", "9:45 pm"
      ],
      "eb97596c1083cce466f1c664994983bb": [
          "9:30 am", "11:20 pm", "5:25 pm", "11:10 am", "8:15 pm"
      ],
      "1150762c2724f57b7cf83b5cb5c9fad5": [
          "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
      ]
    }
  },
  {
    "id": "af3de16703f2af385a6941de07f076a0",
    "name": "AMC",
    "showtimes": {
      "440cc42b43bbcb8b5d38fbdede9e22f1": [
          "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
      ],
      "b4c2c326a4d335da654d4fd944bf88d0": [
          "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
      ],
      "f94447a9a91123041f6eb0679f01d80d": [
          "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
      ],
      "56a14924d53cc5f82f75505b52deffbd": [
          "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
      ],
      "52208a5a1900898799ddef74d62ca710": [
          "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
      ],
      "83eca80b80a52736a16663dded65e5f2": [
          "9:30 am", "11:20 pm", "5:25 pm", "11:10 am", "8:15 pm"
      ],
      "bb768d6cd40339bd98c948be36ed8fe7": [
          "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
      ]
    }
  }
]
    }
  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
