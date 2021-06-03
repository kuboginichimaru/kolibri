# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2021-06-03 12:22
from __future__ import unicode_literals

import time
import uuid

import django.db.models.deletion
import morango.models.fields.uuids
from django.conf import settings
from django.db import migrations
from django.db import models


class Migration(migrations.Migration):

    dependencies = [
        ("kolibriauth", "0019_collection_no_mptt"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("device", "0011_devicesettings_subset_of_users_device"),
    ]

    operations = [
        migrations.CreateModel(
            name="SyncQueue",
            fields=[
                (
                    "id",
                    morango.models.fields.uuids.UUIDField(
                        default=uuid.uuid4, primary_key=True, serialize=False
                    ),
                ),
                ("datetime", models.DateTimeField(auto_now_add=True)),
                ("updated", models.FloatField(default=time.time)),
                ("keep_alive", models.FloatField(default=5.0)),
                (
                    "facility",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="kolibriauth.Facility",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
