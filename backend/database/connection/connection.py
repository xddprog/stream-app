from tortoise import Tortoise

import backend.database.models as models
from backend.utils.config.config import load_database_config


async def init_database():
    config = load_database_config()
    await Tortoise.init(
        db_url="postgres://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}".format(
            **config.model_dump()
        ),
        modules={"models": [
            f"backend.database.models.{model}" for model in models.__all__]
        },
    )
    await Tortoise.generate_schemas()
