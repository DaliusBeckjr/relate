


class Blog:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.body = data['body']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }