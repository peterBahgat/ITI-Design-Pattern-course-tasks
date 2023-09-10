// Interface for handling shipment requests
class ShipmentServiceInterface {
  placeShipment(shipment) {
    throw new Error('Method not implemented');
  }
}

// Implementation of ShipmentService
class ShipmentService extends ShipmentServiceInterface {
  constructor(shipmentValidator, shipmentRepository) {
    super();
    this.shipmentValidator = shipmentValidator;
    this.shipmentRepository = shipmentRepository;
  }

  placeShipment(shipment) {
    if (this.shipmentValidator.validateShipment(shipment)) {
      return this.shipmentRepository.saveShipment(shipment);
    }
    throw new Error('Invalid shipment');
  }
}

// Shipment class representing a shipment request
class Shipment {
  constructor(
    pickupDate,
    deliveryDate,
    shipper,
    customer,
    shippingMethod,
    commodities,
    overseasRequirements
  ) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.shipper = shipper;
    this.customer = customer;
    this.shippingMethod = shippingMethod;
    this.commodities = commodities;
    this.overseasRequirements = overseasRequirements;
  }
}

// Shipper class representing the shipper's information
class Shipper {
  constructor(name, shipFrom) {
    this.name = name;
    this.shipFrom = shipFrom;
  }
}

// ShippingMethod class representing the chosen shipping method
class ShippingMethod {
  constructor(method) {
    this.method = method;
  }
}

// Customer class representing the customer or receiver's information
class Customer {
  constructor(name, shipTo) {
    this.name = name;
    this.shipTo = shipTo;
  }
}

// Commodity class representing the items being shipped
class Commodity {
  constructor(name) {
    this.name = name;
  }
}

// OverseasRequirements class representing customer's overseas requirements
class OverseasRequirements {
  constructor(requirements) {
    this.requirements = requirements;
  }
}

// ShipmentValidator class for validating shipments
class ShipmentValidator {
  validateShipment(shipment) {
    // Validate pickup date and delivery date
    const pickupDate = new Date(shipment.pickupDate);
    const deliveryDate = new Date(shipment.deliveryDate);

    // Check if pickup date is in the future
    if (pickupDate <= new Date()) {
      throw new Error('Pickup date must be in the future.');
    }

    // Check if delivery date is after pickup date
    if (deliveryDate <= pickupDate) {
      throw new Error('Delivery date must be after pickup date.');
    }

    // Additional validation logic can be added here

    // If all checks pass, return true
    return true;
  }
}

// ShipmentRepository class for managing shipments in a repository
class ShipmentRepository {
  constructor() {
    this.shipments = [];
  }

  saveShipment(shipment) {
    // Add the shipment to the repository and return its ID
    const shipmentId = this.shipments.length + 1;
    this.shipments.push({ ...shipment, id: shipmentId });
    return shipmentId;
  }
}

// ShipmentService usage example
const shipmentValidator = new ShipmentValidator();
const shipmentRepository = new ShipmentRepository();
const shipmentService = new ShipmentService(
  shipmentValidator,
  shipmentRepository
);

const shipper = new Shipper('Shipper Name', 'Location A');
const customer = new Customer('Customer Name', 'Location B');

const commodities = [new Commodity('Item 1'), new Commodity('Item 2')];

const overseasRequirements = new OverseasRequirements([
  'Requirement 1',
  'Requirement 2',
]);

const shipmentRequest = new Shipment(
  '2023-09-15',
  '2023-09-20',
  shipper,
  customer,
  new ShippingMethod('Playground'), // Choose shipping method
  commodities,
  overseasRequirements
);

try {
  const shipmentId = shipmentService.placeShipment(shipmentRequest);
  console.log(`Shipment placed with ID: ${shipmentId}`);
} catch (error) {
  console.error(`Error placing shipment: ${error.message}`);
}
