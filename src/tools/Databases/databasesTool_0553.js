/**
 * Generated Tool: databasesTool_0553
 * Domain: Databases
 * ID: 0553
 */
exports.databasesTool_0553 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0553:', error);
    throw error;
  }
};
