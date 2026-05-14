/**
 * Generated Tool: databasesTool_0614
 * Domain: Databases
 * ID: 0614
 */
exports.databasesTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0614:', error);
    throw error;
  }
};
