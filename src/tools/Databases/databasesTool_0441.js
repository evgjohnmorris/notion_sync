/**
 * Generated Tool: databasesTool_0441
 * Domain: Databases
 * ID: 0441
 */
exports.databasesTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0441:', error);
    throw error;
  }
};
