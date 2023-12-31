<?php

namespace DynamicOOOS\TelegramBot\Api\Types;

use DynamicOOOS\TelegramBot\Api\BaseType;
use DynamicOOOS\TelegramBot\Api\TypeInterface;
class ChatLocation extends BaseType implements TypeInterface
{
    /**
     * {@inheritdoc}
     *
     * @var array
     */
    protected static $requiredParams = ['location', 'address'];
    /**
     * {@inheritdoc}
     *
     * @var array
     */
    protected static $map = ['location' => Location::class, 'address' => \true];
    /**
     * The location to which the supergroup is connected. Can't be a live location.
     *
     * @var Location
     */
    protected $location;
    /**
     * Location address; 1-64 characters, as defined by the chat owner
     *
     * @var string
     */
    protected $address;
    /**
     * @return Location
     */
    public function getLocation()
    {
        return $this->location;
    }
    /**
     * @param Location $location
     * @return void
     */
    public function setLocation($location)
    {
        $this->location = $location;
    }
    /**
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }
    /**
     * @param string $address
     * @return void
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }
}
