/**
 * Generated Tool: databasesTool_0372
 * Domain: Databases
 * ID: 0372
 */
exports.databasesTool_0372 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0372:', error);
    throw error;
  }
};
