<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MockDataController extends Controller
{
    private const PAGES = [
        'dynamic-route' => 'catalog',
        'delayed' => 'catalog',
        'predictive' => 'catalog'
    ];

    public function catalog(): array
    {
        sleep(5);

        $data = [];
        for ($i = 0; $i < 12; $i++) {
            $data[] = [
                'id' => (string) $i,
                'name' => 'Item ' . ($i + 1),
                'image' => '/media/product_image.jpg'
            ];
        }
        return $data;
    }

    public function determineRouteType(Request $request): ?string
    {
        sleep(5);
        $type = $request->get('type', '');
        $decodedType = trim(urldecode($type), '/');

        return self::PAGES[$decodedType] ?? null;
    }
}
