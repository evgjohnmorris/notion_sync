/**
 * Generated Tool: databasesTool_0528
 * Domain: Databases
 * ID: 0528
 */
exports.databasesTool_0528 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0528:', error);
    throw error;
  }
};
